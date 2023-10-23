function ribuan(angka, pembagi){
    var hasil= angka*pembagi;
    return Math.floor(hasil/1000)*1000;
}

function hitung(){
    var input = document.getElementById("pemasukan").value;
    var four = ribuan(input, 40/100);
    var three = ribuan(input, 30 / 100);
    var two = ribuan(input, 20/100);
    var one = ribuan(input, 10 / 100);;
    var sisa = input - (four+three+two+one);
    document.getElementById("fourthy").innerHTML = four
    document.getElementById("threety").innerHTML = three
    document.getElementById("twenty").innerHTML = two
    document.getElementById("ten").innerHTML = one
    document.getElementById("sisa").innerHTML = sisa
}