export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') this._code = code;
    if (typeof name === 'string') this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') this._code = newCode;
    else throw new TypeError('Code must be a string.');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') this._name = newName;
    else throw new TypeError('Name must be a string.');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}