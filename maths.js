
var answer;

var score = 0;

var backgroundImages = [];

function nextQuestion(){

    const n1 = Math.floor(Math.random() * 5);

    const n2 = Math.floor(Math.random() * 6);

    document.getElementById('n1').innerHTML = n1;

    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;

};

function checkAnswer(){

    const prediction = predictImage();

    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct answer! Your score is ${score}`);
        
        if (score <= 7){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;            
        }else{
            alert('Congratulations! you won this round');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        }

    }else {
        if (score != 0){score--};
        console.log(`Wrong Answer! Your score is ${score}`);
        alert('Oops check your answer or write neater nextime');
        setTimeout(function(){
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 2000);
    }
}