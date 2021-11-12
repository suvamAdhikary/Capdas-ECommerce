const express = require("express");

const cors = require('cors');

const googlePassport = require("./configs/google.passport");

const fbPassport = require("./configs/facebook.passport");

const app = express();

const { body } = require("express-validator");

app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(express.json());
app.options('*', cors());
app.use(googlePassport.initialize());
app.use(fbPassport.initialize());

googlePassport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});

googlePassport.deserializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});

const { register, login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const brandController = require("./controllers/brand.controller");
const categoryController = require("./controllers/category.controller");
const subCategoryController = require("./controllers/subCategory.controller");
const cartController = require("./controllers/cart.controller");


app.use("/users", userController);
app.use("/products", productController);
app.use("/brands", brandController);
app.use("/categories", categoryController);
app.use("/sub_categories", subCategoryController );
app.use("/carts", cartController);



app.post(
  "/register",
  body("name").trim().isLength({ min: 3 }).withMessage("Full name is required"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email is required and should be a valid email address"),
  body("password")
    .trim()
    .isStrongPassword()
    .withMessage("Password is required and should be a strong password"),
  register
);

app.post(
  "/login",
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email is required and should be a valid email address"),
  body("password")
    .trim()
    .isStrongPassword()
    .withMessage("Password is required and should be a strong password"),
  login
);

// Google

const scope = [
  "https://www.googleapis.com/auth/plus.login",
  "https://www.googleapis.com/auth/userinfo.email",
];
app.get(
  "/auth/google",
  googlePassport.authenticate("google", { scope: scope })
);

app.get(
  "/auth/google/callback",
  googlePassport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  function (req, res) {
    const { user, token } = req.user;
    return res.status(200).json({ user, token });
  }
);

// Facebook

app.get(
  "/auth/facebook",
  fbPassport.authenticate(
    "facebook",
    {
      data: [
        {
          permission: "public_profile",
          status: "granted",
        },
        {
          permission: "email",
          status: "granted",
        },
        {
          permission: "user_friends",
          status: "declined",
        },
      ],
    },
    { scope: "public_profile,email" }
  )
);

app.get(
  "/auth/facebook/callback",
  fbPassport.authenticate("facebook", {
    failureRedirect: "/auth/facebook/failure",
  }),
  function (req, res) {
    const { user, token } = req.user;
    return res.status(200).json({ user, token });
  }
);

module.exports = app;
