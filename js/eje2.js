const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function(){
    const temperatura = document.getElementById('temperatura').value;
    const opciones = document.getElementById('opciones').value;
    const opciones2 = document.getElementById('opciones2').value;

    parseFloat(temperatura);
    parseInt(opciones, opciones2);
   
    if(opciones == 1 && opciones2 == 5){       
        let resultado = (temperatura - 32)/1.8;
        alert(`La temperatura ${temperatura}º Fahrenheit convertida a Celsius es ${resultado.toFixed(2)}º`);
    }

    else if(opciones == 1 && opciones2 == 6){
        let resultado = 5/9*(temperatura - 32) + 273.15;
        alert(`La temperatura ${temperatura}º Fahrenheit convertida a Kelvin es ${resultado.toFixed(2)}º`);
    }

    else if(opciones == 2 && opciones2 == 4){
        let resultado = (temperatura * 1.8) + 32;
        alert(`La temperatura ${temperatura}º Celsius convertida a Fahrenheit es ${resultado.toFixed(2)}º`);
    }

    else if(opciones == 2 && opciones2 == 6){
        let resultado = parseFloat(temperatura) + 273.15;
        alert(`La temperatura ${temperatura}º Celsius convertida a Fahrenheit es ${resultado.toFixed(2)}º`);     
    }

    else if(opciones == 3 && opciones2 == 4){
        let resultado = (temperatura - 273.15) * 9/5 + 32
        alert(`La temperatura ${temperatura}º Kelvin convertida a Fahrenheit es ${resultado.toFixed(2)}`);  
    }

    else if(opciones == 3 && opciones2== 5){
        let resultado = parseFloat(temperatura) - 273.15;
        alert(`La temperatura ${temperatura}º Kelvin convertida a Celcius son: ${resultado.toFixed(2)}º`);  
    }
})