let listaTarefas = [];
const form = document.querySelector("form");
const input =  document.querySelector('input');
const lista =  document.querySelector('ul');
form.addEventListener("submit", function () {
  event.preventDefault();

  const conteudo = input.value;
  fetch('http://localhost:5000/tasks',{
    method:'POST',
    body:{
        description: conteudo
    }
  });

  render();
  input.value = '';
  input.focus();

});

function criarElemento(elemento){
    const li = document.createElement('li');
    li.classList.add('mt-2')
    const span = document.createElement('span');
    span.classList.add("text-bold", "mr-2")
    span.textContent= elemento;
    const button = document.createElement('button');
    button.classList.add('bg-red-500','text-white', 'py-2','px-4','rounded');
    button.addEventListener('click', ()=>remover(elemento) )
    button.textContent = "Apagar";
    li.appendChild(span);
    li.appendChild(button);
    lista.appendChild(li);
}

function remover(elemento){
    listaTarefas = listaTarefas.filter((tarefa)=>{ return tarefa!=elemento});
    render();
}

function render(){
    lista.innerHTML= '';
    listaTarefas.map(tarefa =>{
        criarElemento(tarefa);
    })
}