const Book = require("../models/book");

// module.exports = (req, res) => {
//   const { aadhar, secret_code } = req.body;
//   // find one is to be done on book
//   Book.findOne({ aadhar }, (error, book) => {
//     console.log(book.secret_code);
//     console.log(secret_code);
//     if (book) {
//       if (book.secret_code == secret_code) {
//         // req.session.userID = user._id;
//         console.log("User logged in:", aadhar);
//         // res.redirect("/user/profile");

//         // object to be passed is book
//         res.render("user_profile", { Book });
//       }
//     } else {
//       res.redirect("/login");
//     }
//   });
// };

module.exports = async (req, res) => {
  const { aadhar, secret_code } = req.body;
  const book = await Book.findOne({ aadhar });

  if (book) {
    if (book.secret_code == secret_code) {
      console.log("user logged in");
      res.render("user_profile", { book });
    }
  } else {
    res.redirect("/login");
  }
};
