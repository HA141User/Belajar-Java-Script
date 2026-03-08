const siswaList = [
    { nama: "Arif", nilai: 80 },
    { nama: "Budi", nilai: 85 },
    { nama: "Cici", nilai: 95 },
    { nama: "Dudung", nilai: 79 },
    { nama: "Eka", nilai: 70 }
];

function ringkasanNilai(siswaList){
    if(!Array.isArray){
        throw new Error("Harus berupa list");
    }

    if(siswaList.length === 0){
        throw new Error("Array tidak boleh kosong");
    }

    const total = siswaList.reduce((acc, s) => acc + s.nilai, 0);
    const rataRataNilai = total / siswaList.length;


    //Todo: Bagian mencari nilai tertinggi
    let nilaiTertinggi = siswaList[0].nilai;
    let indexlistNilaiTertinggi = 0;
    for(let i = 0; i < siswaList.length; i++){
        if(nilaiTertinggi < siswaList[i].nilai){
            nilaiTertinggi = siswaList[i].nilai;
            indexlistNilaiTertinggi = i;
        }
    }

    const nilaiSIswaTertinggi = siswaList[indexlistNilaiTertinggi];

    // Todo : Bagian nilai terendah
    let nilaiTerendah = siswaList[0].nilai;
    let indexlistNilaiTerendah = 0;
    for(let i = 0; i < siswaList.length; i++){
        if(nilaiTerendah > siswaList[i].nilai){
            nilaiTerendah = siswaList[i].nilai;
            indexlistNilaiTerendah = i;
        }
    }

    const nilaiSiswaTerendah = siswaList[indexlistNilaiTerendah];


    const ringkasan = {
        rataRata : rataRataNilai,
        tertinggi : { nama : nilaiSIswaTertinggi.nama, nilai : nilaiSIswaTertinggi.nilai},
        terendah : { nama : nilaiSiswaTerendah.nama, nilai : nilaiSiswaTerendah.nilai},
        jumlahSiswa : siswaList.length


    }
    return ringkasan;
}

console.log(ringkasanNilai(siswaList))

