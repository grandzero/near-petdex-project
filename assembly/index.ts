// contract/assembly/index.ts
import { PetDetails } from "./model";
import { Clinic } from "./Clinic";
import { Vet } from "./Vet";
import { Treatment } from "./Treatment";
import { Vax, VaxType } from "./Vax";


export function createClinic(name: string): Clinic {
  return Clinic.registerNewClinic(name);
}

export function getClinic(clinicID: u32): Clinic {
  return Clinic.findClinicById(clinicID);
}

export function createVet(name: string, surname: string): Vet {
  return Vet.registerNewVet(name, surname);
}

export function getVet(vetId: u32): Vet {
  return Vet.findVetById(vetId);
}

export function createPet(name: string, age: u32, isSterilized: boolean): PetDetails {
  return new PetDetails(name, age, isSterilized);
}

export function addTreatment(id: u32, name: string, desc: string, clinicId: u32, vetId: u32): Treatment {
  return PetDetails.addTreatment(id, name, desc, clinicId, vetId);
}

export function addVax(petid: u32, type: VaxType, name: string, desc: string, clinicId: u32, vetId: u32): Vax {
  return PetDetails.addVax(petid, type, name, desc, clinicId, vetId);
}

export function getById(id: u32): PetDetails {
  return PetDetails.findById(id);
}

export function get(offset: u32, limit: u32 = 10): PetDetails[] {
  return PetDetails.find(offset, limit);
}

export function del(id: u32): void {
  PetDetails.findByIdAndDelete(id);
}

export function getOwnerOfPet(id: u32): string {
  return PetDetails.getOwnerOfPet(id);
}
