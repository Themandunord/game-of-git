import { User } from './../graphql.schema.d';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';
import { UsersService } from './../users/users.service';
import { AuthService } from './auth.service';

const usersServiceMock = jest.genMockFromModule<UsersService>('./../users/users.service');
const jwtServiceMock = jest.genMockFromModule<JwtService>('@nestjs/jwt/dist/jwt.service');

const CREATE_TOKEN_SCENARIOS = [
  {
    it:
      'Returns a token with its expiry when provided with valid userData and the user has GitHub Access Keys',
    scenario: {
      coreData: {
        id: 'someid',
        email: 'someStringValue',
        name: 'someStringValue',
        gitLogin: 'someStringValue',
      },
      token: 'sometoken',
      keys: [{}],
      hasAppKey: true,
    },
  },
  {
    it:
      'Returns a token with its expiry when provided with valid userData and the user has no GitHub Access Keys',
    scenario: {
      coreData: {
        id: 'someid',
        email: 'someStringValue',
        name: 'someStringValue',
        gitLogin: 'someStringValue',
      },
      token: 'sometoken',
      keys: [],
      hasAppKey: false,
    },
  },
];

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule, UsersModule],
      providers: [AuthService],
    })
      .overrideProvider(UsersService)
      .useValue(usersServiceMock)
      .overrideProvider(JwtService)
      .useValue(jwtServiceMock)
      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Creating a token', () => {
    const coreData = {
      id: 'someid',
      email: 'someStringValue',
      name: 'someStringValue',
      gitLogin: 'someStringValue',
    };
    it('Returns a token with its expiry when provided with valid userData and keys', async () => {
      const userData = {
        ...coreData,
        keys: [{}],
      };
      const expectedUserData = {
        ...coreData,
        hasAppKey: true,
      };

      const token = 'samplesignedtoken';
      const signMock = jest.fn(() => {
        return token;
      });
      jwtServiceMock.sign = signMock;

      await expect(service.createToken(userData as User)).resolves.toEqual({
        expiresIn: 3600,
        accessToken: token,
      });

      expect(signMock).toHaveBeenCalledTimes(1);
      expect(signMock).toHaveBeenCalledWith(expectedUserData);
    });
    it('Returns a token with its expiry when provided with valid userData and no keys', async () => {
      const userData = {
        ...coreData,
        keys: [],
      };
      const expectedUserData = {
        ...coreData,
        hasAppKey: false,
      };

      const token = 'samplesignedtoken';
      const signMock = jest.fn(() => {
        return token;
      });
      jwtServiceMock.sign = signMock;

      await expect(service.createToken(userData as User)).resolves.toEqual({
        expiresIn: 3600,
        accessToken: token,
      });

      expect(signMock).toHaveBeenCalledTimes(1);
      expect(signMock).toHaveBeenCalledWith(expectedUserData);
    });
  });

  describe('Validating User Email', () => {
    it('CallsUsersService.get only once', async () => {
      const getMock = jest.fn(async () => {
        return {} as User;
      });
      usersServiceMock.get = getMock;
      await expect(service.validateUser('someEmail')).resolves.toEqual({});
      expect(getMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Encrypting and comparing a User Password', () => {
    it('Can Successfully encrypt and validate a password and hashed token', async () => {
      const password = 'somePas$w04D';
      const hashed = await service.encryptPassword(password);
      await expect(service.comparePassword(password, hashed)).resolves.toBeTruthy();
    });
  });
});
