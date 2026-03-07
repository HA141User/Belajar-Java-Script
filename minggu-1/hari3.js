function ambilSemuaNilai(siswaList){
    const semuaNilai = siswaList.map(s => s.nilai);
    return semuaNilai;
}

// const siswaList = [
//   { nama: "Arif", nilai: 80 },
//   { nama: "Budi", nilai: 85 },
//   { nama: "Cici", nilai: 95 },
//   { nama: "Dudung", nilai: 79 },
// ];


console.log(ambilSemuaNilai(siswaList));