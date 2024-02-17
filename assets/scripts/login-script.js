/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Komentar : Membuat variabel untuk setiap element view

const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

// Komentar : Membuat variabel yang memuat informasi email dan password

const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  // TODO 1 : Mendapatkan input email dan password pengguna dari form.

  // Komentar: Mendapatkan nilai dari inputan

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  // TODO 2 : Buat Logika perbandingan dengan kondisi:
  // Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
  // Jika tidak, maka panggil fungsi showPopUp().

  // Komentar: Melakukan pengecekan email dan passord sesuai dengan nilai yang tersimpan

  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }

});
