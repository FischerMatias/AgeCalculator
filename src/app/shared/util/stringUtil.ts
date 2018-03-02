import {isNullOrUndefined} from 'util';

export class StringUtil{
  public static isNullOrEmpty(value: String){
    return isNullOrUndefined(value) || value === '';
  }
}
