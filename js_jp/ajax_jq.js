$(function(){
  $.ajax({
    url:'./MOCK_DATA.json', // 파일위치
    dataType:'json', // 파일형식
    success:function(data){
      if(data.length>0){//데이터가 있을경우
        var tb = $("<table />");
        for( var i in data){
          // 변수에  $ : jquery 변수임을 표현하기 위하여 사용 
          // 변수에 _ : javascript 변수임을 표현하기 위해 사용
          var $id = data[i].id;
          var $first_name = data[i].first_name;
          var $last_name = data[i].last_name;
          var $email = data[i].email;
          var $gender = data[i].gender;
          var $ip_address = data[i].ip_address;

          var row = $('<tr/>').append(
            $('<td/>').text($id),
            $('<td/>').text($first_name),
            $('<td/>').text($last_name),
            $('<td/>').text($email),
            $('<td/>').text($gender),
            $('<td/>').text($ip_address)
          );
          tb.append(row);
        }
        $('.wrap').append(tb);
      }
    },
  });
});