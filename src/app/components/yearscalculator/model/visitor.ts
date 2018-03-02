export class Visitor{
  private _name: string;
  private _countryName: string;
  private _birthDate: Date;
  private _selected: boolean;

  constructor(name: string, countryName: string, birthDate: Date) {
    this._name = name;
    this._countryName = countryName;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  get countryName(): string {
    return this._countryName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  get birthMonth(): string{
    return this.birthDate.toLocaleString('es-ar', {month: 'long'});
  }

  get birthDayNumber(): number{
    return this.birthDate.getDate();
  }

  get currentYears(): number {
    const timeDiff = Math.abs(new Date().getTime() - this.birthDate.getTime());

    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  isSelected(){
    return this._selected;
  }

  select() {
    this._selected = true;
  }

  unselect() {
    this._selected = false;
  }
}
