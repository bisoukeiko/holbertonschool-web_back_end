export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqfth() {
    return this._sqfth;
  }

  set sqfth(sqfth) {
    if (typeof sqfth !== 'number') {
      throw new TypeError('sqfth must be a number');
    }
    this._sqfth = sqfth;
  }
}
