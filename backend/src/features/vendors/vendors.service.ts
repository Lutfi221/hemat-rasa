import { AppDataSource } from "@/data-source";
import { Service } from "typedi";
import { CreateVendorDto } from "./vendors.dto";
import { VendorEntity } from "./vendor.entity";

@Service()
export class VendorsService {
  public async getVendor(vendorId: number) {
    return AppDataSource.getRepository("VendorEntity").findOne({
      where: { id: vendorId },
    });
  }

  public async getVendors() {
    return AppDataSource.getRepository("VendorEntity").find();
  }

  public async createVendor(vendorData: CreateVendorDto) {
    const vendor = new VendorEntity();
    vendor.userId = vendorData.userId;
    return AppDataSource.getRepository("VendorEntity").save(vendor);
  }
}
