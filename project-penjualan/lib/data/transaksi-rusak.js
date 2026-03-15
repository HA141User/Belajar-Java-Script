const bukanArray = "bukan array";

const arrayKosong = [];

const adaItemBukanObject = [
  { id: "T001", namaProduk: "Kopi", qty: 2, harga: 15000 },
  null,
];

const idKosong = [
  { id: "", namaProduk: "Kopi", qty: 2, harga: 15000 },
];

const namaProdukSpasi = [
  { id: "T010", namaProduk: "   ", qty: 1, harga: 5000 },
];

const qtyBukanNumber = [
  { id: "T011", namaProduk: "Teh", qty: "2", harga: 8000 },
];

const qtyNol = [
  { id: "T012", namaProduk: "Roti", qty: 0, harga: 12000 },
];

const hargaNegatif = [
  { id: "T013", namaProduk: "Kopi", qty: 1, harga: -1000 },
];

module.exports = {
  bukanArray,
  arrayKosong,
  adaItemBukanObject,
  idKosong,
  namaProdukSpasi,
  qtyBukanNumber,
  qtyNol,
  hargaNegatif,
};