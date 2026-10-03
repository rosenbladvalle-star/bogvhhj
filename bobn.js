// Skapa ett bildelement i bakgrunden som vi kan använda för "B"-knappen
const bildElement = document.createElement('img');
bildElement.style.display = 'none'; // Göm bilden från början
bildElement.style.maxWidth = '100%'; // Gör så att bilden inte blir större än skärmen
bildElement.style.marginTop = '20px'; // Lite mellanrum upp till texten
document.body.appendChild(bildElement); // Lägg till bilden på din hemsida

// Lyssna på tangentbordet
document.addEventListener('keydown', function(event) {
    
    // 1. Om man trycker på "Y" -> Öppna i NY FLIK
    if (event.key.toLowerCase() === 'y') {
        window.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5GD_bEXwba16qDerTJmNkBmOGvXGeZpiGjc5qRJarg&s=10', '_blank'); 
    }
    
    // 2. Om man trycker på "B" -> Visa i SAMMA FÖNSTER
    if (event.key.toLowerCase() === 'b') {
        // Byt ut till namnet på din egen bild (t.ex. 'hund.jpg') eller en internetlänk
        bildElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhcMZwsiJMwDliBvbZ39buDbd4lFD9yleDH8MSkyc7A&s=10'; 
        
        bildElement.style.display = 'block'; // Gör bilden synlig på sidan
    }
});
