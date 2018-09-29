function Book(name, author) {
  this.name = name;
  this.author = author;

  this.getSummary = function() {
    console.log(
      "Book name is " +
        this.name +
        ", author name is " +
        this.author +
        ", year is " +
        this.year
    );
  };
}

//Prototype (simple way)
Book.prototype.addYear = function(year) {
  this.year = year;
};

var book1 = new Book("The Great Alone", "Kristin Hannah");
book1.addYear("2018");
book1.getSummary();

//inheritance
function Magazine(name, author) {
  Book.call(this, name, author);
}

// Add all parent method using prototype
Magazine.prototype = Object.create(Book.prototype);
var magazine1 = new Magazine("Game Informer", "sam");
magazine1.getSummary();

//Get list of method and property
console.log(book1);
console.log(magazine1);
