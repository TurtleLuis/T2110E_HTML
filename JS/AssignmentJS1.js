var Loto = [5][6];
for( var i = 0;i < 5; i++){
    for (var j = 1; j <= 6; j++){
        Loto[i][j] = Math.random()*100;
    }
}

var count = 0;
var flag = 0;
var count_number = 1;
var count_number_true = 0;
for (;count <= 4;){
    do{
        count_number_true = 0;
        var soNhap = prompt("Mời nhập số");
        soNhap = parseInt(soNhap);
        console.log("Số nhập thứ " +count);
        console.log(soNhap);
        if(isNaN(soNhap) || soNhap < 0){
            flag = 0;
            count_number = 0;
            continue;
        } else {
            for( var i = 0;i < Loto.length; i++){
                for (var j = 1; j <= Loto[i].length; j++){
                    Loto[i][j] = Math.random()*100;
                    if(soNhap == Loto[i][j]){
                        console.log("Có số trúng thưởng : " + Loto[i][j]);
                        count_number_true += 1;
                    }
                }
            }
            count_number += 1;
        }
    }while (flag = 0 || count_number <= 6);
    count += 1;
    console.log("Sáu số đầu bạn chọn trong lần thứ " +count);
    console.log("Bạn trúng "+count_number_true);
}
