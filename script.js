const button = document.querySelector('.addtask')
const input = document.querySelector('.task')
const listacpleta = document.querySelector(".listtask")

let minhalistadeitens = []

function addnewtask() {
    minhalistadeitens.push(input.value)
    
    mostrartarefas()
}

function mostrartarefas(){

    let novaLi = novaLi + ''

    minhalistadeitens.forEach(tarefa => {

        novaLi =    `            <li>
        <img src="" alt="">
        <p>${tarefa}</p>
        <img src="" alt="">
    </li> `
        
    })

    
}

listacpleta.innerHTML = novaLi


button.addEventListener("click", addnewtask)