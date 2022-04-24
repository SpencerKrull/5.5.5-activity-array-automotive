//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) { 
        if (this.passenger < this.maxPassengers) {
            if ((this.passenger + num) <= this.maxPassengers) {
            this.passenger += num;
            } else {
                console.log(`${this.model} ${this.make} cannot take this many passengers`);
            }
        } else {
            console.log('This car is full');
        }
    }

    start() { 
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }

    scheduleService() { 
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        } else {
            console.log('Scheduled Service is not needed at this time');
        }
    }
}

module.exports = { Car };