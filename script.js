let wantPlay = document.querySelector('#want-play');
let start = document.querySelector('#submit');
let gameButton = document.querySelector('#to-game');

let firstModal = document.querySelector('#modal-input');
let secondModal = document.querySelector('#start');

let minValue = document.querySelector('#min').value;
let maxValue = document.querySelector('#max').value;
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

let retry = document.querySelector('#btnRetry');
let over = document.querySelector('#btnOver');
let less = document.querySelector('#btnLess');
let equal = document.querySelector('#btnEqual');

orderNumberField.innerText = orderNumber;

let phraseRandom = Math.round(Math.random() * 3);
let answerPhrase;
answerNumber  = Math.floor((minValue + maxValue) / 2);
if (phraseRandom === 1) {
                        answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Так! Так! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `А теперь ВНИМАНИЕ. Я знаю, что ты загадал число ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;

wantPlay.addEventListener('click', () => {
    firstModal.classList.add('modal-active');
    secondModal.classList.remove('modal-active');
    document.querySelector('#user-min') = minValue;
    document.querySelector('#user-max') = maxValue; 
    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 1;
        maxValue = 100;
    };
});

start.addEventListener('click', () => {
    firstModal.classList.remove('modal-active');
    secondModal.classList.add('modal-active');
    
});

gameButton.addEventListener('click', () => {
    secondModal.classList.remove('modal-active');
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    
let phraseRandom = Math.round(Math.random() * 3);
let answerPhrase;
answerNumber  = Math.floor((minValue + maxValue) / 2);
if (phraseRandom === 1) {
                        answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Так! Так! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `А теперь ВНИМАНИЕ. Я знаю, что ты загадал число ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
});

//Тернарный оператор
let change;
change = (minValue < -1000) ? minValue = -999 : minValue = -1001;
change = (maxValue > 1000) ? maxValue = 999 : maxValue = 1001;

//Заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    if (gameRun=true) {
        minValue = 0;
        maxValue = 100;
        orderNumber = 0;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumberField.innerText = orderNumber + 1;
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        
        if (retry) {
            firstModal.classList.add('modal-active');
            secondModal.classList.remove('modal-active');
            over.classList.add('click');
            less.addEventListener('click');
            equal.addEventListener('click');
        }
    }
        let phraseRandom = Math.round(Math.random() * 3);
        let answerPhrase;
        if (phraseRandom === 1) {
                            answerPhrase = `Вы загадали число ${answerNumber }?`;
                            } else if (answerPhrase = (phraseRandom === 2)) {
                            answerPhrase = `Так! Так! Это число ${answerNumber }?`;
                            } else {
                            answerPhrase = `А теперь ВНИМАНИЕ. Я знаю, что ты загадал число ${answerNumber }! Да?`;
                            }

                            answerField.innerText = answerPhrase;
    })


//Больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я не смог...😥` ;
            } else {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            }
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Так! Так! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `А теперь ВНИМАНИЕ. Я знаю, что ты загадал число ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
        }
    }
})

//Меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue) {
            const phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Я не смог...😥` ;
            } else {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
            }
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            let phraseRandom = Math.round(Math.random() * 3);
            let answerPhrase;
            if (phraseRandom === 1) {
                           answerPhrase = `Вы загадали число ${answerNumber }?`;
                        } else if (answerPhrase = (phraseRandom === 2)) {
                           answerPhrase = `Так! Так! Это число ${answerNumber }?`;
                        } else {
                           answerPhrase = `А теперь ВНИМАНИЕ. Я знаю, что ты загадал число ${answerNumber }! Да?`;
                        }

                        answerField.innerText = answerPhrase;
        }
    }
})

//Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round(Math.random() * 3);
        let answerPhrase;
        if (phraseRandom === 1) {
                answerPhrase = `Я всегда угадываю\n\u{1F44C}`;
            } else if (answerPhrase = (phraseRandom === 2)) {
                answerPhrase = `Мастер в деле\n\u{1F60E}`;
            } else {
                answerPhrase = `И как тебе такая игра?\n\u{1F525}`;
            }
        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

