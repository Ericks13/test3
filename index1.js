$(document).ready(function() {
  $("#add-new-todo-button").click(function(){
   // Assign the to do description and pomodoro estimate to variables
   var todoBlock = $(this).closest("#new-todo-block")
   var description = todoBlock.find("#new-todo-description")
   var pomodoroEstimate = todoBlock.find("#new-pomodoro-estimate")
   console.log("test")

   // Append the new todo to the list of todos
  $("ul").append("<li> <input type='checkbox'/> " + description.val() + " <span class='pomodoro-estimate'>" + pomodoroEstimate.val() + " pomodoros</span> </li>")

   // Clear the input fields for new-todo-description and pomdoro-estimate by entering an empty string as the value
   description.val("")
   pomodoroEstimate.val("")
 })
})

$(document).ready(function() {
  // Strike through todo when its checkbox is clicked
  $("input[type=checkbox]").click( function(){
    $(this).closest("li").toggleClass(" completed-todo")
  })
})