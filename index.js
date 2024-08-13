const express = require("express");
const app = express();

// Middleware untuk parsing body (optional, jika Anda ingin menerima data POST)
app.use(express.json());

// Route untuk set cookie
app.get("/set-cookie", (req, res) => {
  // Mengatur cookie
  // res.cookie(
  //   "WhatEver",
  //   "94a4372e1d7ecb71f0134fa24ce3b71a222563ecc96e4dc01c5a4a398f653c172b282bb0",
  //   {
  //     //domain: "simasda.kotabogor.go.id", // Sesuaikan dengan domain Anda
  //     path: "/", // Path di mana cookie berlaku
  //     sameSite: "Lax", // Mencegah pengiriman cookie lintas situs (opsional)
  //   }
  // );
  res.cookie(
    "auth_tkt",
    "d19f65c871f6954bd96201343f67746d313624d22356d3a13bc7f00446f29337383939c85d050c6ef7e6c354e9895915b019a069bd13e13f2581f0c7e2a33dbf66bbada3197!userid_type:int",
    {
      //domain: "simasda.kotabogor.go.id", // Sesuaikan dengan domain Anda
      path: "/", // Path di mana cookie berlaku
      sameSite: "Lax", // Mencegah pengiriman cookie lintas situs (opsional)
    }
  );

  // Mengirimkan respon
  res.send("Cookie has been set!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
