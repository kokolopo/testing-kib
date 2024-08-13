const express = require('express');
const app = express();

// Middleware untuk parsing body (optional, jika Anda ingin menerima data POST)
app.use(express.json());

// Route untuk set cookie
app.get('/set-cookie', (req, res) => {
  // Mengatur cookie
  res.cookie('myCookie', 'cookieValue', {
    domain: 'simasda.kotabogor.go.id',  // Sesuaikan dengan domain Anda
    path: '/',                 // Path di mana cookie berlaku
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari dalam milidetik
    httpOnly: true,            // Cookie hanya dapat diakses oleh server (opsional)
    secure: true,              // Cookie hanya dikirim melalui HTTPS (opsional)
    sameSite: 'Lax'            // Mencegah pengiriman cookie lintas situs (opsional)
  });

  // Mengirimkan respon
  res.send('Cookie has been set!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
