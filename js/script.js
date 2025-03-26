function tampilkanform(jenis){
    document.getElementById("form-persegi").style.display = "none";
    document.getElementById("form-persegipanjang").style.display = "none";

    if(jenis == "persegi"){
        document.getElementById("form-persegi").style.display = "block";
    } else if(jenis == "persegipanjang"){
        document.getElementById("form-persegipanjang").style.display = "block";
    }
}

function hitungLuasPersegi(){
    let sisi = document.getElementById("sisi").value;
    if(sisi == "" || sisi <=0){
        alert("Masukkan nilai sisi yang benar");
        return;
    }
    let luas = sisi * sisi;
    document.getElementById("hasil-luas-persegi").innerText = "Luas Persegi: " + luas;
}

function hitungLuasPersegiPanjang(){
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    if (panjang == "" || panjang <=0 || lebar === "" || lebar <=0) {
        alert("Masukkan nilai panjang dan lebar yang benar");
        return;
    }
    let luas = panjang * lebar;
    document.getElementById("hasil-luas-persegi-panjang").innerText = "Luas Persegi Panjang: " + luas;
}

function resetForm(jenis) {
    if (jenis === "persegi") {
        document.getElementById("sisi").value = "";
        document.getElementById("hasil-luas-persegi").innerText = "";
    } else if (jenis === "persegipanjang") {
        document.getElementById("panjang").value = "";
        document.getElementById("lebar").value = "";
        document.getElementById("hasil-luas-persegi-panjang").innerText = "";
    }
}