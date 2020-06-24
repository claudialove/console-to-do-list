
window.setTimeout(function () {

    //need a prompt to ask user what they would like to do
    //make it a function though so you can reuse it

    //need to declare a variable that is an array
    var myTasks = [];

    var userEntry = prompt("Commands for this program are: LIST, NEW, COMPLETE, QUIT ...what would you like to do?");
  
    while (userEntry !== "quit") {

        //if user types list...
        if (userEntry === "list") {
            listTasks();
        }
        //if user types new...
        else if (userEntry === "new") {
            addTasks();
        }
        //if user types complete...
        else if (userEntry === "complete") {
            completeTasks();
        }
        userEntry= prompt("Commands for this program are: LIST, NEW, COMPLETE, QUIT ...what would you like to do?");
    }
    console.log("ok, you quit the program!")

    function listTasks() {
        console.log("**********");
        myTasks.forEach(function (myTasks, i) {
            console.log(i + ": " + myTasks);
            console.log("**********");
        });
    }
    function addTasks() {
        //prompt user to enter new todo
        var newTask = prompt("ADD TASK... ");
        //add new task to myTasks
        myTasks.push(newTask);
    };
    function completeTasks() {
        //let user type the task they want to delete
        var deleteTask = prompt("Tell me the number for the task you have finished! I will remove it from the list!");
        myTasks.splice(deleteTask, 1);
        console.log("selected item deleted!");
    };


}, 5000);