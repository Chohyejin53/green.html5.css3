/*객체 선언*/
function Forecast() {
}

// 현재날씨 얻어오기

Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var url = "http://api.openweathermap.org/data/2.5/weather";
    url +="?q=" + "city";
    url +="&units=" + "metric";
    url +="&lang=" + "kr";                
    url +="&APPID=" + "1424895fa6cdf19bf3d69f7a75161a3b";

    console.log("url:" + url);
            
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        async:false, // 동기형식으로 지정, (data 값을 return 해주기!)(ajax는 비동기형식이기 떄문에 return값에 undefined먼저 나오고 데이터 값이 나와서 이를 방지하기 위함!)
        success:function(data) {
            console.log("현재온도:" + data.main.temp);
            dataObj = data;
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj;
};

// 내일 날씨 얻어오기

Forecast.prototype.getTomorrowWeather = function() {

};