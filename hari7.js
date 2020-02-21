// SOAL 1
var perang;

// SOAL 2
console.log(typeof "2020-01-01")
console.log(typeof 1994)
console.log(typeof "Asrul Dev")

// SOAL 3
var nama = "Reza Maulana Alfitra"

// SOAL 4
var usia = 18

// SOAL 5
console.log("Namaku " + nama + ", Usiaku " + usia + " Tahun")

// SOAL 6
console.log(Math.floor(Math.random() * (7 - 1) + 1))

// SOAL 7
var some = "Aku mencintai Javascript"
console.log(some.length)

// SOAL 8
// Function Konfersi Angka ke Bulan
function bulan(number){
    switch(number){
        case 1:
            var bulan = "Januari"
            break;
        case 2:
            var bulan = "Februari"
            break;
        case 3:
            var bulan = "Maret"
            break;
        case 4:
            var bulan = "April"
            break;
        case 5:
            var bulan = "Mei"
            break;
        case 6:
            var bulan = "Juni"
            break;
        case 7:
            var bulan = "Juli"
            break;
        case 8:
            var bulan = "Agustus"
            break;
        case 9:
            var bulan = "September"
            break;
        case 10:
            var bulan = "Oktober"
            break;
        case 11:
            var bulan = "November"
            break;
        case 12:
            var bulan = "Desember"
            break;
    }
    return bulan;
}
console.log(bulan(6))

// SOAL 9
let sukur = ["Aku", "bersyukur", "atas", "semua", "rezki", "ini", "termasuk", "kamu"]
console.log(sukur.join(" "))

// SOAL 10
let a = 10
let b = 8
a = a + b
console.log(a)
b = a - b
console.log(b)
a = a - b
console.log(a)

// SOAL 11
for(let i = 1; i <= 6; i++){
    var mimim = ''
    for(let j = 1; j<=i; j++){
        mimim = '#' + mimim
    }
    console.log(mimim)
}

// SOAL 12
for(let i = 0; i <= 10; i++){
    var operasi = i * i
    console.log(i + " x " + i + " = " + operasi)
}