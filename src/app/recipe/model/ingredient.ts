import {CapacityType} from "./enum/capacity-type";

export class Ingredient {
  id?: string;
  name: string;
  capacity: number;
  capacityType: CapacityType;

  constructor(id: string, name: string, capacity: number, capacityType: CapacityType) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.capacityType = capacityType;
  }
}
