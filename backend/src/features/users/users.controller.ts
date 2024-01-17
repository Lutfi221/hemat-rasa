import { AppDataSource } from "@/data-source";
import { Envelope } from "@/types/envelope";
import {
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  QueryParam,
  UseBefore,
} from "routing-controllers";
import { UserEntity } from "./user.entity";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { CreateUserDto } from "./users.dto";
import { OpenAPI } from "routing-controllers-openapi";
import Container from "typedi";
import { UsersService } from "./users.service";

@JsonController()
export class UsersController {
  public path = "/users";
  public user = Container.get(UsersService);

  @Get("/users")
  public async getUsers(
    @QueryParam("username", { required: true }) username: string
  ) {
    const user = await AppDataSource.getRepository(UserEntity).findOne({
      where: { username },
    });
    if (!user) return new Envelope([]);

    return new Envelope([
      {
        id: user.id,
        username: user.username,
      },
    ]);
  }

  @Get("/users/:userId")
  public async getUser(@Param("userId") userId: number) {
    return new Envelope(
      await AppDataSource.getRepository(UserEntity).findOne({
        where: { id: userId },
      })
    );
  }

  @Post("/users")
  @HttpCode(201)
  @UseBefore(ValidationMiddleware(CreateUserDto))
  @OpenAPI({ summary: "Create a new user" })
  public async createUser(@Body() user: CreateUserDto) {
    return new Envelope(await this.user.createUser(user));
  }
}
