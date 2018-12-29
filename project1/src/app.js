//class
class Drone {
  //constructor
  constructor(id, name) {
    this._id = id;
    this.name = name;
  }
  //static method
  static compney() {
    console.log("in compney ");
  }
  // method
  fly() {
    console.log("drone " + this.name + " is flying ");
  }
  // getter
  get id() {
    console.log("in getter");
    return this._id;
  }
  //setter
  set id(value) {
    this._id = value;
  }
}

// static properties of class
Drone.mexlength = 2000;
console.log("this is class static properties " + Drone.mexlength);

// objects
let drone = new Drone("p1", "parth");
let drone2 = new Drone("p2", "pintu");

// calling static method with class name
//Drone.compney();

// calling fly method with objects
drone.fly();
//drone2.fly();

// two types of calling values using objects
//console.log(drone.id + " " + drone.name);
//console.log(  drone2["id"] + " " + drone2["name"]);

//caling getter
let drone3 = new Drone("p3");
// set the value using setter
drone3.id = "p4";
console.log(drone3.id);
