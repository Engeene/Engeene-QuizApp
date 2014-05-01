// This variable is global so that it can be accessed
// by all the functions. In this example we do not have
// to deal with concurrency issues.
var questions = new Array(7);

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
    questions[0] = $("#radio_1_0").prop("checked");
  });

  /* Here we save the status of the second answer (correct or not).
   * This event is fired when the "OK" button on the panel, the
   * one with id "question-2-answer", is clicked.
   */
  $("#question-2-answer").bind("click", function(){
    questions[1] = $("#radio_2_2").prop("checked");
  });

  /*
   * And on... and on... and on...
   */
  $("#question-3-answer").bind("click", function(){
    questions[2] = $("#radio_3_0").prop("checked");
  });
    
  $("#question-4-answer").bind("click", function(){
    questions[3] = $("#radio_4_1").prop("checked");
  });

  $("#question-5-answer").bind("click", function(){
    questions[4] = $("#radio_5_2").prop("checked");
  });

  $("#question-6-answer").bind("click", function(){
    questions[5] = $("#radio_6_0").prop("checked");
  });

  $("#question-7-answer").bind("click", function(){
    questions[6] = $("#radio_7_2").prop("checked");
  });

  /* Here we compute the results iterating the questions array.
   * This event is fired when the Results panel, the one with id
   * "results", is loaded.
   */
  $("#results").bind("loadpanel", function(){
    var total = 0;
    var correct = 0;
    var index;
    for (index = 0; index < questions.length; index++) {
      total++;
      if(questions[index])
        correct++;
    }
    var ratio = correct / total;
    var percentage = Math.round(ratio*10000)/100;
    $("#answer-count").html(correct+"/"+total);
    $("#answer-percentage").html(percentage+"%");
  });
});
