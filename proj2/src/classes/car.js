import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
  // constructor(licenseNum) {
  //   super(licenseNum);
  //   console.log("Car constructor ");
  // }

  constructor(license, model, latLong) {
    super(license, model, latLong);
    this.miles = null;
    this.make = null;
  }
}
