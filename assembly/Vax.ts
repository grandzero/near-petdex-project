// assembly/model.ts
import { Context } from "near-sdk-as";
import { Vet } from "./Vet";
import { Clinic } from "./Clinic";

export enum VaxType {
  FPV,
  FHV,
  FCV,
  FeLV,
  Other
}

@nearBindgen
export class Vax {
  Type: VaxType;
  Name: string;
  Description: string;
  Timestamp: u64;
  ClinicInfo: Clinic;
  Vet: Vet



  constructor(type: VaxType, name: string, desc: string, clinic: Clinic, vet: Vet) {
    this.Type = type;
    this.Name = name;
    this.Description = desc;
    this.ClinicInfo = clinic;
    this.Vet = vet;
  }

}