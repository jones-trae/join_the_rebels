console.log('Rebel scum!')

let userName = prompt('Rebel or Empire?')
    
function getAffiliation(){
if(userName == 'Empire'){
    document.write('<h2>No Emps allowed!</h2>')}
    else {(userName != 'Empire')
        document.write('<h2>Welcome, Rebel!</h2>');
    }
}
getAffiliation()


let userNumberAnswer = parseInt(prompt('Exactly how Rebel are you? 1-10'));

function getUserNumberOneToTen(){
if (userNumberAnswer > 10 || userNumberAnswer < 0){
    userNumberAnswer = parseInt(prompt( 'Thats TOO REBEL. Try again you maniac! 1-10'))
    }

}
getUserNumberOneToTen()

function goodGood()
{alert('Goooood.....GOOOOOD!')}

function deadDead()
{alert('The only good rebel....')}

function picturesOnPage(){
    let numberOfPictures = prompt('Wanna see some Leia? Mash that number bar, yo.')
    for(let i =0; i < numberOfPictures; i++){
        document.write('<img src="https://d3m2ca683sarz5.cloudfront.net/wp-content/uploads/2018/03/06154515/a98268_DSCN0619.jpg">')
    }
}
picturesOnPage()
