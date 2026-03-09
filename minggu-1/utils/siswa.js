function rataRataDenganReduce(siswaList) {
  // TODO validasi + reduce

  if (!Array.isArray(siswaList)) {
    throw new Error("Harus berupa Array");
  }

  if (siswaList.length === 0) {
    throw new Error("Array tidak boleh kosong");
  }

  const total = siswaList.reduce((acc, s) => acc + s.nilai, 0);
  const rataRata = total / siswaList.length;
  return rataRata;
}

function ringkasanNilai(siswaList) {
  // TODO validasi + return object ringkasan
  if (!Array.isArray(siswaList)) {
    throw new Error("Harus berupa Array");
  }

  if (siswaList.length === 0) {
    throw new Error("Array tidak boleh kosong");
  }

  let nilaiTertinggi = siswaList[0].nilai;
  let indexlistNilaiTertinggi = 0;
  for (let i = 0; i < siswaList.length; i++) {
    if (nilaiTertinggi < siswaList[i].nilai) {
      nilaiTertinggi = siswaList[i].nilai;
      indexlistNilaiTertinggi = i;
    }
  }

  const nilaiSIswaTertinggi = siswaList[indexlistNilaiTertinggi];

  // Todo : Bagian nilai terendah
  let nilaiTerendah = siswaList[0].nilai;
  let indexlistNilaiTerendah = 0;
  for (let i = 0; i < siswaList.length; i++) {
    if (nilaiTerendah > siswaList[i].nilai) {
      nilaiTerendah = siswaList[i].nilai;
      indexlistNilaiTerendah = i;
    }
  }

  const nilaiSiswaTerendah = siswaList[indexlistNilaiTerendah];

  const ringkasan = {
    rataRata: rataRataDenganReduce(siswaList),
    tertinggi: {
      nama: nilaiSIswaTertinggi.nama,
      nilai: nilaiSIswaTertinggi.nilai,
    },
    terendah: {
      nama: nilaiSiswaTerendah.nama,
      nilai: nilaiSiswaTerendah.nilai,
    },
    jumlahSiswa: siswaList.length,
  };
  return ringkasan;
}

module.exports = { rataRataDenganReduce, ringkasanNilai };
