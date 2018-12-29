import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
  constructor(licenseNum) {
    super(licenseNum);
    console.log("Car constructor ");
  }
}
