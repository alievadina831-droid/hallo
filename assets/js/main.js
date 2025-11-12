const games = [
    {id: 1, name: "Minecraft", price: 15 000},
    {id: 2, name: "CS:GO", price: "тегін"},
    {id: 3, name: "The Witcher 3", price: 12 000},
    {id: 4, name: "Hollow Knight", price: 4100},
    {id: 5, name: "Cyberpunk 2077", price: 18000},
    {id: 6, name: "UnderTale", price: 1800},
    {id: 7, name: "GTA V", price: 15 000},
    {id: 8, name: "Stardew Valley", price: 2400},
    {id: 9, name: "Sally Face", price: 4290},
    {id: 10, name: "Resident Evil 4", price: 14 500}
];
const gamesContainer = document.getElementById("games-container");
const cartCount = document.getElementById("cart-count");
let cart = 0;
function renderGames() {
    gamesContainer.innerHTML = "";
    games.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");
        card.innerHTML = `
            <h2>${game.name}</h2>
            <p>Бағасы: ${game.price} ₸</p>
            <button onclick="addToCart(${game.id})">Сатып алу</button>
        `;
        gamesContainer.appendChild(card);
    });
}
function addToCart(id) {
    cart++;
    cartCount.textContent = cart;
    alert(`Сіз "${games.find(g => g.id === id).name}" ойынын себетке қостыңыз!`);
}
renderGames();
