function validasiTransaksiList(list){
    if(!Array.isArray(list)){
        throw new Error("List harus berupa Array");
    }

    if(list.length === 0){
        throw new Error("")
    }
}