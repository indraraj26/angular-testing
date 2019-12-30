import { BookModel, IBook } from "./book.model";
import * as faker from "faker";

describe("BookModel", () => {
  let image: string;
  let title: string;
  let description: string;
  let price: number;
  let upvotes: number;

  let book: BookModel;

  beforeEach(() => {
    image = faker.image.image();
    title = faker.lorem.words();
    description = faker.lorem.sentence();
    price = faker.commerce.price();
    upvotes = faker.random.number();
    this.book = new BookModel(image, title, description, price, upvotes);

    let storage = {};
    spyOn(window.localStorage, "getItem").and.callFake(
      (key: string): string => {
        return storage[key] || null;
      }
    );

    spyOn(window.localStorage, "removeItem").and.callFake(
      (key: string): void => {
        delete storage[key];
      }
    );

    spyOn(window.localStorage, "setItem").and.callFake(
      (key: string, value: string): string => {
        return (storage[key] = <string>value);
      }
    );

    spyOn(window.localStorage, "clear").and.callFake(() => {
      return (storage = {});
    });

    afterEach(() => {
      localStorage.clear();
    });
  });

  it("have a valid model", () => {
    let book = new BookModel(image, title, description, price, upvotes);
    expect(book.title).toEqual(title);
    expect(book.image).toEqual(image);
    expect(book.description).toEqual(description);
    expect(book.price).toEqual(price);
    expect(book.upvotes).toEqual(upvotes);
  });
});
