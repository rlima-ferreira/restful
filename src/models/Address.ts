import City from './City';
import Country from './Country';
import State from './State';

export default class Address {
  public readonly id? : number;
  public readonly postcode : string = '';
  public readonly publicPlace? : string;
  public readonly number : string = '';
  public readonly complement : string = '';
  public readonly city? : City;
  public readonly state? : State;
  public readonly country? : Country;
}