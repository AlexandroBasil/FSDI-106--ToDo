
function createToDo() {

    let todoText = $("#txtTodo").val();
    console.log(todoText);

    let syntax =
    `<div class="todo-item">
        <label class="todoLabel">${todoText}</label>
        <div class="btn-items">
            <button class="btn btn-sm btn-primary">Complete <i class="far fa-check-square"></i></button>
            <button class="btn btn-sm btn-danger">Delete <i class="fas fa-eraser"></i></button>
        </div>
    </div>`;

    $("#pendingList").append(syntax);

    // CLEAR THE TEXT
    $("#txtTodo").val('').focus();

}


function init() {
    console.log("ToDo App")

    // HOOK EVENTS
    $("#btnSave").click(createToDo);
    $("#txtTodo").keypress(function(args) {
        if (args.keyCode === 13) {
            createToDo();
        }
    });
}

window.onload = init;