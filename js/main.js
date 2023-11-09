let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("inserisci il tuo colore preferito");

let random = Math.floor(Math.random() * 40);

let password = name + surname + favoriteColor + random;

document.getElementById("user_password").innerHTML = password;