// This variable is global so that it can be accessed
// by all the functions. In this example we do not have
// to deal with concurrency issues.
var questions = new Array(2);

/**
 * This function is invoked when the application UI is started,
 * to set up events handler on UI elements.
 */
$.ui.ready(function() {
  /*
   * Here we save the status of the first answer (correct or not).
   * This event is fired when the "OK" button on the panel, the
   * one with id "question-1-answer", is clicked.
   */
  $("#question-1-answer").bind("click", function(){
    questions[0] = $("#radio_1_1").prop("checked") && 
       !$("#radio_1_2").prop("checked") &&
       !$("#radio_1_3").prop("checked");
  });

  /* Here we save the status of the second answer (correct or not).
   * This event is fired when the "OK" button on the panel, the
   * one with id "question-2-answer", is clicked.
   */
  $("#question-2-answer").bind("click", function(){
    questions[1] = !$("#checkbox_2_1").prop("checked") &&
        $("#checkbox_2_2").prop("checked") &&
        $("#checkbox_2_3").prop("checked");
  });

  /* Here we compute the results iterating the questions array.
   * This event is fired when the Results panel, the one with id
   * "results", is loaded.
   */
  $("#results").bind("loadpanel", function(){
    var total = 0;
    var correct = 0;
    var index;
    for (index = 0; index < questions.length; ++index) {
      total++;
      if(questions[index])
        correct++;
    }
    $("#answer-count").html(correct+"/"+total);
    $("#answer-percentage").html(correct/total*100+"%");
  });
});
