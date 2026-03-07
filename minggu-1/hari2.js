const siswaList = [
  { nama: "Arif", nilai: 80 },
  { nama: "Budi", nilai: 85 },
  { nama: "Cici", nilai: 95 },
  { nama: "Dudung", nilai: 79 },
];

// let nilaiSiswaTertinggi = 0;
// let nilaiSiswaTerendah = 0;

function cariNilaiTertinggi(siswaList) {
  let indexList = 0;
  let nilaiSiswaTertinggi = 0;

  for (let i = 0; i < siswaList.length; i++) {
    if (nilaiSiswaTertinggi < siswaList[i].nilai) {
      nilaiSiswaTertinggi = siswaList[i].nilai;
      indexList = i;
    }

    }
    return siswaList[indexList];
}

function cariNilaiTerendah(siswaList) {
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

console.log(cariNilaiTertinggi(siswaList));
console.log(cariNilaiTerendah(siswaList));

// function cariNilaiTerendah(siswaList){
//     for ( const x of siswaList.nilai ){
//         nilaiSiswaTerendah = siswaList.nilai[0];
//         if(nilaiSiswaTerendah > x){
//             nilaiSiswaTerendah = x;
//         }
//     }
// }

// console.log()
