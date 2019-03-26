export class ClassStudent {
  // id: number;
  // name: string;
  // city: string;
  // photoURL?: string;
  // birthDate?: string;
  constructor(
    public id: number,
    public name: string,
    public city: string,
    public photoURL?: string,
    public birthDate?: string) {

  }
  getAge(): number {
    return 18;
  }
}
