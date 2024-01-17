import { JsonController, Param, Post } from "routing-controllers";
import Container from "typedi";
import { AuthService } from "./auth.service";
import { OpenAPI } from "routing-controllers-openapi";
import { Envelope } from "@/types/envelope";

@JsonController()
export class AuthController {
  public auth = Container.get(AuthService);

  @Post("/users/:userId/tokens")
  @OpenAPI({ summary: "Create a user token" })
  public async createUserToken(@Param("userId") userId: number) {
    return new Envelope(await this.auth.createUserToken(userId));
  }
}
