document.getElementById('changeMessageBtn').addEventListener('click', function() {
    const messages = [
        "Terima kasih, Pak Azhar, atas bimbingan yang berharga!",
        "Kami sangat menghargai semua usaha yang telah Anda lakukan!",
        "Dukungan Anda sangat berarti bagi kami, Pak Azhar!",
        "Semoga kebaikan Anda dibalas dengan yang lebih baik!"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').innerText = messages[randomIndex];
});
