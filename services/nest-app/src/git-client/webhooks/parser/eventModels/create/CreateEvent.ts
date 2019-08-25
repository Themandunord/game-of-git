import { Create } from "./../EventType.types";
import { BaseBranchOrTagEvent } from "../../common/BaseBranchOrTagEvent";

export class CreateEvent extends BaseBranchOrTagEvent {
  public event: Create;
}
