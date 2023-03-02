
const form =  document.querySelector('#form');
const lista = document.querySelector('#todo');
const input =  form.querySelector("input");
let listaTarefas = [];
form.addEventListener('submit', function (){
    event.preventDefault();
    // const formData = new FormData(form);
    // const descricaoTarefa = formData.get('tarefa');
    // listaTarefas.push(descricaoTarefa);

    listaTarefas.push(input.value);
    
    render(listaTarefas);
    
    input.value = ''
    input.focus();
    
});

function render(array){
    lista.innerHTML = '';
    array.map((tarefa)=>{
        adiciona(tarefa)
    });
}


function adiciona(element){
    const li = document.createElement('li');
    li.classList.add('mt-2')
    const button = document.createElement('button');
    button.textContent = 'Apagar';
    button.classList.add('bg-red-500', 'text-white', 'font-bold', 'py-2','px-4', 'rounded');
    button.addEventListener('click', ()=>remove(element))
    const span = document.createElement('span');
    span.classList.add('mr-4', 'font-bold');
    span.textContent = element;
    li.appendChild(span);
    li.appendChild(button);
    lista.appendChild(li);
}


function remove(element){
    listaTarefas = listaTarefas.filter((tarefa) => tarefa!==element);
    render(listaTarefas);
}