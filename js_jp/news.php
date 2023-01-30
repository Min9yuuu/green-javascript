<?php
  // $ : php에서는 변수
  $ch=curl_init(); //curl 초기화, 세션생성
  //curl_setopt(세션,옵션,값) cURL 세션의 옵션 설정
  curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , false); //SSL인증서검사여부
  curl_setopt($ch , CURLOPT_RETURNTRANSFER , true); //결과값을 받을지 여부
  curl_setopt($ch , CURLOPT_HEADER , 0); //헤더정보출력여부 0,false
  curl_setopt($ch , CURLOPT_URL , 'https://www.chosun.com/arc/outboundfeeds/rss/category/sports/?outputType=xml'); //헤더정보출력여부 0,false

  //crul_exec: cURL 세션실행
  $url_source=curl_exec($ch);
  echo $url_source;
?>
