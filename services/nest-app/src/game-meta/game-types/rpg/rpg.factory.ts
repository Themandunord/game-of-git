export class RpgFactory {
  public build(gameConfig: any) {
    throw new Error("Method not implemented.");
  }
}

const factory = new RpgFactory();

export default factory;
