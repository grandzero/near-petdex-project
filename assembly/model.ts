// assembly/model.ts
import { PersistentUnorderedMap, context, u128, Context, math, RNG } from "near-sdk-as";
import { Clinic, clinics } from "./Clinic";
import { Treatment } from "./Treatment";
import { Vax, VaxType } from "./Vax";
import { Vet, vets } from "./Vet";

// PetDex Project

// Think of this PersistentUnorderedMap like a database table.
// We'll use this to persist and retrieve data.
export const petDetails = new PersistentUnorderedMap<u32, PetDetails>("petDetails");
//export const clinics = new PersistentUnorderedMap<u32, Clinic>("clinics");

// PartialTodo class
// @nearBindgen
// export class PetDetails {

// }

// Think of this like a model class in something like mongoose or
// sequelize. It defines the shape or schema for our data. It will
// also contain static methods to read and write data from and to
// the todos PersistentUnorderedMap.
@nearBindgen
export class PetDetails {
  id: u32;
  name: string;
  age: u32;
  isSterilized: boolean;
  owner: string;
  treatments: Array<Treatment>;
  vaccinations: Array<Vax>;
  constructor(name: string, age: u32, isSterilized: boolean) {
    const rng = new RNG<u32>(1, u32.MAX_VALUE);
    const roll = rng.next();
    this.id = math.hash32<string>(name + roll.toString());
    this.name = name;
    this.age = age;
    this.isSterilized = isSterilized;
    this.owner = Context.predecessor;
    this.treatments = new Array<Treatment>();
    this.vaccinations = new Array<Vax>();
    petDetails.set(this.id, this);
  }

  static getOwnerOfPet(id: u32): string {
    return petDetails.getSome(id).owner;
  }


  // Add treatment
  static addTreatment(id: u32, name: string, desc: string, clinicId: u32, vetId: u32): Treatment {
    const petdetail = this.findById(id);
    assert(petdetail.owner == Context.predecessor, "Only pet owner can add treatment info");
    const clinic: Clinic = clinics.getSome(clinicId);
    const vet: Vet = vets.getSome(vetId);

    const t = new Treatment(name, desc, clinic, vet);
    petdetail.treatments.push(t);
    petDetails.set(id, petdetail);
    return t;
  }

  // Add vaccination
  static addVax(petid: u32, type: VaxType, name: string, desc: string, clinicId: u32, vetId: u32): Vax {
    const petdetail = this.findById(petid);
    assert(petdetail.owner == Context.predecessor, "Only pet owner can add vaccination info")
    const clinic: Clinic = clinics.getSome(clinicId);
    const vet: Vet = vets.getSome(vetId);

    const v = new Vax(type, name, desc, clinic, vet);
    petdetail.vaccinations.push(v);
    petDetails.set(petid, petdetail);
    return v;
  }


  // ADD THE CODE BELOW
  static findById(id: u32): PetDetails {
    // Lookup a todo in the PersistentUnorderedMap by its id.
    // This is like a SELECT * FROM todos WHERE id=?
    return petDetails.getSome(id);
  }

  // ADD THE CODE BELOW
  static find(offset: u32, limit: u32): PetDetails[] {
    // the PersistentUnorderedMap values method will
    // takes two parameters: start and end. we'll start
    // at the offset (skipping all todos before the offset)
    // and collect all todos until we reach the offset + limit
    // todo. For example, if offset is 10 and limit is 3 then
    // this would return the 10th, 11th, and 12th todo.
    return petDetails.values(offset, offset + limit);
  }


  // ADD CODE BELOW. DO NOT FORGET TO ADD THE CLASS PartialTodo ABOVE
  // static findByIdAndUpdate(id: u32, color: string): PetDetails {
  //   // find a todo by its id
  //   const point = this.findById(id);

  //   // update the todo in-memory
  //   point.color = color;
  //   if (Context.attachedDeposit > u128.from("0")) {
  //     point.persistEndtime = Context.blockIndex + 1800;
  //   }

  //   // persist the updated todo
  //   points.set(id, point);

  //   return point;

  //}


  static findByIdAndDelete(id: u32): void {
    petDetails.delete(id);
  }
}