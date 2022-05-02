// assembly/model.ts
import { math, RNG, PersistentUnorderedMap } from "near-sdk-as";
export const vets = new PersistentUnorderedMap<u32, Vet>("vets");


@nearBindgen
export class Vet {
  Name: string;
  Surname: string;
  Id: u32;

  constructor(name: string, surname: string) {
    const rng = new RNG<u32>(1, u32.MAX_VALUE);
    const roll = rng.next();
    this.Id = math.hash32<string>(name + surname + roll.toString());
    this.Name = name;
    this.Surname = surname;
  }

  // Register Vet

  static registerNewVet(name: string, surname: string): Vet {
    const newVet = new Vet(name, surname);
    vets.set(newVet.Id, newVet);
    return newVet;
  }

  // Find/Get Vet

  static findVetById(vetId: u32): Vet {
    return vets.getSome(vetId);
  }
}