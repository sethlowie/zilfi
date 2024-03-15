import { RemoteResult, okRemoteResult } from "@zilfi/http";
import { Task } from "@zilfi/types";

// create a fake "http response time" to simulate a network request
const randomWait = () =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

export class TasksIO {
  constructor() {}

  async getTasks(): Promise<RemoteResult<Task[]>> {
    await randomWait();
    return okRemoteResult([
      { id: "1", title: "Task 1", completed: false },
      { id: "2", title: "Task 2", completed: true },
    ]);
  }
}
