const { siswaList } = require("../lib/data/siswa");
const { rataRataDenganReduce, ringkasanNilai } = require("../lib/utils/siswa");

console.log("Rata rata = ", rataRataDenganReduce(siswaList));
console.log("Ringkasan Nilai = ", ringkasanNilai(siswaList));
