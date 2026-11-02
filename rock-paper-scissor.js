 let result=''
        let score=JSON.parse(localStorage.getItem('score'))||
        {
            win:0,
            lost:0,
            tie:0
        };
        updateScore();
        let isAutoPlay=false;
        let setIntervalId;
        function autoPlay()
        {
            if(!isAutoPlay)
            {
               setIntervalId=setInterval(()=>
            {
               let playerMove=computerMove();
               playGame(playerMove);
            },1000)
            isAutoPlay=true;
            }
            else
            {
                clearInterval(setIntervalId);
                isAutoPlay=false;
            }
        }
             function playGame(playerMover)
             {
                 let computer=computerMove();
                 if(playerMover==='rock')
                 {
                     if(computer==='rock')
                       result='Tie';
                     else if(computer==='paper')
                       result='Lost';
                     else
                       result='Win';
                 }
                 else if(playerMover==='paper')
                 {
                     if(computer==='paper')
                        result='Tie';
                    else if(computer==='scissors')
                        result='Lost';
                    else
                        result='Win';
                 }
                 else
                 {
                     if(computer==='scissors')
                        result='Tie';
                    else if(computer==='rock')
                        result='Lost';
                    else
                        result='Win';
                 }
                   if(result==='Win')
                       score.win+=1;
                   else if(result==='Lost')
                       score.lost+=1;
                   else
                       score.tie+=1;
                   localStorage.setItem('score',JSON.stringify(score));
                   document.querySelector('.js-result').innerHTML=`${result}`;
                   document.querySelector('.js-move').innerHTML=`Your move:<img src="images/${playerMover}-emoji.png" class="move-icon">,Computer Move:<img src="images/${computer}-emoji.png" class="move-icon">`;
                   updateScore();
             }
             function computerMove()
             {
                 let computer=Math.random();
                 if(computer>=0&&computer<1/3)
                   return 'rock';
                 else if(computer>=1/3&&computer<2/3)
                   return 'paper';
                 else
                   return 'scissors';
             }
             function updateScore()
             {
                 document.querySelector('.js-score').innerHTML=`Wins:${score.win} lost:${score.lost} tie:${score.tie}`;
             }