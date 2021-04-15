/*객체 선언*/
function Forecast() {
    this.url = "http://api.openweathermap.org/data/2.5/weather";
    this.url +="?units=" + "metric"; /*첫줄에만 ?, 그 이후엔 & */
    this.url +="&lang=" + "kr";                
    this.url +="&APPID=" + "1424895fa6cdf19bf3d69f7a75161a3b";
    this.url +="&q=";
}

// 현재날씨의 모든 정보 얻어오기

Forecast.prototype.getCurrentWeather = function(city) {
  
    var dataObj;
    var openWeatherAPI = this.url; //q가 계속 붙음으로 url 초기화를 위해 반드시 넣어준다
            
    $.ajax({
        type:"GET",
        url:openWeatherAPI += city,
        dataType:"json",
        async:false, // 동기형식으로 지정, (data 값을 return 해주기!)(ajax는 비동기형식이기 떄문에 return값에 undefined먼저 나오고 데이터 값이 나와서 이를 방지하기 위함!)
        success:function(data) {
            dataObj = data;
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj; //모든 정보 리턴해줌!    
};

// 내일 날씨 얻어오기

Forecast.prototype.getTomorrowWeather = function() {

};

//현재 날씨 온도 얻어오기

Forecast.prototype.getCurrentTemp = function(city) {
    var temp;
    var openWeatherAPI =this.url;

    $.ajax({
        type: "GET",
        url:openWeatherAPI += city,
        dataType: "json",
        async:false, // 동기형식으로 지정, (data 값을 return 해주기위해!)(ajax는 비동기형식이기 떄문에 return값에 undefined먼저 나오고 데이터 값이 나와서 이를 방지하기 위함!)
        success:function(data) {
            temp = Math.floor(data.main.temp); //소수점 버림
        },
        error:function(request,status,error) {
            console.log("code:" + request.status+"/n"+"message:"+request.responseText+"/n"+"error:");
        },
        complete:function(data,textStatus) {
            //작업 완료 후 처리
        }
    });

    return temp;
};