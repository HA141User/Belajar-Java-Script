const siswaList = [
  { nama: "Arif", nilai: 80 },
  { nama: "Budi", nilai: 85 },
  { nama: "Cici", nilai: 95 },
  { nama: "Dudung", nilai: 79 },
];

// let nilaiSiswaTertinggi = 0;
// let nilaiSiswaTerendah = 0;

function cariNilaiTertinggi(siswaList) {
  if(!Array.isArray(siswaList)){
    throw new Error("Harus berupa array");
  }

  if(siswaList.length === 0){
    throw new Error("Array tidak boleh kosong");
  }

  let indexList = 0;
  let nilaiSiswaTertinggi = siswaList[0].nilai;

  for (let i = 0; i < siswaList.length; i++) {
    if (nilaiSiswaTertinggi < siswaList[i].nilai) {
      nilaiSiswaTertinggi = siswaList[i].nilai;
      indexList = i;
    }

    }
    return siswaList[indexList];
}

function cariNilaiTerendah(siswaList) {

    if(!Array.isArray(siswaList)){
    throw new Error("Harus berupa array");
  }

  if(siswaList.length === 0){
    throw new Error("Array tidak boleh kosong");
  }

  let indexList = 0;
  let nilaiSiswaTerendah = siswaList[0].nilai;

  for (let i = 0; i < siswaList.length; i++) {
    if (nilaiSiswaTerendah > siswaList[i].nilai) {
      nilaiSiswaTerendah = siswaList[i].nilai;
      indexList = i;
    }

    }
    return siswaList[indexList];
}

function rataRataNilai(siswaList){
    if(!Array.isArray(siswaList)){
    throw new Error("Harus berupa array");
  }

  if(siswaList.length === 0){
    throw new Error("Array tidak boleh kosong");
  }

  const jumlahNilai = siswaList.length;
  let totalNilai = 0;

  for(let i = 0; i < siswaList.length; i++){
    totalNilai += siswaList[i].nilai;
  }

  return totalNilai / jumlahNilai;
}

console.log(cariNilaiTertinggi(siswaList));
console.log(cariNilaiTerendah(siswaList));
console.log(rataRataNilai(siswaList));

// function cariNilaiTerendah(siswaList){
//     for ( const x of siswaList.nilai ){
//         nilaiSiswaTerendah = siswaList.nilai[0];
//         if(nilaiSiswaTerendah > x){
//             nilaiSiswaTerendah = x;
//         }
//     }
// }

// console.log()
