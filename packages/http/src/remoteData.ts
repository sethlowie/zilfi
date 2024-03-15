type Loading = {
  status: "loading";
};

export const createLoading = (): Loading => ({
  status: "loading",
});

type NotAsked = {
  status: "notAsked";
};

export const createNotAsked = (): NotAsked => ({
  status: "notAsked",
});

type Success<T> = {
  status: "success";
  data: T;
  lastFetched: number;
};

export const createSuccess = <T>(data: T): Success<T> => ({
  status: "success",
  data,
  lastFetched: Date.now(),
});

type Refreshing<T> = {
  status: "refreshing";
  data: T;
  lastFetched: number;
};

export const createRefreshing = <T>(data: T): Refreshing<T> => ({
  status: "refreshing",
  data,
  lastFetched: Date.now(),
});

type Failure = {
  status: "failure";
  error: string;
};

export const createFailure = (error: string): Failure => ({
  status: "failure",
  error,
});

export const hasData = <T>(
  remoteData: unknown,
): remoteData is Success<T> | Refreshing<T> => {
  if (typeof remoteData !== "object" || remoteData === null) {
    return false;
  }

  if (remoteData.hasOwnProperty("data")) {
    return true;
  }

  return false;
};

export type RemoteData<T> =
  | Loading
  | NotAsked
  | Success<T>
  | Refreshing<T>
  | Failure;
