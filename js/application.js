$.ui.ready(function() {
  $("#question-1-answer").bind("click", function(){
    alert($("#radio_1_1").prop("checked") + " " + $("#radio_1_2").prop("checked") + " " + $("#radio_1_3").prop("checked"));
  });

  $("#question-1-clear").bind("click", function(){
    $("#radio_1_1").prop("checked", false);
    $("#radio_1_2").prop("checked", false);
    $("#radio_1_3").prop("checked", false);
  });

  $("#question-2-answer").bind("click", function(){
    alert($("#checkbox_2_1").prop("checked") + " " + $("#checkbox_2_2").prop("checked") + " " + $("#checkbox_2_3").prop("checked"));
  });

  $("#question-2-clear").bind("click", function(){
    $("#checkbox_2_1").prop("checked", false);
    $("#checkbox_2_2").prop("checked", false);
    $("#checkbox_2_3").prop("checked", false);
  });
});
