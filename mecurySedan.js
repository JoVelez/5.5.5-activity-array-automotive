// forgot to import
import Vehicle from "./vehicleBaseClass.js";

//this includes the vehicle class as a module
//const VehicleModule = require("./vehicle")

const { Vehicle } = require("./vehicleBaseClass");

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

// The super keyword is used to access and call functions on an object's parent.

class Car extends Vehicle{
constructor (make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 6
    this.passenger = 0
    this.numbOfWheels = 4
    this.maxSpeed = 200
    this.fuel = 100
    this.schedService = false
    }

    loadPassenger(num){
        if(this.passenger < this.maxPassengers) {
        availableRoom == true
       // forgot to define num
       // also didnt return passenger
        this.passenger = num;
        return this.passenger
    } else {
        console.log("There's no room!")
        }
    }   

    start() {
        if (this.fuel > 0) {
        start = true
    } else {
        console.log("There is no fuel!")
        }
    }
    //milage isnt there for some reason, might need to rewrite the code
    schedService(mileage){
        if(this.mileage > 30000) {
        this.schedService == true
        // forgot to put return again
        return this.schedService;
            }
        }
    } 