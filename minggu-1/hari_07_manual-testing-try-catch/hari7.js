const {siswaList} = require("../lib/data/siswa");
const {rataRataDenganReduce, ringkasanNilai, validasiSiswaList} = require("../lib/utils/siswa");
const { siswaFakeList, siswaKosong, siswaNameNone, siswaSpaceName, siswaNotNumber } = require("../lib/data/siswafakedata");

function runTest(namaTest, fn){
    try{
        fn();
        console.log(`${namaTest} : OK`);
    }catch(err){
        console.log(`${namaTest} : ERROR -> ${err.message}`);
    }
}

runTest("validasi siswa list", ()=> validasiSiswaList(siswaList));
// runTest("validasi siswa list", validasiSiswaList(siswaList));

runTest("Tes invalid No array", ()=>{
    ringkasanNilai(siswaFakeList);
})
runTest("Tes invalid No array", ()=>{
    rataRataDenganReduce(siswaFakeList);
})


// todo c : test data rusak
runTest("Testing validasi menggunakan data Bukan Array", ()=>{
    validasiSiswaList(siswaFakeList);
})
runTest("Testing validasi menggunakan data siswa kosong", ()=>{
    validasiSiswaList(siswaKosong);
})
runTest("Testing validasi menggunakan data nama siswa kosong", ()=>{
    validasiSiswaList(siswaNameNone);
})
runTest("Testing validasi menggunakan data nama siswa berupa spasi", ()=>{
    validasiSiswaList(siswaSpaceName);
})
runTest("Testing validasi menggunakan data nilai siswa bukan angka", ()=>{
    validasiSiswaList(siswaNotNumber);
})

