let userNumberAnswer = parseInt(prompt('Exactly how Rebel are you? 1-10'));

function getUserNumberOneToTen(){
if (userNumberAnswer > 10 || userNumberAnswer < 0){
    userNumberAnswer = parseInt(prompt( 'Thats TOO REBEL. Try again you maniac! 1-10'))
    }

}

getUserNumberOneToTen();