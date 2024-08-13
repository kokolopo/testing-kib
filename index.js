const express = require("express");
const app = express();

// Middleware untuk parsing body (optional, jika Anda ingin menerima data POST)
app.use(express.json());

// Route untuk set cookie
app.get("/set-cookie", (req, res) => {
  // Mengatur cookie
  res.cookie(
    "WhatEver",
    "90b861435aa7944225649fc98859833407abc857c5d131ffefdd48199bd116d46c3cd066",
    {
      domain: "simasda.kotabogor.go.id", // Sesuaikan dengan domain Anda
      path: "/", // Path di mana cookie berlaku
      sameSite: "Lax", // Mencegah pengiriman cookie lintas situs (opsional)
    }
  );
  res.cookie(
    "auth_tkt",
    "d0ba1a94113b756d42397750cee766840345154db2905dcb7ff43affd9ad000319a9accea787b094b14f1d653368bb62d7d4079e57dd4a9fb17f3b03c513ef7366bba189197!userid_type:int",
    {
      domain: "simasda.kotabogor.go.id", // Sesuaikan dengan domain Anda
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
