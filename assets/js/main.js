const games = [
    {id: 1, name: "Minecraft", price: 15000, image: "images/minecraft.jpg"},
    {id: 2, name: "CS:GO", price: "тегін", image: "images/csgo.jpg"},
    {id: 3, name: "The Witcher 3", price: 12000, image: "images/witcher3.jpg"},
    {id: 4, name: "Hollow Knight", price: 4100, image: "images/hollowknight.jpg"},
    {id: 5, name: "Cyberpunk 2077", price: 18000, image: "images/cyberpunk2077.jpg"},
    {id: 6, name: "Stray", price: 7000, image: "images/stray.jpg"},
    {id: 7, name: "GTA V", price: 15000, image: "images/gtav.jpg"},
    {id: 8, name: "Stardew Valley", price: 2400, image: "images/stardew.jpg"},
    {id: 9, name: "Sally Face", price: 4290, image: "images/sallyface.jpg"},
    {id: 10, name: "Resident Evil 4", price: 14500, image: "images/revillage.jpg"}
];

const gamesContainer = document.getElementById("games-container");
const cartCount = document.getElementById("cart-count");
let cart = 0;

function renderGames() {
    gamesContainer.innerHTML = "";
    games.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        const priceText = (typeof game.price === "number") ? `${game.price} ₸` : game.price;

        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="game-image">
            <h2>${game.name}</h2>
            <p>Бағасы: ${priceText}</p>
            <button onclick="addToCart(${game.id})">Сатып алу</button>
        `;
        gamesContainer.appendChild(card);
    });
}

function addToCart(id) {
    cart++;
    cartCount.textContent = cart;
    const gameName = games.find(g => g.id === id).name;
    alert(`Сіз "${gameName}" ойынын себетке қостыңыз!`);
}

renderGames();
