import { TasksService } from "./TasksService";

export class TasksController {
  // @ts-expect-error
  constructor(private readonly tasksService: TasksService) { }
}
