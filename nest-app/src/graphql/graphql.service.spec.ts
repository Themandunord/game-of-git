import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlService } from './graphql.service';

interface GqlDescribe {
    describe: string;

    children: (GqlDescribe | GqlIt)[];
}

interface GqlIt {
    query: string;
}

const EXPECTED_GQL_QUERY_CONTEXTS: GqlDescribe[] = [
    {
        describe: 'Users',
        children: [
            {
                query: 'UserById'
            },
            {
                query: 'UserByEmail'
            },
            {
                query: 'CreateUser'
            },
            {
                query: 'DeleteUserById'
            },
            {
                query: 'DeleteUserByEmail'
            },
            {
                query: 'AllUsers'
            }
        ]
    }
];

function isDescribe(describeOrIt: any): describeOrIt is GqlDescribe {
    return (
        describeOrIt.describe !== undefined &&
        describeOrIt.children !== undefined
    );
}

function isIt(describeOrIt: any): describeOrIt is GqlIt {
    return describeOrIt.query !== undefined;
}

describe('GraphqlService', () => {
    let service: GraphqlService;

    const runGqlQueryContextTest = (
        describeOrItArray: (GqlDescribe | GqlIt)[]
    ) =>
        describeOrItArray.map(describeOrIt =>
            isDescribe(describeOrIt)
                ? describe(describeOrIt.describe, () => {
                      runGqlQueryContextTest(describeOrIt.children);
                  })
                : it(describeOrIt.query, () => {
                      expect(service.sdk).toHaveProperty(describeOrIt.query);
                  })
        );

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GraphqlService]
        }).compile();

        service = module.get<GraphqlService>(GraphqlService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('Exposes an initialized GqlClient SDK with expected types', () => {
        runGqlQueryContextTest(EXPECTED_GQL_QUERY_CONTEXTS);
    });
});
