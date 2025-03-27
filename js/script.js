// Fungsi untuk menampilkan form yang dipilih
function tampilkanform(jenis) {
    document.getElementById("form-persegi").style.display = (jenis === "persegi") ? "block" : "none";
    document.getElementById("form-persegipanjang").style.display = (jenis === "persegipanjang") ? "block" : "none";
}

function pilihPerhitungan(jenis, pilihan) {
    if (jenis === "persegi") {
        document.getElementById("luas-persegi").style.display = (pilihan === "luas") ? "block" : "none";
        document.getElementById("keliling-persegi").style.display = (pilihan === "keliling") ? "block" : "none";
    } else if (jenis === "persegipanjang") {
        document.getElementById("luas-persegipanjang").style.display = (pilihan === "luas") ? "block" : "none";
        document.getElementById("keliling-persegipanjang").style.display = (pilihan === "keliling") ? "block" : "none";
    }
}

// Fungsi hitung luas persegi
function hitungluaspersegi() {
    let sisi = document.getElementById("sisi").value;
    if (sisi) {
        let luas = sisi * sisi;
        let output = `L = S x S\nL = ${sisi} x ${sisi}\nL = ${luas}`;
        document.getElementById("hasil-luas-persegi").innerText = output;
    } else {
        alert("Masukkan nilai sisi!");
    }
}

// Fungsi hitung keliling persegi
function hitungkelilingpersegi() {
    let sisi = document.getElementById("sisi").value;
    if (sisi) {
        let keliling = 4 * sisi;
        let output = `K = 4 x S\nK = 4 x ${sisi}\nK = ${keliling}`;
        document.getElementById("hasil-keliling-persegi").innerText = output;
    } else {
        alert("Masukkan nilai sisi!");
    }
}

// Fungsi hitung luas persegi panjang
function hitungLuasPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    if (panjang && lebar) {
        let luas = panjang * lebar;
        let output = `L = P x L\nL = ${panjang} x ${lebar}\nL = ${luas}`;
        document.getElementById("hasil-luas-persegi-panjang").innerText = output;
    } else {
        alert("Masukkan nilai panjang dan lebar!");
    }
}

// Fungsi hitung keliling persegi panjang
function hitungKelilingPersegiPanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    if (panjang && lebar) {
        let keliling = 2 * (parseInt(panjang) + parseInt(lebar));
        let output = `K = 2 x (P + L)\nK = 2 x (${panjang} + ${lebar})\nK = ${keliling}`;
        document.getElementById("hasil-keliling-persegipanjang").innerText = output;
    } else {
        alert("Masukkan nilai panjang dan lebar!");
    }
}

// Fungsi reset form
function resetForm(jenis) {
    if (jenis === "persegi") {
        document.getElementById("sisi").value = "";
        document.getElementById("hasil-luas-persegi").innerText = "";
        document.getElementById("hasil-keliling-persegi").innerText = "";
        document.getElementById("luas-persegi").style.display = "none";
        document.getElementById("keliling-persegi").style.display = "none";
    } else if (jenis === "persegipanjang") {
        document.getElementById("panjang").value = "";
        document.getElementById("lebar").value = "";
        document.getElementById("hasil-luas-persegi-panjang").innerText = "";
        document.getElementById("hasil-keliling-persegipanjang").innerText = "";
        document.getElementById("luas-persegipanjang").style.display = "none";
        document.getElementById("keliling-persegipanjang").style.display = "none";
    }
}
