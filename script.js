const button = document.querySelector(".addtask")
const button = document.querySelector(".task")
let minhalistadeitens = []
function addnewtask() {
    minhalistadeitens.push(input.value);
    
    mostrartarefas()
}

function mostrartarefas(){

    let novaLi = ''

    minhalistadeitens.forEach(tarefa => {

        novaLi = ´            <li>
        <img src="" alt="">
        <p>fazer compras</p>
        <img src="" alt="">
    </li> ´
        
    });

    <li>
    <img src="" alt="">
    <p>fazer compras</p>
    <img src="" alt="">
</li>
}
button.addEventListener("click", addnewtask)