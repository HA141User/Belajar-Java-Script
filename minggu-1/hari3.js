function ambilSemuaNilai(siswaList) {
  const semuaNilai = siswaList.map((s) => s.nilai);
  return semuaNilai;
}

const siswaList = [
  { nama: "Arif", nilai: 80 },
  { nama: "Budi", nilai: 85 },
  { nama: "Cici", nilai: 95 },
  { nama: "Dudung", nilai: 79 },
];

function filterNilaiMinimal(siswaList, minNilai) {
  const lulus = siswaList.filter((s) => s.nilai >= minNilai);
  return lulus;
}

function rataRataDenganReduce(siswaList) {
  const total = siswaList.reduce((acc, s) => acc + s.nilai, 0);
  const rataRata = total / siswaList.length;
  return rataRata;
}

console.log(`Semua nilai siswa : ${ambilSemuaNilai(siswaList)}`);
const minimalNilai = filterNilaiMinimal(siswaList, 80);
const hasilLulus = minimalNilai
  .map((s) => `${s.nama} dengan nilai ${s.nilai}`)
  .join("\n");

console.log(`Yang lolos nilai 80 ke atas adalah : \n${hasilLulus}`);
console.log(`Rata rata nilai siswa adalah ${rataRataDenganReduce(siswaList)}`);
