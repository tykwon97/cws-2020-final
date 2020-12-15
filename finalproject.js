key = 'fjjwLpZB0DV6qD4lOjL6XLvRfuXcMF7O1b7T3Aa1%2Fg34%2Ff9hv69BVupEWgd7o3d34cROmYQvMd0lwUuoFXIs8Q%3D%3D';


function accident($year, $itemcode) {
  window.location.href = 'http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=' + $year + '&pageNo=1&numOfRows=3&ServiceKey=' + key + '&_itemCode=' + $itemcode;
}

function measuringstation_list1($name1, $name2) {
  window.location.href = 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?serviceKey=' + key + '&numOfRows=276&pageNo=1&addr=' + $name1 + '&stationName=' + $name2;
}

function measuringstation_list2($name) {
  window.location.href = 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt?serviceKey=' + key + '&numOfRows=10&pageNo=1&umdName=' + $name;
}

function corona($date) {
  window.location.href = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=' + key + '&pageNo=1&numOfRows=10&startCreateDt=' + $date + '&endCreateDt=' + $date;
}

function corona_total($date) {
  window.location.href = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=' + key + '&pageNo=1&numOfRows=10&startCreateDt=20190101&endCreateDt=' + $date;
}

function test() {

  var myXML = ""
  var request = new XMLHttpRequest();
  request.open("GET", 'http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=2018&pageNo=1&numOfRows=3&ServiceKey=' + key + '&_itemCode=PM10', true);
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200 || request.status == 0) {
        myXML = request.responseXML;
      }
    }
  }
  request.send();

}

