import { GitClientService } from "./../git-client.service";
import { Controller, Put, Body, Post } from "@nestjs/common";
import { UsersService } from "../../users/users.service";
import { AppKeyService } from "./app-key.service";

@Controller("app-key")
export class AppKeyController {
  constructor(private readonly gitService: GitClientService) {}

  /**
   * Adds a GitHub App Key and attaches it to the given User
   * @param username
   * @param key
   * @param name
   * @param user
   */
  @Put("/add-key")
  async addAppKey(
    @Body("username") username: string,
    @Body("key") key: string,
    @Body("name") name: string,
    @Body("user") user: string
  ) {
    return await this.gitService.appKey.store(key, user, name, username);
  }

  /**
   * Using the given key, validate that it is a working GitHub key by executing a basic query against the GitHub API
   * @param key
   * @param user
   */
  @Post("/validate-key")
  async validateKey(@Body("key") key: string, @Body("username") user: string) {
    const isValid = await this.gitService.appKey.validate(key, user);

    return isValid;
  }
}
