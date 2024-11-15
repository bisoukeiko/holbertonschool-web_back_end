export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand nust be a string');
    }
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    if (typeof motor !== 'string') {
      throw new TypeError('motor nust be a string');
    }
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    if (typeof color !== 'string') {
      throw new TypeError('color nust be a string');
    }
    this._color = color;
  }

  cloneCar() {
    const output = new this.constructor();
    return output;
  }
}
