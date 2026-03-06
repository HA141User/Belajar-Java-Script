"use strict";

// 1) hitungLuasPersegiPanjang(panjang, lebar)
function hitungLuasPersegiPanjang(panjang, lebar) {
  // TODO: validasi: harus number dan >= 0
  
  if(typeof panjang == "number" && typeof lebar =="number" && panjang >= 0 && lebar >=0){
    return panjang*lebar
  }else{
    throw new Error("Panjang dan lebar harus berupa angka dan tidak negatif")
    
  }
  // TODO: return panjang * lebar
}

// 2) isGenap(n)
function isGenap(n) {
  // TODO: validasi: harus number dan integer
  // TODO: return true jika n genap
}

// 3) rataRata(arr)
function rataRata(arr) {
  // TODO: validasi: arr harus array dan tidak kosong
  // TODO: validasi: semua elemen harus number
  // TODO: hitung jumlah lalu bagi panjang
}

const nilai = [80, 70, 90, 60];

// TODO: cetak rata-rata
// TODO: cetak nilai terbesar
// TODO: cetak nilai terkecil

console.log("Selesai.");