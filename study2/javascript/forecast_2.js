var date = ["21-03-22","21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
var days = [day1, day2, day3, day4];
var forecast = new Object();


for(var i = 0; i < 4; i++) {
    var arr = days[i]; // 임시변수 arr 지정
    
    for(var j = 0; j < 4; j++){
        switch(j){
            case 0: arr[j] = date[i]; // 혹은 days[i][j] = date[i]; 
            break;
            case 1: arr[j] = temp[i];
            break;
            case 2: arr[j] = rain[i];
            break;
            case 3: arr[j] = dust[i];
            break;
        }
    }

    days[i] = arr;
        
}

console.log(days);

forecast.show = function(arr){
    var str = "";
    for(var i = 0; i < arr.length; i++) {
        str += arr[i] + forecast.unit(arr);
    }

    return str;
};


forecast.avgShow = function(arr){
    var num = 0;
    for(var i = 0; i < arr.length; i++) {
        num += arr[i];
    }

    var avg = num / arr.length;
    
    return avg.toFixed(1) + forecast.unit(arr);
    
};

forecast.unit = function(arr){
    switch (arr) {
        case temp: return "°C ";
            break;
        case rain: return "mm ";
            break;
        case dust: return "㎍/m³ ";
            break;
    }
} 

forecast.innerHTML = function(arr) {
    var str = "";
    switch(arr) {
        case temp: str = "temp";    // 불러올 형식은 str!! 문자형!!주의하기!
            break;
        case rain: str ="rain";
            break;
        case dust: str = "dust";
            break;  
    } 
    var showId = "show_" + str;     // 다시 선언해주기!
    var showAvgId = "show_" + str + "_avg"

    document.getElementById(showId).innerHTML = forecast.show(arr);   // 선언해준걸로 보여질 형식 완성하기
    document.getElementById(showAvgId).innerHTML = forecast.avgShow(arr);
}


// 함수호출 반드시 할것!!
forecast.innerHTML(temp);
forecast.innerHTML(rain);
forecast.innerHTML(dust);
    





// forecast.innerHTML = function(arr) {
//     document.getElementById("show_" + forecast.showInnerHTML(arr)).innerHTML = forecast.show(forecast.showInnerHTML(arr));
//     document.getElementById("show_" + forecast.showInnerHTML(arr) + "_avg").innerHTML = forecast.avgShow(forecast.showInnerHTML(arr));
    
// }



// document.getElementById("show_temp").innerHTML = forecast.show(temp);
// document.getElementById("show_rain").innerHTML = forecast.show(rain);
// document.getElementById("show_dust").innerHTML = forecast.show(dust);

// document.getElementById("show_temp_avg").innerHTML = forecast.avgShow(temp);
// document.getElementById("show_rain_avg").innerHTML = forecast.avgShow(rain);
// document.getElementById("show_dust_avg").innerHTML = forecast.avgShow(dust);

