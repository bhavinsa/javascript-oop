class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  addYear(year) {
    this.year = year;
  }

  getSummary() {
    console.log(
      "Book name is " +
        this.name +
        ", author name is " +
        this.author +
        ", year is " +
        this.year
    );
    return `
      "Book name is" +
        ${this.name} +
        ", author name is " +
        ${this.author} +
        ", year is " +
        ${this.year}
    `;
  }
}

const book1 = new Book("The Great Alone", "Kristin Hannah");
book1.addYear("2018");

//Inheritance

class Magazine extends Book {
  constructor(name, author) {
    super(name, author);
  }
}

const magazine1 = new Magazine("Game Informer", "sam");
magazine1.addYear("2018");
magazine1.getSummary();
