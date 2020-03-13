var CardNumber = document.querySelectorAll('input[type=password]')
var Eyer = document.querySelector('input[id=show]')
var AddCard = document.querySelector('input[value=adicionar]')

console.log(CardName)

const showNumbers = function(){
    check = event.target 
    if(!check.checked){
        for(let i=0; i<CardNumber.length; i++){
            CardNumber[i].type = "password"
        }
    }else{
        for(let i=0; i<CardNumber.length; i++){
            CardNumber[i].type = "text"
        }
    }
}

const checkInfos = function() {

    for(let i=0; i<CardNumber.length; i++){
        if(CardNumber[i].value.length != 4){
            alert('Cartao Invalido')
            return
        }
    }
}

AddCard.addEventListener('click', checkInfos )
Eyer.addEventListener('click', showNumbers )
