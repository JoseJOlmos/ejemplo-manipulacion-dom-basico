//console.log('Hello, world')
// h1 { color: red }
// .parrafito { ... }
// #pid { ... }
//#es in id
//manupulacion dom
const h1 = document.querySelector('h1');
const form= document.querySelector('#form')
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const pResult=document.querySelector('#resultado');//seleccionar el elemento
///formularios submit ? 

form.addEventListener('submit',sumarInputValues);
function sumarInputValues(event){
  event.preventDefault()
  const sumaInputs =input1.value+input2.value;
  pResult.innerText ="Resultado:  "+sumaInputs;
}

/*
btn.addEventListener('click',btnOnClick);//nombre evento , la funcion que debe llamar
function btnOnClick(){//escuhar los eventos
  const sumaInputs =input1.value+input2.value;
  pResult.innerText ="Resultado:  "+sumaInputs;
}*/
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('.parrafito');
//const pid = document.getElementById('pid');
//const input = document.querySelector('input');





//console.log(input.value);

/*console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});*/
//h1.innerHTML='patito <br> feo';// covierte a htlm
//h1.innerTEXT ='patito <br> feo';
//console.log(h1.getAttribute('pantalla'))//leer los atributos
//h1.setAttribute('class', 'rojo')//modificar el atributo
//h1.classList.add('rojo');//agrgar una clase
//h1.classList.remove('rojo ');//remover clase

//input.value=456//ingresar un valor defecto placeholder
//const img=document.createElement('img');//crear un elemento html queramos
//img.setAttribute('src','url del imagen');
//consol.log(img);
//pid.innerHTML="";
//pid.append(img);//solo mete la imagen despues del elemento 