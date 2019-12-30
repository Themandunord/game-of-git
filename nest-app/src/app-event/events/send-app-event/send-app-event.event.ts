export class SendAppEvent {
    constructor(public readonly type: string, public readonly data: any) {}
}
