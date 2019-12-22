import { CheckRunConclusionTypes, CheckRunStatusTypes } from './constants';

export interface ICheckRun {
    status: CheckRunStatusTypes;
    conclusion: CheckRunConclusionTypes;
    name: string;
    checkSuite: {
        // check_suite
        id: number;
    };
}
