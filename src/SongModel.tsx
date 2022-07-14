export interface Song{
  id?:string
  title:string;
  artist:string;
  length:number;
  price:number;
  genre:string;
}

export const genres:string[] = ["CLASSICAL","RAP","POP","ROCK"];