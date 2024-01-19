import { AppDataSource } from "@/data-source";
import { Service } from "typedi";
import { CreateVendorDto, UpdateVendorDto } from "./vendors.dto";
import { VendorEntity } from "./vendor.entity";

@Service()
export class VendorsService {
  public async getVendor(vendorId: number) {
    return AppDataSource.getRepository(VendorEntity).findOne({
      where: { id: vendorId },
      relations: { inventories: true },
    });
  }

  public async getVendors() {
    return AppDataSource.getRepository("VendorEntity").find();
  }

  public async createVendor(vendorData: CreateVendorDto) {
    return AppDataSource.getRepository("VendorEntity").save({
      ...vendorData,
      user: { id: vendorData.userId },
    });
  }

  public async updateVendor(vendorId: number, vendorData: UpdateVendorDto) {
    const vendor = new VendorEntity();
    vendor.id = vendorId;
    vendor.name = vendorData.name;
    vendor.location = vendorData.location;
    return AppDataSource.getRepository("VendorEntity").save(vendor);
  }
}
