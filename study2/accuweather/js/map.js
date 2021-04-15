/* 객체 선언 (선언해서 함수 충돌방지하기!!)*/
function Map() {
} 

// 카카오맵 로드 (가져오는 부분)

Map.prototype.getKakaoMap = function() {
    var container = document.getElementById('map');
	var options = {
		center: new kakao.maps.LatLng(37.45240609232767, 126.69969111326523),
        // 구글지도를 통해서 위경도 얻을 수 있음 
		level: 3
		};

		var map = new kakao.maps.Map(container, options);
};