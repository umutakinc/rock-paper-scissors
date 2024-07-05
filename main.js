function getComputerChoice() {
    let choices = ["Taş", "Kağıt", "Makas"]; // Taş kağıt makas dizelerinin tutulduğu dizi 
    let randomNumber = Math.random() * choices.length; // En büyük dizinin uzunluğu olabilecek random sayı
    randomNumber = Math.floor(randomNumber); // Ondalıklı sayıyı yuvarlıyoruz
    let computerChoice = choices[randomNumber]; // Rastgele seçilen dizi değeri 

    return computerChoice;
}

function getHumanChoice() {
    let promptChoice = prompt('Taş, Kağıt ve Makas değerlerinden birini giriniz.');

    return promptChoice;
}
