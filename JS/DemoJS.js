/*var nhapSoTrungThuong = prompt("Mời nhập số để kiểm tra xem có trung thưởng hay không?");
console.log(nhapSoTrungThuong);
nhapSoTrungThuong = parseInt(nhapSoTrungThuong);
var soTrungThuong = Math.random()*100;
soTrungThuong = parseInt(soTrungThuong);
console.log("Số trúng thưởng là: " +soTrungThuong);
alert("Số trúng thướng là: "+soTrungThuong);
if(nhapSoTrungThuong == soTrungThuong){
    alert("Bạn đã trúng giải thưởng! Xin chúc mừng! Bạn nhận được 1 triệu $")
    console.log("Bạn đã trúng giải thưởng! Xin chúc mừng! Bạn nhận được 1 triệu $");
} else {
    alert("Rất tiếc! Chúc bạn may mắn lần sau!")
    console.log("Rất tiếc! Chúc bạn may mắn lần sau!");
}*/

var count = 0;
var flag = 0;
function Loto(){
    var n = 6;
    var arr[n];
    var stt1 = Math.random()*46;
    var stt2 = Math.random()*46;
    var stt3 = Math.random()*46;
    var stt4 = Math.random()*46;
    var stt5 = Math.random()*46;
    var stt6 = Math.random()*46;

    do{
        for(var i = 0; i < arr.length; i++){
            prompt("Mơi nhập số thứ " +i);
            console.log("Số thứ "+i " bạn nhập là: " +arr[i]);
            if(arr[i] < 0 || isNaN(arr)){
                count = 0;
                break;
            }else {
                if(arr[i] == stt1 ){
                    flag++;
                } else if(arr[i] == stt2){
                    flag++;
                } else if(arr[i] == stt3){
                    flag++;
                }else if(arr[i] == stt4){
                    flag++;
                }else if(arr[i] == stt5){
                    flag++;
                }else if(arr[i] == stt6){
                    flag++;
                }else{
                    cont
                }
            }
        }
    }while (count < 5);
}