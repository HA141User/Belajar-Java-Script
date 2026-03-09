const {siswaList} = require("./data/siswa");
const {rataRataDenganReduce, ringkasanNilai} = require("./utils/siswa");

console.log("Rata rata = ",rataRataDenganReduce(siswaList));
console.log("Ringkasan Nilai = ", ringkasanNilai(siswaList));