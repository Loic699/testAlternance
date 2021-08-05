export class User {
    private username: string;
    private age: number;


    constructor(username: string, age: number) {
      this.username = username;
      this.age = age;
    }
  
    public getUsername(): string {
      return this.username;
    }
  
    public setUsername(username: string): void {
      this.username = username;
    }
    public getAge(): number {
        return this.age;
      }
    public setAge(age): number{
          this.age=age;
          return this.age
      }
  
    
  }