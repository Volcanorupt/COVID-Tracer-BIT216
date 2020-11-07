export class Usermodule {
  public Id: number;
  public name: string;
  public password: string;
  public username: string;

  constructor(Id: number, name: string, password: string, username: string) {
    this.Id = Id;
    this.name = name;
    this.password = password;
    this.username = username;
  }
}
