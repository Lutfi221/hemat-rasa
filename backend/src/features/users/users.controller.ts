import { Envelope } from "@/types/envelope";
import { Get, JsonController, Param } from "routing-controllers";

@JsonController()
export class UsersController {
  public path = "/users";

  @Get("/users/:userId")
  public getUser(@Param("userId") userId: string) {
    return new Envelope({
      id: userId,
      name: "Alif",
    });
  }
}
