let choices=document.querySelectorAll(".choices");
let opt=[" rock", " paper", " scissor"];
let userscore=1;
let compscore=1;
let mes=document.querySelector(".mes");
let comps=document.querySelector(".comps");
let main=document.querySelector(".main");
let drawtext=document.querySelector(".drawtext");



for(choice of choices){
    choice.addEventListener("click" , function(){
        let rand=opt[Math.floor(Math.random()*3)];
        let user=this.innerText;

        if(user==rand){
            console.log("Draw");
            drawtext.innerText="Draw";


            // let drawopt=document.createElement("div");
            // drawopt.classList.add(".drawopt");
            // drawopt.innerHTML= 
            // `<div class="drawtext">It's a Draw</div>`;
            // main.appendChild(drawopt);



            // main.addEventListener("click", function(){
            //     console.log(this.nodeName);
            //     console.log(drawopt);
            //     drawopt.remove();
            // });

        }

        else {
            if((user==" rock")&&(rand==" paper")){
                console.log("rand");
                drawtext.innerText="Comp win";
                comps.innerText= "comp score : " + compscore;
                compscore=compscore+1;

            }

            else if((user==" rock")&&(rand==" scissor")){
                console.log("user")
                drawtext.innerText="You win";
                mes.innerText= "Your Score : " +userscore;
                userscore=userscore+1;
            }

            else if((user==" paper")&&(rand==" scissor")){
                console.log("rand");
                drawtext.innerText="Comp win";
                comps.innerText= "comp score : " + compscore;
                compscore=compscore+1;
            }

            else if((user==" paper")&&(rand==" rock")){
                console.log("user")
                drawtext.innerText="You win";
                mes.innerText= "Your Score : " +userscore;
                userscore=userscore+1;
            }

            else if((user==" scissor")&&(rand==" rock")){
                console.log("rand");
                drawtext.innerText="Comp win";
                comps.innerText= "comp score : " + compscore;
                compscore=compscore+1;
            }

            else if((user==" scissor")&&(rand==" paper")){
                console.log("user")
                drawtext.innerText="You win";
                mes.innerText= "Your Score : " +userscore;
                userscore=userscore+1;
            }
          


        }
        

        console.log(rand);
        console.log(user);

    });
}

