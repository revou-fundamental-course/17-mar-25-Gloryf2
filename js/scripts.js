function luas() {
    var val = document.getElementById("input").value
    if (String(Number(val)) == "NaN") {
        document.getElementById("output").innerHTML="bukan nomor"
    }
    else {
        document.getElementById("output").innerHTML = "hasil : " + String(Number(val)*Number(val))
    }
}
function keliling() {
    var val = document.getElementById("input").value
    if (String(Number(val)) == "NaN") {
        document.getElementById("output").innerHTML="bukan nomor"
    }
    else {
        document.getElementById("output").innerHTML = "hasil : " + String(Number(val)*4)
    }
}