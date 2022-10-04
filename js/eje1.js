

//logo de JS 
function cambiarI(sw){
    let pic;
    if(sw ==0){
        pic = "img/js.png"}
    else{
        pic ="img/js2.png"
    }
    document.getElementById('js').src = pic;
    }
//funciones seccion funciones e texto


//longitud de la palabra
let longitud = document.getElementById('longitud');
longitud.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert(`La longitud de la palabra "${texto}" es: ` + texto.length);
});


//mayusculas
let mayusculas = document.getElementById('mayusculas');
mayusculas.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert(`La palabra convertida "${texto}" a mayúsculas es ` + texto.toUpperCase());
});

//minusculas
let minusculas= document.getElementById('minusculas');
minusculas.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert(`La palabra covertida "${texto}" a minúsculas es ` + texto.toLowerCase());
});

//primer caracter
let caract = document.getElementById('caract');
caract.addEventListener('click',function(){
    const texto = document.getElementById('texto').value;
    window.alert(`El primer caracter de la palabra "${texto}" es ` + texto.charAt());
});

