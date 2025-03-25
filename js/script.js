function hitungluas() {
    let sisi= document.getElementById('sisi').value;
    let luas=sisi*sisi;
    document.getElementById('hasil').innerText = "Lias Persegi: " + luas;
}

function resetInput() {
    document.getElementById('sisi').value = "";
    document.getElementById('hasil').innerText = "";
}