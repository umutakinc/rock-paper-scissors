// Kazananı belirleyecek skor değişkenleri
let humanScore = 0, computerScore = 0;

let startBtn = document.querySelector('#startBtn');

let humanScoreEl = document.querySelector('#humanScore');
let computerScoreEl = document.querySelector('#computerScore');

function getComputerChoice() {
    let choices = ["Taş", "Kağıt", "Makas"]; // Taş kağıt makas dizelerinin tutulduğu dizi 
    let randomNumber = Math.random() * choices.length; // En büyük dizinin uzunluğu olabilecek random sayı
    randomNumber = Math.floor(randomNumber); // Ondalıklı sayıyı yuvarlıyoruz
    let computerChoice = choices[randomNumber]; // Rastgele seçilen dizi değeri 

    return computerChoice;
}

function getHumanChoice() {
    let promptChoice = prompt('Taş, Kağıt ve Makas değerlerinden birini giriniz.'); // Oyuncunun seçtiği seçenek
    promptChoice = promptChoice.charAt(0).toLocaleUpperCase() + promptChoice.slice(1).toLocaleLowerCase(); // Oyuncudan aldığımız dizeyi ilk harf büyük diğerleri küçük olacak şekilde formatlıyoruz

    playRound(promptChoice, getComputerChoice());
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Berabere kaldınız');
    } else if (
        (humanChoice == "Kağıt" && computerChoice == "Taş") 
        || 
        (humanChoice == "Taş" && computerChoice == "Makas") 
        || 
        (humanChoice == "Makas" && computerChoice == "Kağıt")
    ) {
        ++humanScore;
        humanScoreEl.textContent = humanScore;
        console.log(`Kazandınız! ${humanChoice} ${computerChoice}'ı yener.`);
    } else {
        ++computerScore;
        computerScoreEl.textContent = computerScore;
        console.log(`Kaybettiniz! ${computerChoice} ${humanChoice}'ı yener`);
    }

    console.log(humanScore, computerScore);

    if ((humanScore == 5) || (computerScore == 5)) {
        return
    } else {
        getHumanChoice();
    }
}

function playGame() {
    getHumanChoice();
}

startBtn.addEventListener('click', playGame);