// const form = document.querySelector('form');
// const input = document.querySelector('input')

// form.addEventListener('submit', function(){
//     event.preventDefault();
//     const cep = input.value;

//     // fetch('https://viacep.com.br/ws/'+ cep + '/json')
//     // .then((response)=> response.json())
//     // .then((data)=>console.log(data));
//     getCep(cep);
    
// });


// async function getCep(cep){

//     const request = await fetch(`https://viacep.com.br/ws/${cep}/json`);
//     const data =  await request.json();
//     console.log(data);
// }




const form = document.querySelector("form");
const input = document.querySelector('input');

form.addEventListener('submit', function(){
    event.preventDefault();
    const cep = input.value;
    fetch('https://viacep.com.br/ws/'+ cep+'/json/');

})

