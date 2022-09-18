//Circulo
    //Perimetro
    let perimetroC=document.getElementById("perimetroC");
    let perimetroCirculo=document.getElementById("perimetroCirculo");
    let cerrarModalC=document.querySelector(".cerrarModalC");


    perimetroC.addEventListener("click",()=>{
        perimetroCirculo.style.display="block";
    })

    cerrarModalC.addEventListener("click",()=>{
        perimetroCirculo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroC){
            perimetroC.style.display="flex"; 
        }
    })

    const calcularPC=document.getElementById("calcularPC");

    calcularPC.addEventListener("click",()=>{
        const radio=document.getElementById("radio").value;
        parseInt(radio);
        let resultado = radio * 3.1416 * 2;
        alert(`El perímetro del circulo es ${resultado.toFixed(2)}`);
    })

    //Area
    let areaC=document.getElementById("areaC");
    let areaCirculo=document.getElementById("areaCirculo");
    let cerrarModal=document.querySelector(".cerrarModal");

    areaC.addEventListener("click",()=>{
        areaCirculo.style.display="block";
    })

    cerrarModal.addEventListener("click",()=>{
        areaCirculo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaC){
            areaC.style.display="flex"; 
        }
    })

    const calcularAC=document.getElementById("calcularAC");

    calcularAC.addEventListener("click",()=>{
        const radio=document.getElementById("radio").value;
        parseInt(radio);
        let resultado = 3.1416 * (radio *  radio);
        alert(`El área del circulo es ${resultado.toFixed(2)}`);
    })



//Cuadrado
    //perimetro
    let perimetroCu=document.getElementById("perimetroCu");
    let perimetroCuadrado=document.getElementById("perimetroCuadrado");
    let cerrarModalCu=document.querySelector(".cerrarModalCu");

    perimetroCu.addEventListener("click",()=>{
        perimetroCuadrado.style.display="block";
    })

    cerrarModalCu.addEventListener("click",()=>{
        perimetroCuadrado.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroCu){
            perimetroCu.style.display="flex"; 
        }
    })

    const calcularPCu=document.getElementById("calcularPCu");

    calcularPCu.addEventListener("click",()=>{
        let ladoC=document.getElementById("ladoC").value;
        parseInt(ladoC);
        let resultado = ladoC * 4;
        alert(`El perímetro del cuadrado es ${resultado}`);
    })


    //Area
    let areaCu=document.getElementById("areaCu");
    let areaCuadrado=document.getElementById("areaCuadrado");
    let cerrarModalCu2=document.querySelector(".cerrarModalCu2");

    areaCu.addEventListener("click",()=>{
        areaCuadrado.style.display="block";
    })

    cerrarModalCu2.addEventListener("click",()=>{
        areaCuadrado.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaCu){
            areaCu.style.display="flex"; 
        }
    })

    const calcularACu=document.getElementById("calcularACu");

    calcularACu.addEventListener("click",()=>{
        let ladoCA=document.getElementById("ladoCA").value;
        parseInt(ladoCA);
        let resultado = ladoCA * ladoCA;
        alert(`El área del triangulo es ${resultado}`);
    })
    //Triangulo
    //perimetro
    let perimetroT=document.getElementById("perimetroT");
    let perimetroTriangulo=document.getElementById("perimetroTriangulo");
    let cerrarModalT=document.querySelector(".cerrarModalT");

    perimetroT.addEventListener("click",()=>{
        perimetroTriangulo.style.display="block";
    })

    cerrarModalT.addEventListener("click",()=>{
        perimetroTriangulo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroT){
            perimetroT.style.display="flex"; 
        }
    })


    const calcularPT=document.getElementById("calcularPT");

    calcularPT.addEventListener("click",()=>{
        let lado1=document.getElementById("lado1").value;
        let lado2=document.getElementById("lado2").value;
        let lado3=document.getElementById("lado3").value;
        parseInt(lado1,lado2,lado3);
        let resultado = (parseInt(lado1) + parseInt(lado2) + parseInt(lado3));
        alert(`El perímetro del triangulo es ${resultado}`);
    })


    //Area
    let areaT=document.getElementById("areaT");
    let areaTriangulo=document.getElementById("areaTriangulo");
    let cerrarModalT2=document.querySelector(".cerrarModalT2");

    areaT.addEventListener("click",()=>{
        areaTriangulo.style.display="block";
    })

    cerrarModalT2.addEventListener("click",()=>{
        areaTriangulo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaT){
            areaT.style.display="flex"; 
        }
    })


    const calcularAT=document.getElementById("calcularAT");

    calcularAT.addEventListener("click",()=>{
        let baseT=document.getElementById("baseT").value;
        let alturaT=document.getElementById("alturaT").value;
        parseInt(baseT,alturaT);
        let resultado = (baseT * alturaT)/2;
        alert(`El perímetro del triangulo es ${resultado}`);
    })

//Rectangulo
    //perimetro
    let perimetroR=document.getElementById("perimetroR");
    let perimetroRectangulo=document.getElementById("perimetroRectangulo");
    let cerrarModalR=document.querySelector(".cerrarModalR");

    perimetroR.addEventListener("click",()=>{
        perimetroRectangulo.style.display="block";
    })

    cerrarModalR.addEventListener("click",()=>{
        perimetroRectangulo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==perimetroR){
            perimetroR.style.display="flex"; 
        }
    })

    const calcularPR=document.getElementById("calcularPR");

    calcularPR.addEventListener("click",()=>{
        let baseR=document.getElementById("baseR").value;
        let alturaR=document.getElementById("alturaR").value;
        parseInt(baseR,alturaR);
        let resultado = 2 *(parseInt(baseR) + parseInt(alturaR));
        alert(`El perímetro del rectangulo es ${resultado}`);
    })



    //Area
    let areaR=document.getElementById("areaR");
    let areaRectangulo=document.getElementById("areaRectangulo");
    let cerrarModalR2=document.querySelector(".cerrarModalR2");

    areaR.addEventListener("click",()=>{
        areaRectangulo.style.display="block";
    })

    cerrarModalR2.addEventListener("click",()=>{
        areaRectangulo.style.display="none"; 
    })

    window.addEventListener("click",(e)=>{
        if(e.target==areaR){
            areaR.style.display="flex"; 
        }
    })

    const calcularAR=document.getElementById("calcularAR");

    calcularAR.addEventListener("click",()=>{
        let baseAR=document.getElementById("baseAR").value;
        let alturaAR=document.getElementById("alturaAR").value;
        parseInt(baseAR,alturaAR);
        let resultado = baseAR * alturaAR;
        alert(`El perímetro del triangulo es ${resultado}`);
    })