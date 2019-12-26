import { BookModel } from "./../../models/book/book.model";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookComponent } from "./book.component";
import * as faker from "faker";

describe("BookComponent", () => {
  let fixture: ComponentFixture<BookComponent>;
  let component: BookComponent;
  let nativeElement: HTMLElement;
  let book: BookModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.debugElement.componentInstance;
    book = new BookModel(
      faker.image.image(),
      faker.lorem.words().join(""),
      faker.lorem.sentence(),
      faker.commerce.price(),
      faker.random.number()
    );
    component.book = book;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have title as my book", () => {
    expect(component.bookTitle).toEqual("My book");
  });

  it(`should render title in p tag `, () => {
    expect(nativeElement.querySelector("p").textContent).toContain(
      component.bookTitle
    );
  });

  it(`should show image`, () => {
    const image = nativeElement
      .querySelector(".book-image")
      .getAttribute("src");
    expect(image).toEqual(book.image);
  });

  it(`should show the book description`, () => {
    const description = nativeElement.querySelector(".book-desc").textContent;
    expect(description).toEqual(book.description);
  });

  it(`should show the book title`, () => {
    const title = nativeElement.querySelector(".book-title").textContent;
    expect(title).toEqual(book.title);
  });

  it(`should show the book price`, () => {
    const price = nativeElement.querySelector(".book-price").textContent;
    expect(price).toEqual(`${book.price}`);
  });

  it(`should show the book upvotest`, () => {
    const upvotes = nativeElement.querySelector(".book-upvotes").textContent;
    expect(upvotes).toEqual(`${book.upvotes}`);
  });

  // it(`should have author as 'indraraj'`, () => {
  //   expect(component.Author).toEqual("indraraj");
  // });

  // it(`should render author in div tag`, () => {
  //   const compiled = fixture.debugElement.nativeElement as HTMLElement;
  //   expect(compiled.querySelector("div").textContent).toContain(
  //     component.Author
  //   );
  // });
});
