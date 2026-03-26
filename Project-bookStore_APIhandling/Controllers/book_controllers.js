import Book from "../Models/bookModel.js";

//& get all books
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        msg: "list of book fetch successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: true,
        msg: "no books found in collection",
      });
    }
  } catch (e) {
    console.error("error from get all books ", e);
  }
};

//& get single books
export const getSingleBooks = async (req, res) => {
  try {
    const getCurIdBook = req.params.id;
    const bookDetailsById = await Book.findById(getCurIdBook);

    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        msg: "book not fetched , id is not matched",
      });
    } else {
      res.status(202).json({
        success: true,
        msg: "book fetched",
        data: bookDetailsById,
      });
    }
  } catch (e) {
    console.error("error from get single book", e);
  }
};

//& add new books
export const addNewBooks = async (req, res) => {
  try {
    const newBookformData = req.body;
    const newlyCreateBook = await Book.create(newBookformData);
    if (newBookformData) {
      res.status(202).json({
        success: true,
        msg: "book added successfully",
        data: newlyCreateBook,
      });
    }
  } catch (e) {
    console.error("error to add new book", e);
  }
};

//& update the books
export const updateTheBooks = async (req, res) => {
  try {
    const getbook = req.body;
    const getBookbyID = req.params.id;
    const UpdatedBook = await Book.findByIdAndUpdate(getBookbyID, getbook, {
      new: true,
    });
    if (!UpdatedBook) {
      res.status(404).json({
        success: false,
        msg: "failed to update the book",
      });
    }

    res.status(202).json({
      success: true,
      msg: "book is updated",
      data: UpdatedBook,
    });
  } catch (e) {
    console.error("error from update the books", e);
  }
};

//& delete the books
export const deleteTheBooks = async (req, res) => {
  try {
    const getCurrentIdBook = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentIdBook);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        msg: "failed to delete the book",
      });
    }

    res.status(202).json({
      success: true,
      msg: "book is deleted",
    });
  } catch (e) {
    console.error("error from update the books", e);
  }
};
