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


// todo c : test data rusak
runTest("Testing validasi menggunakan data Rusak", ()=>{
    validasiSiswaList(siswaFakeList);
})
runTest("Testing validasi menggunakan data Rusak", ()=>{
    validasiSiswaList(siswaKosong);
})
runTest("Testing validasi menggunakan data Rusak", ()=>{
    validasiSiswaList(siswaNameNone);
})
runTest("Testing validasi menggunakan data Rusak", ()=>{
    validasiSiswaList(siswaSpaceName);
})
runTest("Testing validasi menggunakan data Rusak", ()=>{
    validasiSiswaList(siswaNotNumber);
})

