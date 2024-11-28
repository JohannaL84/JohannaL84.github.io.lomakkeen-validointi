//Toiminto estää lomakkeen lähettämisen
document.getElementById('userForm').addEventListener('submit', function(event) {

    event.preventDefault();

    //Alustetaan tyhjä taulukko virheille
    const errors = [];

    //Palauttaa lomakkeelta elementin arvon
    const userId = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const zip = document.getElementById("zip").value;
    
    const name = document.getElementById("name").value;
    const adress = document.getElementById("adress").value;
    const country = document.getElementById("country").value;

    const man = document.getElementById("man").checked;
    const woman = document.getElementById("woman").checked;
    const finnish = document.getElementById("finnish").checked;
    const other_lang = document.getElementById("other_lang").checked;

    //Tarkastaa onko kenttä täytetty (nimi, osoite, maa, sukupuoli, kieli)
    if (name == "" || adress == "" || country == "Valitse maa") {
        errors.push("Kaikki kentät ovat pakollisia paitsi lisätietoja")
    }

    if (man == false && woman == false) {
        if (errors.includes("Kaikki kentät ovat pakollisia paitsi lisätietoja") == false) {
            errors.push("Kaikki kentät ovat pakollisia paitsi lisätietoja")
        }
    }
    
    if (finnish == false && other_lang == false) {
        if (errors.includes("Kaikki kentät ovat pakollisia paitsi lisätietoja") == false) {
            errors.push("Kaikki kentät ovat pakollisia paitsi lisätietoja")
        }
    }

    //Määritellään sisällön vaativuus käyttäjän ID:lle
    if (userId.length < 6) {
       errors.push("Käyttäjä ID:n on oltava vähintään 6 merkkiä pitkä.");
    }

    //Määritellään sisällön vaativuus käyttäjän salasanalle, sekä virheilmoitus
    const passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordPattern.test(password)) {
        errors.push("Salasanan on oltava vähintään 6 merkkiä pitkä ja sisällettävä vähintään yksi numero, yksi iso kirjain ja yksi erikoismerkki (!@£$€&%#).");
    }

    //Määritellään sisällön vaativuus käyttäjän sähköpostille, sekä virheilmoitus
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Sähköpostiosoitteen tulee olla oikeaa muotoa.");
    }

    //Määritellään sisällön vaativuus käyttäjän postinumerolle, sekä virheilmoitus
    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zip)) {
        errors.push("Postinumeron tulee olla 5 numeroa.");
    }

    const errorContainer = document.getElementById("errorMessages");
    errorContainer.innerHTML = '';

    if (errors.length > 0) {
        errors.forEach(function(error) {
            const errorItem = document.createElement("div");
            errorItem.textContent = error;
            errorContainer.appendChild(errorItem);
        });
    } else {
        errorContainer.textContent = 'Kaikki kentät on täytetty oikein!';
    }
});