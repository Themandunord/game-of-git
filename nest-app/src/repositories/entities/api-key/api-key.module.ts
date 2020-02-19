import { Module, forwardRef } from '@nestjs/common';
import { AuthModule } from '../../../auth/auth.module';
import { GraphqlModule } from '../../../graphql/graphql.module';
import { RepositoryProvidersModule } from '../../providers/repository-providers.module';
import { ApiKeyResolver } from './api-key.resolver';
import { ApiKeyService } from './api-key.service';

@Module({
    imports: [
        GraphqlModule,
        forwardRef(() => AuthModule),
        RepositoryProvidersModule.forRoot()
    ],
    providers: [ApiKeyResolver, ApiKeyService],
    exports: [ApiKeyService, ApiKeyResolver]
})
export class ApiKeyModule {}
