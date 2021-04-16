var url = location.href; // url 전체 가져오기 
console.log(url);

//쿼리 스트링 파라메터 가져오기  
var urlObj = new URL(url);
var parms = urlObj.searchParams;
var q = parms.get("q");

console.log(q);

// 선택한 지역 전체 데이터 가져오기 
var forecast = new Forecast();
var locationWether = forecast.getCurrentWeather(q);
console.log(locationWether);