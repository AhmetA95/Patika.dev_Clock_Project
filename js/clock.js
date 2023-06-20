let Name;
let Name1 = prompt("Your name: ");

while (Name1 === "") {
  alert("İsim girmediğiniz için devam edemiyorsunuz.");
  Name1 = prompt("Your name: ");
}

Name = document.querySelector("#myName");
Name.innerHTML = `${Name1}`;

//Metin sonunda saniyelik değişen noktalama işaretleri yerleştir:
function updatePunctuation() {
  let punctuationMarks = [".", "!", "?"]; // Noktalama işaretleri için array oluştur
  let punctuationIndex = 0; // Noktalama işaretlerinin indeksi

  setInterval(function() {
    let myDots = document.getElementById('myDots');
    myDots.textContent = punctuationMarks[punctuationIndex]; // Noktalama işaretini güncelle

    punctuationIndex++; // İndeksi birer birer arttır

    // İndeks sıfırlandğında başa dön:
    if (punctuationIndex >= punctuationMarks.length) {
      punctuationIndex = 0;
    }
  }, 1000); // Saniye başında yenile
}


function showTime() {
  let currentTime = new Date(); // Şu anki zaman için Date classını çağır
  let hours = currentTime.getHours(); //Date classının içinden saat, dakika, saniye ve gün fonksiyonları çağır 
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let day = currentTime.getDay();

  // Eğer saat, dakika ya da saniyeden biri 10'dan küçükse başına sıfır ekle:
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Day fonksiyonunun sayı olarak verdiği günleri string olarak günlerle eşleştir:
  day = (day === 1
    ? "Pazartesi"
    : day === 2
    ? "Salı"
    : day === 3
    ? "Çarşamba"
    : day === 4
    ? "Perşembe"
    : day === 5
    ? "Cuma"
    : day === 6
    ? "Cumartesi"
    : "Pazar");

    
  let timeString = `${hours}:${minutes}:${seconds} ${day}`; // TimeString'i oluştur
  document.getElementById("myClock").innerHTML = timeString; // Clock elemanını Time stringi ile güncelle
}

setInterval(showTime, 1000); // ShowTime fonksiyonunu her saniye çağır
updatePunctuation(); // Noktalama işareti fonksiyonunu çağır