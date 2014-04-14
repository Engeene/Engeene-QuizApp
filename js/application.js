/**
 * This function is invoked when the application UI is started,
 * to set up events handler on UI elements.
 */
$.ui.ready(function() {
  // Here the status of the first panel is read and shown to the
  // user via a JavaSritp alert via simple true/false labels.
  $("#question-1-answer").bind("click", function(){
    alert($("#radio_1_1").prop("checked") + " " + $("#radio_1_2").prop("checked") + " " + $("#radio_1_3").prop("checked"));
  });

  // Here the status of the second panel is read and shown to the
  // user via a JavaSritp alert via simple true/false labels.
  $("#question-2-answer").bind("click", function(){
    alert($("#checkbox_2_1").prop("checked") + " " + $("#checkbox_2_2").prop("checked") + " " + $("#checkbox_2_3").prop("checked"));
  });
});
