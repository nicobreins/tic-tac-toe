const boxEl = document.getElementsByClassName('grid-box');
const reloadEl = document.getElementById('reload-btn');
const reloadEl2 = document.getElementById('reload-btn2');
const turnEl = document.getElementById('turn-display');
let challCount = 0;
let yourScore = 0;
let cpuScore = 0;
let tieCount = 0;

if(localStorage.getItem('oWinCount') !== null){
    document.getElementById('your-score').innerText =localStorage.getItem('oWinCount')
}

if(localStorage.getItem('xWinCount') !== null){
    document.getElementById('cpu-score').innerText =localStorage.getItem('xWinCount')
}

if(localStorage.getItem('tieCount') !== null){
    document.getElementById('tie-count').innerText =localStorage.getItem('tieCount')
}



function resetFun(){
    for(let i = boxEl.length -1; i >= 0; i--){
        boxEl[i].innerText = '';
        boxEl[i].classList.remove('active')
    }
    challCount = 0;
    turnEl.innerHTML = "Turn - O";   
    document.getElementById('grid-sel').classList.remove('noclick');

}

reloadEl.onclick = ()=>{
    resetFun()
}

reloadEl2.onclick = ()=>{
    resetFun();
    document.getElementById('pop').classList.remove('active');

}




for(let i = boxEl.length -1; i >= 0; i--){
    boxEl[i].onclick = ()=>{

        if(boxEl[i].innerText == ''){
            boxEl[i].innerText = 'O';
            document.getElementById('cpuclick-fx').play();

            challCount++;
            console.log(challCount)

            turnEl.innerHTML = "Turn - X";
            document.getElementById('grid-sel').classList.add('noclick');

            setTimeout(() => {
                if(challCount !== 5){
                    document.getElementById('youclick-fx').play();
                                        
                    if(boxEl[0].innerText == boxEl[2].innerText && boxEl[1].innerText == '' && boxEl[0].innerText !== ''){
                        boxEl[1].innerText = 'X';
                    }else if(boxEl[3].innerText == boxEl[5].innerText && boxEl[4].innerText == '' && boxEl[3].innerText !== ''){
                        boxEl[4].innerText = 'X';
                    }else if(boxEl[6].innerText == boxEl[8].innerText && boxEl[7].innerText == '' && boxEl[6].innerText !== ''){
                        boxEl[7].innerText = 'X';
                    }else if(boxEl[0].innerText == boxEl[6].innerText && boxEl[3].innerText == '' && boxEl[0].innerText !== ''){
                        boxEl[3].innerText = 'X';
                    }else if(boxEl[1].innerText == boxEl[7].innerText && boxEl[4].innerText == '' && boxEl[1].innerText !== ''){
                        boxEl[4].innerText = 'X';
                    }else if(boxEl[2].innerText == boxEl[8].innerText && boxEl[5].innerText == '' && boxEl[2].innerText !== ''){
                        boxEl[5].innerText = 'X';
                    }else if(boxEl[0].innerText == boxEl[8].innerText && boxEl[4].innerText == '' && boxEl[0].innerText !== ''){
                        boxEl[4].innerText = 'X';
                    }else if(boxEl[2].innerText == boxEl[6].innerText && boxEl[4].innerText == '' && boxEl[2].innerText !== ''){
                        boxEl[4].innerText = 'X';
                    }else if(boxEl[0].innerText == boxEl[1].innerText && boxEl[2].innerText == '' && boxEl[0].innerText !== ''){
                        boxEl[2].innerText = 'X';
                    }else if(boxEl[3].innerText == boxEl[4].innerText && boxEl[5].innerText == '' && boxEl[3].innerText !== ''){
                        boxEl[5].innerText = 'X';
                    }else if(boxEl[6].innerText == boxEl[7].innerText && boxEl[8].innerText == '' && boxEl[6].innerText !== ''){
                        boxEl[8].innerText = 'X';
                    }else if(boxEl[0].innerText == boxEl[3].innerText && boxEl[6].innerText == '' && boxEl[0].innerText !== ''){
                        boxEl[6].innerText = 'X';
                    }else if(boxEl[1].innerText == boxEl[4].innerText && boxEl[7].innerText == '' && boxEl[1].innerText !== ''){
                        boxEl[7].innerText = 'X';
                    }else if(boxEl[2].innerText == boxEl[5].innerText && boxEl[8].innerText == '' && boxEl[2].innerText !== ''){
                        boxEl[8].innerText = 'X';
                    }else if(boxEl[0].innerText == boxEl[4].innerText && boxEl[8].innerText == '' && boxEl[0].innerText !== ''){
                        boxEl[8].innerText = 'X';
                    }else if(boxEl[2].innerText == boxEl[4].innerText && boxEl[6].innerText == '' && boxEl[2].innerText !== ''){
                        boxEl[6].innerText = 'X';
                    }else if(boxEl[2].innerText == boxEl[1].innerText && boxEl[0].innerText == '' && boxEl[2].innerText !== ''){
                        boxEl[0].innerText = 'X';
                    }else if(boxEl[5].innerText == boxEl[4].innerText && boxEl[3].innerText == '' && boxEl[5].innerText !== ''){
                        boxEl[3].innerText = 'X';
                    }else if(boxEl[8].innerText == boxEl[7].innerText && boxEl[6].innerText == '' && boxEl[8].innerText !== ''){
                        boxEl[6].innerText = 'X';
                    }else if(boxEl[6].innerText == boxEl[3].innerText && boxEl[0].innerText == '' && boxEl[6].innerText !== ''){
                        boxEl[0].innerText = 'X';
                    }else if(boxEl[7].innerText == boxEl[4].innerText && boxEl[1].innerText == '' && boxEl[7].innerText !== ''){
                        boxEl[1].innerText = 'X';
                    }else if(boxEl[8].innerText == boxEl[5].innerText && boxEl[2].innerText == '' && boxEl[8].innerText !== ''){
                        boxEl[2].innerText = 'X';
                    }else if(boxEl[8].innerText == boxEl[4].innerText && boxEl[0].innerText == '' && boxEl[8].innerText !== ''){
                        boxEl[0].innerText = 'X';
                    }else if(boxEl[6].innerText == boxEl[4].innerText && boxEl[2].innerText == '' && boxEl[6].innerText !== ''){
                        boxEl[2].innerText = 'X';
                    }else{
                        let cpuInputVal = Math.floor((Math.random() * 10) % 9);
                        if(boxEl[cpuInputVal].innerText == ''){
                            boxEl[cpuInputVal].innerText = 'X'
                        }else{
                            while (boxEl[cpuInputVal].innerText !== '') {
                                cpuInputVal = Math.floor((Math.random() * 10) % 9);
            
                                if(boxEl[cpuInputVal].innerText == ''){
                                    boxEl[cpuInputVal].innerText = 'X';
                                    break;
                                }
                            }                
                        }
                    }
                    
                }   
                turnEl.innerHTML = "Turn - O"; 
                document.getElementById('grid-sel').classList.remove('noclick');
                winnerAnn();
                           
            }, 500);

            winnerAnn();
            
            
        }   
        
        
    }            
    
}

