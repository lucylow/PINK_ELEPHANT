$(function(){
  
   function cal(){
    var money = $("#money").val();
    money = Number(money);
    
      $(".blackM").html((money*0.751).toFixed(2));
      $(".hispanicM").html((money*0.672).toFixed(2));
      $(".blackW").html((money*0.64).toFixed(2));
      $(".hispanicW").html((money*0.54).toFixed(2));
      $(".whiteW").html((money*0.78).toFixed(2)); 
  }
  
  
  $("#money").change(function(){
    cal();
  })
  $("#money").keyup(function(){
    cal();
  })
})

