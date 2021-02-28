import Address from './Address';

export default class Person {
  public readonly id?: number;
  public readonly name: string = '';
  public readonly cpf: string = '';
  public readonly birthday: string = '';
  public readonly address?: Address;
}