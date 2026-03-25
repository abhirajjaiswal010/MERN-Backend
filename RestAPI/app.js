const express = require("express"); // import express framework
const app = express(); // create express app

//* Middleware
app.use(express.json()); // parse incoming JSON data → available in req.body

//* Fake database (array of books)
let books = [
  {
    id: "1", // unique id (string)
    title: "book1", // book title
  },
  {
    id: "2",
    title: "book2",
  },
  {
    id: "3",
    title: "book3",
  },
];

//* Home route
app.get("/", (req, res) => {
  res.json({
    message: "welcome to our bookstore api", // send welcome message
  });
});

// Get all books
app.get("/get", (req, res) => {
  res.json(books); // return full books array
});

//* Get single book by ID
app.get("/get/:id", (req, res) => {
  // find book where id matches URL param (/get/1 → id = 1)
  const book = books.find((item) => item.id === req.params.id);

  if (book) {
    res.status(200).json(book); // if found → send book
  } else {
    res.status(404).json({
      message: "book not found", // if not found → error
    });
  }
});

//* Add new book
app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1, // generate new id (number ⚠️)
    title: `Book${books.length + 1}`, // auto-generate title
  };

  books.push(newBook); // add new book to array

  res.status(200).json({
    data: newBook, // return added book
    message: "your book is added now",
  });
});

//* Update a book
app.put("/update/:id", (req, res) => {
  // find book by id
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === req.params.id,
  );

  if (findCurrentBook) {
    // update title (if provided, else keep old title)
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: "Book Updated",
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

//* Delete a book
app.delete("/delete/:id", (req, res) => {
  // find index of book in array
  const findIndex = books.findIndex((i) => i.id === req.params.id);

  if (findIndex !== -1) {
    // remove book using splice
    const deletebook = books.splice(findIndex, 1);

    res.status(200).json({
      message: "book is deleted",
    });
  } else {
    res.status(404).json({
      msg: "book is not found",
    });
  }
});

// Port number
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`server at ${PORT}`); // server running log
});
