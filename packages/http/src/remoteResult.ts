type OkOperation = {
  isOk: true;
  status: number;
};

type ErrorOperation = {
  isOk: false;
  status: number;
  error: string;
};

export type RemoteResult<T> = [T, OkOperation] | [null, ErrorOperation];

const createOkOperation = (status: number): OkOperation => ({
  isOk: true,
  status,
});

export const okRemoteResult = <T>(
  data: T,
  status: number = 200,
): RemoteResult<T> => [data, createOkOperation(status)];

const createErrorOperation = (
  status: number,
  error: string,
): ErrorOperation => ({
  isOk: false,
  status,
  error,
});

export const createErrorRemoteResult = <T>(
  status: number,
  error: string,
): RemoteResult<T> => [null, createErrorOperation(status, error)];
