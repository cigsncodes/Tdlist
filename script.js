const button = document.querySelector('.addtask')
const input = document.querySelector('.task')
const listacpleta = document.querySelector(".listtask")

let minhalistadeitens = []

function addnewtask() {
    minhalistadeitens.push(input.value)
    
   
    mostrartarefas()
}

button.addEventlistener('click', addnewtask)