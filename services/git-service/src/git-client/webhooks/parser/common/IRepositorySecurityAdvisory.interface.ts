import { IRepositoryVulnerability } from './IRepositoryVulnerability.interface';

export interface IRepositorySecurityAdvisory {
	ghsaId: string;
	summary: string;
	description: string;
	severity: 'moderate' | string;
	identifiers: Array<{ value: string; type: string }>;
	references: Array<{ url: string }>;
	publishedAt: string;
	updatedAt: string;
	withDrawnAt: null | string;
	vulnerabilities: IRepositoryVulnerability[];
}
