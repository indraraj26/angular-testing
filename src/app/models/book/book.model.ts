export interface IBook<T extends string, U extends number> {
  image: T;
  title: T;
  description: T;
  price: U;
  upvotes: U;
}

export class BookModel implements IBook<string, number> {
  constructor(
    public image: string,
    public title: string,
    public description: string,
    public price: number,
    public upvotes: number
  ) {}
}
