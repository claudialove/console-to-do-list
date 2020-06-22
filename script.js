
window.setTimeout(function () {

    //need a prompt to ask user what they would like to do
    //make it a function though so you can reuse it

        //need to declare a variable that is an array
        var myTasks = ["feed the cat", "love the cat", "groom the cat"];
        var userEntry = prompt("Commands for this program are: LIST, NEW, COMPLETE, QUIT ...what would you like to do?");
     
while (userEntry !== "quit") {

            //if user types list...
            if (userEntry === "list") {
                //console.log([todo-array])
                console.log(myTasks);
            }

            //if user types new...
            else if (userEntry === "new") {
                //prompt user to enter new todo
                var newTask = prompt("ADD TASK... ");
                //add new task to myTasks
                myTasks.push(newTask);
            }

            //if user types complete...
            else if (userEntry === "complete") {
                //let user type the task they want to delete
                var deleteTask = prompt("What task have you completed? I will remove it from the list!");
                //loop over the array to match it
               for (var i = 0; i < myTasks.length; i ++) {
                   if (i === deleteTask);
                   myTasks.splice(i, 1);
               }
            }

            //if user types quit...
            else if (userEntry === "quit") {
                //console.log ("goodbye") and end program
                console.log("goodbye");
            } else {
                alert("INVALID COMMAND!! Use LIST or NEW or COMPLETE  or QUIT");
            }
            var userEntry = prompt("Commands for this program are: LIST, NEW, COMPLETE, QUIT ...what would you like to do?");
}
console.log("goodbye")

}, 5000);