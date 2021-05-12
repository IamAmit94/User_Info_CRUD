const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const addressRoutes = require("../E_CRUD/modules/address/route")
const bankInfoRoutes =  require("../E_CRUD/modules/bankInfo/route")
const documentsRoutes = require("../E_CRUD/modules/documents/route")
const phoneRoutes = require("../E_CRUD/modules/phone/route")
const userInfoRoutes = require("../E_CRUD/modules/userInfo/routes")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(addressRoutes);
app.use(bankInfoRoutes);
app.use(documentsRoutes);
app.use(phoneRoutes);
app.use(userInfoRoutes);

app.listen(5000, () => {
  console.log("The Port running is 5000 ");
});
