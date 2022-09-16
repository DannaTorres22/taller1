const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function(){
    const lado1 = document.getElementById('lado1').value;
    const lado2 = document.getElementById('lado2').value;
    const lado3 = document.getElementById('lado3').value;

    parseInt(lado1, lado2, lado3);
   
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){       
        alert(`El triangulo es equilatero`);
    }

    else if(lado1 == lado2 || lado1 == lado3 ||lado2 == lado3){       
        alert(`El triangulo es isosceles`);
    }

    else if(lado1 != lado2 && lado1 != lado3 ||lado2 != lado3){       
        alert(`El triangulo es escaleno`);
    }
})