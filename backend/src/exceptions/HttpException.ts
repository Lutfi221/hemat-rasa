import { HttpError } from "routing-controllers";

export class HttpException extends HttpError {
  public status: number;
  public message: string | undefined;

  constructor(status: number, message?: string | undefined) {
    super(status, message);
    this.status = status;
    this.message = message;
  }
}
