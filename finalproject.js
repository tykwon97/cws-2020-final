 function accident($year,$itemcode){
    window.location.href = 'http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year='+$year+'&pageNo=1&numOfRows=276&itemCode='+$itemcode+'&ServiceKey=fjjwLpZB0DV6qD4lOjL6XLvRfuXcMF7O1b7T3Aa1%2Fg34%2Ff9hv69BVupEWgd7o3d34cROmYQvMd0lwUuoFXIs8Q%3D%3D&_returnType=json';
  }
  function measuringstation_list1($name1,$name2){
    window.location.href = 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getMsrstnList?serviceKey=fjjwLpZB0DV6qD4lOjL6XLvRfuXcMF7O1b7T3Aa1%2Fg34%2Ff9hv69BVupEWgd7o3d34cROmYQvMd0lwUuoFXIs8Q%3D%3D&numOfRows=276&pageNo=1&addr='+$name1+'&stationName='+$name2;
  }

  function measuringstation_list2($name){
    window.location.href = 'http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt?serviceKey=fjjwLpZB0DV6qD4lOjL6XLvRfuXcMF7O1b7T3Aa1%2Fg34%2Ff9hv69BVupEWgd7o3d34cROmYQvMd0lwUuoFXIs8Q%3D%3D&numOfRows=10&pageNo=1&umdName='+$name;
  }

  function corona($date){
    window.location.href = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=fjjwLpZB0DV6qD4lOjL6XLvRfuXcMF7O1b7T3Aa1%2Fg34%2Ff9hv69BVupEWgd7o3d34cROmYQvMd0lwUuoFXIs8Q%3D%3D&pageNo=1&numOfRows=10&startCreateDt='+$date+'&endCreateDt='+$date;
  }

  function corona_total($date){
    window.location.href = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=fjjwLpZB0DV6qD4lOjL6XLvRfuXcMF7O1b7T3Aa1%2Fg34%2Ff9hv69BVupEWgd7o3d34cROmYQvMd0lwUuoFXIs8Q%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20190101&endCreateDt='+$date;
  }

  