"use strict";

// Minggu 1 - Hari 1
// Fokus: function, kondisi (if), array, loop, basic error handling

// 1) hitungLuasPersegiPanjang(panjang, lebar)
function hitungLuasPersegiPanjang(panjang, lebar) {
  // TODO:
  // - validasi: panjang dan lebar harus number

  if(typeof panjang !== "number" || typeof lebar !=="number"){
    throw new Error ("Panjang atau lebar haruslah angka");
    }

  if(panjang < 0 || lebar < 0){
    throw new Error ("Panjang dan lebar tidak boleh negatif");
    }

  return panjang * lebar;


  // - validasi: panjang dan lebar harus >= 0
  // - return panjang * lebar
}

// 2) isGenap(n)
function isGenap(n) {
  // TODO:
  // - validasi: n harus number

  if(typeof n !== "number"){
    throw new Error('n harus berupa angka');
    }

  return n % 2 === 0;
  // - return true jika genap, false jika ganjil
}

// 3) rataRata(arr)
function rataRata(arr) {
  // TODO:
  // - validasi: arr harus array
    if(Array.isArray(arr)){
        if(arr.length === 0){
            throw new Error('array tidak boleh kosong');
        }

        let total = 0;

        for(const x of arr){
            if(typeof x !== "number" ){
                throw new Error("isi array harus berupa angka");
            }

            total = total + x;
        }

        return total / arr.length;
    }else{
        throw new Error('Bukan berupa array');
    }

  // - validasi: arr tidak boleh kosong
  // - validasi: semua elemen harus number
  // - hitung total, lalu return total / arr.length
}

const nilai = [80, 70, 90, 60];

// TODO: print rata-rata dari nilai (pakai function rataRata)
console.log(rataRata(nilai));

let angkaTerbesar = nilai[0];
let angkaTerkecil = nilai[0];
for(const i of nilai){
    if ( i > angkaTerbesar){
        angkaTerbesar = i;
    }

    if ( i < angkaTerkecil ){
        angkaTerkecil = i;
    }
}

console.log(`nilai terbesar adalah ${angkaTerbesar} dan nilai terkecil adalah ${angkaTerkecil}`);


// TODO: cari dan print nilai terbesar (pakai loop)
// TODO: cari dan print nilai terkecil (pakai loop)

// --- TEST MANUAL (boleh kamu tambah/ubah) ---
// console.log("Luas 5x2:", hitungLuasPersegiPanjang(5, 2));
// console.log("4 genap?:", isGenap(4));
// console.log("5 genap?:", isGenap(5));
console.log(rataRata([1,2,3]))

console.log("Selesai.");