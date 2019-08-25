// https://developer.github.com/v3/activity/events/types/#projectevent

import { AGitHubEvent } from "../AGitHubEvent.abstract";
import { IRepository } from "../../common/IRepository.interface";
import { IRepositoryUser } from "../../common/IRepositoryUser.interface";
import { Project } from "./../EventType.types";
import { ProjectActionType } from "./constants";
import { IProject } from "./IProject.interface";

export class ProjectEvent extends AGitHubEvent {
  public event: Project;

  public action: ProjectActionType;

  public changes?: any; // TODO: only if action was `edited`

  public project: IProject;

  public repository: IRepository;

  public sender: IRepositoryUser;
}
