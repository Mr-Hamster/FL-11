let start = confirm('Do you want to play a game?');
let playAgain = true;
const halfPrize_kof_2life = 2;
const maxprize = 100;
const maxLife = 3;
const increaseValue = 4;
const lastLife = 1;
if(!start){
    alert('You did not become a billionaire, but can.')
}else{
    while(playAgain){
        let maxValue = 8;
        const minValue = 0;
        let kof = 1;
        let bank = 0;
        let life = 3;
        let prize = 100;
        while(life > 0){
            const menu = {
                title1:`Choose a roulette pocket number from ${minValue} to ${maxValue}`,
                title2:`Attempts left: ${life}`,
                title3:`Total prize:${bank}$`,
                title4:`Possible prize on current attempt:${prize}$`
            }
            let randomNumber = Math.floor(Math.random() * (maxValue - minValue) + 1) + minValue;
            let question = +prompt(`${menu.title1}\n${menu.title2}\n${menu.title3}\n${menu.title4}\n`);
            if(question !== randomNumber){
                life--;
                prize /= halfPrize_kof_2life;
            }
            if(question === randomNumber && life === maxLife){
                bank += prize;
                life = maxLife;
                kof *= halfPrize_kof_2life;
                maxValue += increaseValue;
                let win = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
                if(win){
                    prize = maxprize;
                    prize *= kof;
                }else{
                    break;
                }
            }else if(question === randomNumber && life === halfPrize_kof_2life){
                bank += prize;
                life = maxLife;
                kof *= halfPrize_kof_2life;
                maxValue += increaseValue;
                let win = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
                if(win){
                    prize = maxprize;
                    prize *= kof;
                }else{
                    break;
                }
            }else if(question === randomNumber && life === lastLife){
                bank += prize;
                life = maxLife;
                kof *= halfPrize_kof_2life;
                maxValue += increaseValue;
                let win = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
                if(win){
                    prize = maxprize;
                    prize *= kof;
                }else{
                    break;
                }
            }
        }
    alert(`Thank you for your participation. Your prize is: ${bank}$`);
    playAgain = confirm('Do you want to play again?');
    }
}