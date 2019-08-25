export class MockCommandBus {
    constructor(public result: () => any = () => {}) {}
    public async execute(...args: any[]): Promise<any> {
        return this.result();
    }
}
