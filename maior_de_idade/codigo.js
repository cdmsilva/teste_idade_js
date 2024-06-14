function testar(){
    let textidade = document.getElementById("textidade")
    let idade = Number(textidade.value)

    if(idade < 18){
        alert ("Menor de idade")
    }else if(idade>18 && idade < 65){
        alert("Maior de idade")
    }else{
        alert("Idoso")
    }
}