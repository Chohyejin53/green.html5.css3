// 지도
var map = new Map();
map.getKakaoMap();

// 날씨
var forecast = new Forecast();  /*Forcast.js파일에서 선언한 모든 것을 가져다 쓸수있음*/

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];


/* 중요!! 원래는 한번씩 호출하는것보다 한꺼번에 정보를 불러오는게 좋다.
   백엔드 서버 접속은 최대한 자주 안할수록 좋음.
   https://openweathermap.org/current 사이트에 여러지역을 한꺼번에 불러오는 방법도 있으므로 참고. 
   우선 한지역만 불러오는 방식을 이용해 아래와 같이 코딩 */
$(function(){
    $(".temp").each(function(i) { //each는 for문이랑 같은거! function(i) 로 인덱스 하나씩 실행! 
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "°C");
    });
});

// 화면이동
$(function() {
    $(".temp").each(function(i) {
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "°C");
    });
    $(".location").on({
        "click" : function() {
            var q = $(this).children(".q").attr("id"); /*클릭한 이벤트가 일어난 곳 : this / 지역은 span 태그의 자손태그! */
            var redirectURL = "pages/weather_location.html?q=" + q; /*js파일은 index 파일에서 실행하기 때문에 index기준으로 경로 작성해야함!*/
            location.href = redirectURL;
        }
    });
});