import { Task } from "./task";
import { EntityBase } from "./entity-base";

export interface Module extends EntityBase {
    task: Task
}
