function validasiSiswaList(siswaList){
  if(!Array.isArray(siswaList)){throw new Error("Harus berupa Array")}
  if(siswaList.length === 0){throw new Error("Array tidak boleh kosong")}

  for(const s of siswaList){
    if( typeof s !== "object" || s === null) throw new Error ("Setiap siswa haruslah object");
    if(typeof s.nama !== "string") throw new Error ("nama siswa harus berupa string");
    if(typeof s.nilai !== "number") throw new Error ("nilai harus berupa angka");
  }
}





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
  validasiSiswaList(siswaList);

  // let nilaiTertinggi = siswaList[0].nilai;
  // let indexlistNilaiTertinggi = 0;
  // for (let i = 0; i < siswaList.length; i++) {
  //   if (nilaiTertinggi < siswaList[i].nilai) {
  //     nilaiTertinggi = siswaList[i].nilai;
  //     indexlistNilaiTertinggi = i;
  //   }
  // }


  // const nilaiSIswaTertinggi = siswaList[indexlistNilaiTertinggi];

    const nilaiSiswaTertinggi = siswaList.reduce((acc, s)=>{
      return acc.nilai < s.nilai ? s : acc;
    }, siswaList[0])

  // Todo : Bagian nilai terendah
  // let nilaiTerendah = siswaList[0].nilai;
  // let indexlistNilaiTerendah = 0;
  // for (let i = 0; i < siswaList.length; i++) {
  //   if (nilaiTerendah > siswaList[i].nilai) {
  //     nilaiTerendah = siswaList[i].nilai;
  //     indexlistNilaiTerendah = i;
  //   }
  // }

  // const nilaiSiswaTerendah = siswaList[indexlistNilaiTerendah];

  const nilaiSiswaTerendah = siswaList.reduce((acc, s) =>{
    return acc.nilai < s.nilai ? acc : s;
  },siswaList[0])

  const ringkasan = {
    rataRata: rataRataDenganReduce(siswaList),
    tertinggi: {
      nama: nilaiSiswaTertinggi.nama,
      nilai: nilaiSiswaTertinggi.nilai,
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
