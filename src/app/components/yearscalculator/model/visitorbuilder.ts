import {Visitor} from './visitor';

interface IDatePickerDate {
  year: number;
  month: number;
  day: number;
}

export class VisitorBuilder {
  private _name = '';
  private _countryName = '';
  private _birthDate: IDatePickerDate;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get countryName(): string {
    return this._countryName;
  }

  set countryName(value: string) {
    this._countryName = value;
  }

  get birthDate(): IDatePickerDate {
    return this._birthDate;
  }

  set birthDate(value: IDatePickerDate) {
    this._birthDate = value;
  }

  buildResult(): Visitor{
    return new Visitor(this.name, this.countryName, new Date(this.birthDate.year, this.birthDate.month, this.birthDate.day));
  }
}
