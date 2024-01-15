import { Get, JsonController } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import Container from "typedi";
import { VendorsService } from "../vendors/vendors.service";
import { Envelope } from "@/types/envelope";

@JsonController()
export class ExplorationController {
  public vendor = Container.get(VendorsService);

  @Get("/consumers/:consumerId/vendors-for-you")
  @OpenAPI({ summary: "Get vendors for a consumer" })
  public async getVendorsForYou() {
    return new Envelope(await this.vendor.getVendors());
  }
}
