const boxEl = document.getElementsByClassName('grid-box');
const reloadEl = document.getElementById('reload-btn');
const reloadEl2 = document.getElementById('reload-btn2');
let challCount = 0;
let yourScore = 0;
let cpuScore = 0;
let tieCount = 0;




function resetFun(){
    for(let i = boxEl.length -1; i >= 0; i--){
        boxEl[i].innerText = '';
    }
    challCount = 0;
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

            challCount++;
            console.log(challCount)
            
            if(challCount !== 5){
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
        }   
        
        if(boxEl[0].innerText == boxEl[1].innerText && boxEl[1].innerText == boxEl[2].innerText && boxEl[0].innerText !== ''){
            winnerCount(0);
        }else if(boxEl[3].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[5].innerText && boxEl[3].innerText !== ''){
            winnerCount(3);        
        }else if(boxEl[6].innerText == boxEl[7].innerText && boxEl[7].innerText == boxEl[8].innerText && boxEl[6].innerText !== ''){
            winnerCount(6);        
        }else if(boxEl[0].innerText == boxEl[3].innerText && boxEl[3].innerText == boxEl[6].innerText && boxEl[0].innerText !== ''){
            winnerCount(0);        
        }else if(boxEl[1].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[7].innerText && boxEl[1].innerText !== ''){
            winnerCount(1);        
        }else if(boxEl[2].innerText == boxEl[5].innerText && boxEl[5].innerText == boxEl[8].innerText && boxEl[2].innerText !== ''){
            winnerCount(2);        
        }else if(boxEl[0].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[8].innerText && boxEl[0].innerText !== ''){
            winnerCount(0);        
        }else if(boxEl[2].innerText == boxEl[4].innerText && boxEl[4].innerText == boxEl[6].innerText && boxEl[2].innerText !== ''){
            winnerCount(2);        
        }else if(challCount == 5){
            tieCount++;
            document.getElementById('tie-count').innerText = yourScore;
            document.getElementById('winner-announce').innerText = `Tie`;
            document.getElementById('pop').classList.add('active');
            
        }
        
    }            
    
}

const winnerCount = (boxnum)=>{
    // alert(boxEl[boxnum].innerText + " win");
    document.getElementById('winner-announce').innerText = `${boxEl[boxnum].innerText} Win`;
    document.getElementById('pop').classList.add('active');
    
    if(boxEl[boxnum].innerText == 'O'){
        yourScore++;
        document.getElementById('your-score').innerText = yourScore;
    }else if(boxEl[boxnum].innerText == 'X'){
        cpuScore++;
        document.getElementById('cpu-score').innerText = cpuScore;
    }
}
