declare function setGreet(arg0: string): void;

export function greet(name: string) : void{
  setGreet("Hello " + name)
}