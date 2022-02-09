function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3)/3 ;

    if(media >= 7){
        console.log("Aprovado");
    }else{
        console.log("Reprovado!")
    }
}
