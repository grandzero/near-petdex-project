// assembly/model.ts
import { Context } from "near-sdk-as";
import { Vet } from "./Vet";
import { Clinic } from "./Clinic";


@nearBindgen
export class Treatment {
  Name: string;
  Description: string;
  Timestamp: u64;
  ClinicInfo: Clinic;
  Vet: Vet

  constructor(name: string, desc: string, clinic: Clinic, vet: Vet) {
    this.Name = name;
    this.Description = desc;
    this.ClinicInfo = clinic;
    this.Vet = vet;
  }

}