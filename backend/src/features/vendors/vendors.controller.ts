import {
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import Container from "typedi";
import { VendorsService } from "./vendors.service";
import { Envelope } from "@/types/envelope";
import { CreateVendorDto } from "./vendors.dto";
import { InventoriesService } from "../inventories/inventories.service";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";

@JsonController()
export class VendorsController {
  public path = "/vendors";
  public vendor = Container.get(VendorsService);
  public inventory = Container.get(InventoriesService);

  @Post("/vendors")
  @HttpCode(201)
  @UseBefore(ValidationMiddleware(CreateVendorDto))
  @OpenAPI({ summary: "Create a new vendor" })
  public async createVendor(@Body() vendor: CreateVendorDto) {
    return new Envelope(await this.vendor.createVendor(vendor));
  }

  @Get("/vendors")
  @OpenAPI({ summary: "Get vendors" })
  public async getVendors() {
    return new Envelope(await this.vendor.getVendors());
  }

  @Get("/vendors/:vendorId")
  @OpenAPI({ summary: "Get a vendor" })
  public async getVendor(@Param("vendorId") vendorId: number) {
    return new Envelope(await this.vendor.getVendor(vendorId));
  }

  @Post("/vendors/:vendorId/inventories")
  @HttpCode(201)
  @OpenAPI({ summary: "Create a new inventory" })
  public async createInventory(@Param("vendorId") vendorId: number) {
    return new Envelope(await this.inventory.createInventory(vendorId));
  }

  @Get("/vendors/:vendorId/inventories")
  @OpenAPI({ summary: "Get inventories" })
  public async getInventories(@Param("vendorId") vendorId: number) {
    return new Envelope(await this.inventory.getInventories(vendorId));
  }
}
