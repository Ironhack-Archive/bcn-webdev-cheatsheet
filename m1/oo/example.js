// -- base constructor Vehicle

function Vehicle (numberOfWheels) {
  this.running = false;
  this.wheels = numberOfWheels
}

// Vehicle methods

Vehicle.prototype.start = function () {
  this.running = true;
};

Vehicle.prototype.stop = function () {
  this.running = false;
};




// -- Truck constructor extends (inherits from) Vehicle

function Truck (capacity) {
  // inherited constructor
  Vehicle.call(this, 6);

  this.currentLoad = 0;
  this.capacity = capacity;
}

// inherit methods from base Vehicle
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

// Truck methods

Truck.prototype.addLoad = function (kilos) {
  if (this.currentLoad + kilos > this.capacity) {
    throw new Error('Excess load!!');
  }
  this.currentLoad += kilos;
};

ƒ (kilos) {
  if (this.currentLoad + kilos > this.capacity) {
    throw new Error('Excess load!!');
  }
  this.currentLoad += kilos;
}
