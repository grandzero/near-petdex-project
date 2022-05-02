// assembly/model.ts
import { math, RNG, PersistentUnorderedMap } from "near-sdk-as";

export const clinics = new PersistentUnorderedMap<u32, Clinic>("clinics");

@nearBindgen
export class Clinic {
  Name: string;
  Id: u32;

  constructor(name: string) {
    const rng = new RNG<u32>(1, u32.MAX_VALUE);
    const roll = rng.next();
    this.Id = math.hash32<string>(name + roll.toString());
    this.Name = name;
  }

  // Register Clinic
  static registerNewClinic(name: string): Clinic {
    const newClinic = new Clinic(name);
    clinics.set(newClinic.Id, newClinic);
    return newClinic;
  }
  // Find Clinic
  static findClinicById(clinicId: u32): Clinic {
    return clinics.getSome(clinicId);
  }

}