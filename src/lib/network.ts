export enum APIStatus {
  Success = "success",
  Error = "error",
}

export interface ActionResult<T> {
  status: APIStatus;
  message: string;
  data?: T;
}

export type APIResponse<T> = ActionResult<T>;
