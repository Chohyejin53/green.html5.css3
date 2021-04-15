// 지도
var map = new Map();
map.getKakaoMap();

var forecast = new Forecast();  /*Forcast.js파일에서 선언한 모든 것을 가져다 쓸수있음*/

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(function(){
    $(".temp").each(function(i) { //each는 for문이랑 같은거! function(i) 로 인덱스 하나씩 실행! 
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "°C");
    });
});