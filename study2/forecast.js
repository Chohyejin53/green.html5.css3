var date = ["21-03-22","21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];

var day1 = [];
var day2 = [];
var day3 = [];
var day4 = [];

// for(var i = 0; i < date.length; i++) {
//     console.log(date[i]);
//     console.log(temp[i]);
//     console.log(rain[i]);
//     console.log(dust[i]);
// }

var forecast = new Object();
forecast.tempShow = function(){
    for(var i = 0; i < temp.length; i++) {
        
    }
};

forecast.tempAvgShow = function(){
    var num = 0;
    for(var i = 0; i < temp.length; i++) {
        num += temp[i];
    }

    var avg = num / temp.length;
    return avg;
};

forecast.rainShow = function(){
    for(var i = 0; i < rain.length; i++) {
        
    }
};

forecast.rainAvgShow = function(){
    var num = 0;
    for(var i = 0; i < rain.length; i++) {
        num += rain[i];
    }

    var avg = num / temp.length;
    return avg;
};

forecast.dustShow = function(){
    for(var i = 0; i < dust.length; i++) {
        
    }
};

forecast.dustAvgShow = function(){
    var num = 0;
    for(var i = 0; i < dust.length; i++) {
        num += temp[i];
    }

    var avg = num / dust.length;
    return avg;
};