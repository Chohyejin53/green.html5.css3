var date = ["21-03-22","21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
var forecast = new Object();

// 날씨 데이터 재배열화

var days = [day1, day2, day3, day4] // 데이터안에 데이터를 넣음 

for(var i = 0; i < 4; i++) {
    var arr = days[i];

    for(var j = o; j < 4; j++) {
        switch(j) {
            case 0 : arr[j] = date[i];
            break;
            case 1 : arr[j] = temp[i];
            break;
            case 2 : arr[j] = rain[i];
            break;
            case 3 : arr[j] = dust[i];
            break;
        }
    }
    days[i] = arr;

}

console.log(days);





forecast.tempShow = function(){
    var str = "";
    for(var i = 0; i < temp.length; i++) {
        str += temp[i] + " °C ";
    }

    document.getElementById("show_temp").innerHTML = str;
    console.log(str);
};


forecast.tempAvgShow = function(){
    var num = 0;
    for(var i = 0; i < temp.length; i++) {
        num += temp[i];
    }

    var avg = num / temp.length;
    document.getElementById("show_temp_avg").innerHTML = avg + " °C ";
    
};

forecast.rainShow = function(){
    var str = "";
    for(var i = 0; i < rain.length; i++) {
        str += rain[i] + " mm ";
    }

    document.getElementById("show_rain").innerHTML = str;
    console.log(str);
};    

forecast.rainAvgShow = function(){
    var num = 0;
    for(var i = 0; i < rain.length; i++) {
        num += rain[i];
    }

    var avg = num / rain.length;
    document.getElementById("show_rain_avg").innerHTML = avg + " mm ";
    
};

forecast.dustShow = function(){
    var str = "";
    for(var i = 0; i < dust.length; i++) {
        str += dust[i] + " ㎍/m³ ";
    }

    document.getElementById("show_dust").innerHTML = str;
    console.log(str);
};

forecast.dustAvgShow = function(){
    var num = 0;
    for(var i = 0; i < dust.length; i++) {
        num += dust[i];
    }

    var avg = num / dust.length;
    document.getElementById("show_dust_avg").innerHTML = avg + " ㎍/m³ ";
};

forecast.tempShow();
forecast.rainShow();
forecast.dustShow();
forecast.tempAvgShow();
forecast.rainAvgShow();
forecast.dustAvgShow();