const winnerAnn = ()=>{
    if(boxEl[0].innerText == boxEl[1].innerText && boxEl[1].innerText == boxEl[2].innerText && boxEl[0].innerText !== ''){
        winnerCount(0,1,2);
    }else if(boxEl[3].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[5].innerText && boxEl[3].innerText !== ''){
        winnerCount(3,4,5);        
    }else if(boxEl[6].innerText == boxEl[7].innerText && boxEl[7].innerText == boxEl[8].innerText && boxEl[6].innerText !== ''){
        winnerCount(6,7,8);        
    }else if(boxEl[0].innerText == boxEl[3].innerText && boxEl[3].innerText == boxEl[6].innerText && boxEl[0].innerText !== ''){
        winnerCount(0,3,6);        
    }else if(boxEl[1].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[7].innerText && boxEl[1].innerText !== ''){
        winnerCount(1,4,7);        
    }else if(boxEl[2].innerText == boxEl[5].innerText && boxEl[5].innerText == boxEl[8].innerText && boxEl[2].innerText !== ''){
        winnerCount(2,5,8);        
    }else if(boxEl[0].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[8].innerText && boxEl[0].innerText !== ''){
        winnerCount(0,4,8);        
    }else if(boxEl[2].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[6].innerText && boxEl[2].innerText !== ''){
        winnerCount(2,4,6);        
    }else if(challCount == 5){
        tieCount++;
        document.getElementById('tie-count').innerText = tieCount;
        document.getElementById('winner-announce').innerText = `Tie`;
        document.getElementById('pop').classList.add('active');
        document.getElementById('tie-fx').play();        
        localStorage.setItem('tieCount',tieCount);
    }    
}

const winnerCount = (box1,box2,box3)=>{
    // alert(boxEl[box1].innerText + " win");
    boxEl[box1].classList.add('active');
    boxEl[box2].classList.add('active');
    boxEl[box3].classList.add('active');
    document.getElementById('win-fx').play();
    document.getElementById('grid-sel').classList.add('noclick');

    setTimeout(() => {
        document.getElementById('winner-announce').innerText = `${boxEl[box1].innerText} Win`;
        document.getElementById('pop').classList.add('active');
        
        if(boxEl[box1].innerText == 'O'){
            yourScore++;
            document.getElementById('your-score').innerText = yourScore;
            localStorage.setItem('oWinCount',yourScore);
        }else if(boxEl[box1].innerText == 'X'){
            cpuScore++;
            document.getElementById('cpu-score').innerText = cpuScore;
            localStorage.setItem('xWinCount',cpuScore)
        }        
    }, 1100);

    
}
