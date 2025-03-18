
const generateRandomTsCode = () => {
  const num = Math.floor(Math.random() * 10);
  switch (num) {
    case 0:
      return `
  class Dog {
    constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;
    }
  
    bark() {
      console.log("Ruff ruff!");
    }
  }
  `;
    case 1:
      return `
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log("Vroom!");
    }
  }
  `;
    case 2:
      return `
  class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    readPage(pageNumber) {
      console.log("Reading page " + pageNumber);
    }
  }
  `;
    case 3:
      return `
  class Tree {
    constructor(type, age, height) {
      this.type = type;
      this.age = age;
      this.height = height;
    }
  
    grow() {
      console.log("Growing taller...");
    }
  }
  `;
    case 4:
      return `
  class House {
    constructor(type, location, numRooms) {
      this.type = type;
      this.location = location;
      this.numRooms = numRooms;
    }
  
    paint() {
      console.log("Painting the house...");
    }
  }
  `;
    case 5:
      return `
  class AnimalShelter {
    constructor(animals) {
      this.animals = animals;
    }
  
    enqueue(animal) {
      this.animals.push(animal);
    }
  
    dequeue() {
      return this.animals.shift();
    }
  }
  `;
    case 6:
      return `
  class MovieTheater {
    constructor(name, numTheaters) {
      this.name = name;
      this.numTheaters = numTheaters;
    }
  
    showMovie(movieTitle) {
      console.log("Showing " + movieTitle);
    }
  }
  `;
    case 7:
      return `
  class UserAccount {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    login() {
      console.log("Logging in...");
    }
  }
  `;
    case 8:
      return `
  class PaymentGateway {
    constructor(cardNumber, cvv, expirationDate) {
      this.cardNumber = cardNumber;
      this.cvv = cvv;
      this.expirationDate = expirationDate;
    }
  
    processPayment() {
      console.log("Processing payment...");
    }
  }
  `;
    case 9:
      return `
  class VendingMachine {
    constructor(items) {
      this.items = items;
    }
  
    dispenseItem(itemName) {
      console.log("Dispensing " + itemName);
    }
  }
  `;
    case 10:
      return `
  class Library {
    constructor(books) {
      this.books = books;
    }
  
    checkOutBook(bookTitle) {
      console.log("Checking out " + bookTitle);
    }
  }
  `;
    default:
      return `
  class Student {
    constructor(name, age, gradeLevel) {
      this.name = name;
      this.age = age;
      this.gradeLevel = gradeLevel;
    }
  
    learn() {
      console.log("Learning...");
    }
  }
  `;
  }
};

export default generateRandomTsCode;