
window.setTimeout(function () {

    //need a prompt to ask user what they would like to do
    //make it a function though so you can reuse it
    function start() {
        var userEntry = prompt("Commands for this program are: LIST, NEW, QUIT ...what would you like to do?");
     
            //need to declare a variable that is an array
            var myTasks = ["feed the cat", "love the cat", "groom the cat"];

            //if user types list...
            if (userEntry === "list") {
                //console.log([todo-array])
                console.log(myTasks);
                start();
            }

            //if user types new...
            else if (userEntry === "new") {
                //prompt user to enter new todo
                var newTask = prompt("ADD TASK... ");
                console.log(myTasks.push(newTask));
                console.log(myTasks);
                start();
            }

            //if user types quit...
            else if (userEntry === "quit") {
                //console.log ("goodbye") and end program
                console.log("goodbye");
            } else {
                alert("INVALID COMMAND!! Use LIST or NEW  or QUIT");
                start();
            }
    }
    start();
}, 10000);