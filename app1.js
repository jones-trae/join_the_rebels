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