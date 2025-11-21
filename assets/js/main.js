// Game data with real prices and online images
const games = [
    {
        id: 1,
        title: "Stray",
        price: 7500,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg",
        description: "Жоғалған, жалғыз мысық ретінде сыртқы әлемдегі құпияға толы қаланы айналып өтіңіз. Қорғанышсыз және ожауыз болған кезде, мысық жаңа достарды табуы және өмір сүруі керек.",
        category: "Приключение",
        fullDescription: "Stray - бұл жоғалған, жалғыз мысық ретінде сыртқы әлемдегі құпияға толы қаланы айналып өтетін үшінші кісі приключение ойыны. Қорғанышсыз және ожауыз болған кезде, мысық жаңа достарды табуы және өмір сүруі керек. Боты B-12 көмегімен мысық қаланың құпиясын шешуі және өз үйіне қайта оралуы керек."
    },
    {
        id: 2,
        title: "The Witcher 3: Wild Hunt",
        price: 15000,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
        description: "The Witcher 3: Wild Hunt - бұл фэнтези әлеміндегі алып RPG ойыны. Сіз Геральт Ривиялық ретінде - мыстандарды ақымақтау жөніндегі кәсіпқой, қызғанышты жабайы аң аулаушылардың ізіне түсесіз.",
        category: "RPG",
        fullDescription: "The Witcher 3: Wild Hunt - бұл фэнтези әлеміндегі алып RPG ойыны. Сіз Геральт Ривиялық ретінде - мыстандарды ақымақтау жөніндегі кәсіпқой, қызғанышты жабайы аң аулаушылардың ізіне түсесіз. Ойын сізге ашық әлемді, бай сюжетті және есте қаларлық кейіпкерлерді ұсынады."
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        price: 18000,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        description: "Cyberpunk 2077 - бұл Найт-Ситидегі оқиғаларға орталықтанған ашық әлем RPG ойыны. Сіз нанымдылықтың шекарасын тереңірек зерттейтін нақтылықты таңдайсыз.",
        category: "RPG",
        fullDescription: "Cyberpunk 2077 - бұл Найт-Ситидегі оқиғаларға орталықтанған ашық әлем RPG ойыны. Сіз нанымдылықтың шекарасын тереңірек зерттейтін нақтылықты таңдайсыз. Ойында сіз V ретінде ойнайсыз - ерікті мерсернер, және Найт-Ситидегі ең қымбат имплантты іздейсіз, бұл сізге мәңгілік өмір береді."
    },
    {
        id: 4,
        title: "Counter-Strike 2",
        price: 0,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
        description: "Counter-Strike 2 - бұл Counter-Strike сериясының келесі буыны. Ең жақсы тәжірибелі командалық FPS ойыны, енді Source 2 қозғалтқышында.",
        category: "Шутер",
        fullDescription: "Counter-Strike 2 - бұл Counter-Strike сериясының келесі буыны. Ең жақсы тәжірибелі командалық FPS ойыны, енді Source 2 қозғалтқышында. Ойын екі команда арасындағы қарсыласуға негізделген - террористтер және арнайы күштер, олар әртүрлі миссияларды орындауы керек."
    },
    {
        id: 5,
        title: "Sally Face",
        price: 2500,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/541570/header.jpg",
        description: "Салли Фейс оқиғасына қосылыңыз - бұл қызықты және жұмбақ оқиғаларға толы квест ойыны. Салли Фейс - протез бетперде киген жас бала.",
        category: "Инди",
        fullDescription: "Салли Фейс оқиғасына қосылыңыз - бұл қызықты және жұмбақ оқиғаларға толы квест ойыны. Салли Фейс - протез бетперде киген жас бала. Ол отбасымен бірге жаңа пәтерге көшіп, жергілікті тұрғындардың құпияларын ашады."
    },
    {
        id: 6,
        title: "Resident Evil 4",
        price: 14000,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
        description: "Resident Evil 4 - бұл классикалық хоррор ойынының толық ремейкі. Леон С. Кеннеди Еуропаның сырттай қорғалған ауылына жіберіледі.",
        category: "Хоррор",
        fullDescription: "Resident Evil 4 - бұл классикалық хоррор ойынының толық ремейкі. Леон С. Кеннеди Еуропаның сырттай қорғалған ауылына жіберіледі, онда президенттің ұлы қашып қалуда. Бірақ ол тез арада тұрғындарды басып алған сыртқы күштерді табады."
    },
    {
        id: 7,
        title: "Grand Theft Auto V",
        price: 15000,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
        description: "Лос-Сантос және Блэйн County аймағындағы үш түрлі қылмыскердің әңгімесі. Олар өмірлерін сақтап қалу үшін тәуекелді шабуылдар жасауы керек.",
        category: "Экшен",
        fullDescription: "Grand Theft Auto V - бұл Лос-Сантос және Блэйн County аймағындағы үш түрлі қылмыскердің әңгімесі. Майкл, Тревор және Франклин өмірлерін сақтап қалу үшін тәуекелді шабуылдар жасауы керек. Ойын ашық әлемді, көптеген қызықты миссияларды және әртүрлі белсенділіктерді ұсынады."
    },
    {
        id: 8,
        title: "Stardew Valley",
        price: 2500,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
        description: "Сіз Stardew Valley-ге табысқа жеткен ферманы мұраға алдыңыз. Ескі құралдар мен бірнеше тиынмен, сіз жаңа өмірге жолға шықтыңыз.",
        category: "Симулятор",
        fullDescription: "Сіз Stardew Valley-ге табысқа жеткен ферманы мұраға алдыңыз. Ескі құралдар мен бірнеше тиынмен, сіз жаңа өмірге жолға шықтыңыз. Ферманы қалай басқару керектігін үйреніңіз, егін егіңіз, мал өсіріңіз, қауымдастыққа қосылыңыз және Stardew Valley-дің барлық құпияларын ашыңыз."
    },
    {
        id: 9,
        title: "Hollow Knight",
        price: 4100,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
        description: "Hollow Knight - бұл 2D классикалық экшен-приключение ойыны. Құлап қалған патшалықтың құпияларын ашыңыз! Жоғалған қалаларға саяхат жасаңыз.",
        category: "Инди",
        fullDescription: "Hollow Knight - бұл 2D классикалық экшен-приключение ойыны. Құлап қалған патшалықтың құпияларын ашыңыз! Жоғалған қалаларға саяхат жасаңыз, күштерді жеңіңіз, ожауыз жарақаттарды түзетіңіз және ожауыз жарақаттармен күресіңіз."
    },
    {
        id: 10,
        title: "Minecraft",
        price: 15000,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1672970/header.jpg",
        description: "Minecraft - бұл блоктармен құрылған шексіз әлемде ойнайтын шығармашылық ойын. Құрылыс жасаңыз, зерттеңіз, шайқасыңыз және өмір сүріңіз!",
        category: "Песочница",
        fullDescription: "Minecraft - бұл блоктармен құрылған шексіз әлемде ойнайтын шығармашылық ойын. Құрылыс жасаңыз, зерттеңіз, шайқасыңыз және өмір сүріңіз! Ойында сіз шексіз мүмкіндіктерге ие боласыз - қалалар салу, машиналар жасау, құпияларды ашу және керемет әлемдерді зерттеу."
    }
];

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const paymentModal = document.getElementById('paymentModal');
const modalGameTitle = document.getElementById('modalGameTitle');
const modalGameImage = document.getElementById('modalGameImage');
const modalGameDescription = document.getElementById('modalGameDescription');
const closeModal = document.querySelector('.close-modal');
const payButton = document.getElementById('payButton');
const avatar = document.getElementById('avatar');
const themeButtons = document.querySelectorAll('.theme-btn');
const balanceElement = document.querySelector('.balance');
const cartButton = document.querySelector('.cart-button');

// User data
let userData = {
    balance: 200000,
    avatar: "https://via.placeholder.com/40/2a475e/66c0f4?text=AV",
    purchasedGames: [],
    theme: "#1b2838"
};

// Cart functionality
let shoppingCart = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    renderGames();
    updateBalanceDisplay();
    initSearch();
    initFilters();
    updateCartCounter();
    applySavedTheme();
});

// Render games with error handling for images
function renderGames(filteredGames = games) {
    gamesGrid.innerHTML = '';
    
    if (filteredGames.length === 0) {
        gamesGrid.innerHTML = '<div class="no-games">Ойындар табылмады</div>';
        return;
    }

    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-image" onerror="this.src='https://via.placeholder.com/300x150/2a475e/66c0f4?text=${encodeURIComponent(game.title)}'">
            <div class="game-info">
                <div class="game-title">${game.title}</div>
                <div class="game-category">${game.category}</div>
                <div class="game-description">${game.description}</div>
                <div class="game-price">${game.price === 0 ? 'Тегін' : game.price + ' ₸'}</div>
                <button class="add-to-cart-btn" data-id="${game.id}">Себетке қосу</button>
            </div>
        `;
        gameCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                openGameModal(game);
            }
        });
        gamesGrid.appendChild(gameCard);
    });

    // Add event listeners to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

// Add to cart function
function addToCart(e) {
    e.stopPropagation();
    const gameId = parseInt(e.target.getAttribute('data-id'));
    const game = games.find(g => g.id === gameId);
    
    if (game) {
        const existingItem = shoppingCart.find(item => item.id === gameId);
        if (!existingItem) {
            shoppingCart.push(game);
            showNotification(`${game.title} себетке қосылды!`);
            updateCartCounter();
        } else {
            showNotification('Бұл ойын себетте бар!');
        }
    }
}

// Update cart counter
function updateCartCounter() {
    let cartCounter = document.querySelector('.cart-counter');
    if (!cartCounter) {
        const avatarContainer = document.querySelector('.avatar-container');
        cartCounter = document.createElement('div');
        cartCounter.className = 'cart-counter';
        avatarContainer.appendChild(cartCounter);
    }
    
    if (shoppingCart.length > 0) {
        cartCounter.textContent = shoppingCart.length;
        cartCounter.style.display = 'flex';
    } else {
        cartCounter.style.display = 'none';
    }
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Open game modal
function openGameModal(game) {
    modalGameTitle.textContent = game.title;
    modalGameImage.src = game.image;
    modalGameImage.onerror = function() {
        this.src = `https://via.placeholder.com/500x250/2a475e/66c0f4?text=${encodeURIComponent(game.title)}`;
    };
    modalGameDescription.textContent = game.fullDescription;
    modalGameDescription.className = 'game-description-full';
    
    // Update payment button text based on price
    const payBtn = document.getElementById('payButton');
    if (game.price === 0) {
        payBtn.textContent = 'Тегін жүктеу';
        payBtn.style.backgroundColor = '#66c0f4';
    } else {
        payBtn.textContent = `${game.price} ₸ төлеу`;
        payBtn.style.backgroundColor = '#5c7e10';
    }
    
    payButton.setAttribute('data-game-id', game.id);
    paymentModal.style.display = 'flex';
}

// Close modal
closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === paymentModal) {
        paymentModal.style.display = 'none';
    }
});

// Pay button click
payButton.addEventListener('click', () => {
    const gameId = parseInt(payButton.getAttribute('data-game-id'));
    const game = games.find(g => g.id === gameId);
    
    if (!game) return;
    
    if (game.price === 0) {
        // Free game
        completePurchase(game);
    } else {
        // Paid game - validate form
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardName = document.getElementById('cardName').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        
        if (validatePaymentForm(cardNumber, cardName, expiryDate, cvv)) {
            if (userData.balance >= game.price) {
                completePurchase(game);
            } else {
                alert('Ақшаңыз жеткіліксіз! Сізде ' + userData.balance + ' ₸ бар, ал ойын ' + game.price + ' ₸ тұрады.');
            }
        } else {
            alert('Барлық өрістерді дұрыс толтырыңыз!\n\nКарта нөмірі: 16 сан\nАты: Толық аты\nМерзімі: АА/ЖЖ форматында\nCVV: 3 немесе 4 сан');
        }
    }
});

// Validate payment form
function validatePaymentForm(cardNumber, cardName, expiryDate, cvv) {
    const cardRegex = /^\d{16}$/;
    const expiryRegex = /^\d{2}\/\d{2}$/;
    const cvvRegex = /^\d{3,4}$/;
    
    return cardRegex.test(cardNumber) &&
           cardName.trim().length > 0 &&
           expiryRegex.test(expiryDate) &&
           cvvRegex.test(cvv);
}

// Complete purchase
function completePurchase(game) {
    if (game.price > 0) {
        userData.balance -= game.price;
        updateBalanceDisplay();
    }
    
    if (!userData.purchasedGames.includes(game.id)) {
        userData.purchasedGames.push(game.id);
    }
    
    // Remove from cart if exists
    const cartIndex = shoppingCart.findIndex(item => item.id === game.id);
    if (cartIndex > -1) {
        shoppingCart.splice(cartIndex, 1);
        updateCartCounter();
    }
    
    saveUserData();
    
    showNotification(`Рақмет! "${game.title}" сәтті сатып алынды!`);
    paymentModal.style.display = 'none';
    
    // Clear form
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardName').value = '';
    document.getElementById('expiryDate').value = '';
    document.getElementById('cvv').value = '';
}

// Update balance display
function updateBalanceDisplay() {
    balanceElement.textContent = `Баланс: ${userData.balance} ₸`;
}

// Change avatar
avatar.addEventListener('click', () => {
    const newAvatar = prompt('Жаңа аватардың URL мекенжайын енгізіңіз:', 'https://via.placeholder.com/40/2a475e/66c0f4?text=AV');
    if (newAvatar) {
        avatar.src = newAvatar;
        userData.avatar = newAvatar;
        saveUserData();
    }
});

// Change theme
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        document.body.style.backgroundColor = theme;
        userData.theme = theme;
        saveUserData();
    });
});

// Apply saved theme
function applySavedTheme() {
    if (userData.theme) {
        document.body.style.backgroundColor = userData.theme;
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);
}

// Perform search
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    
    renderGames(filteredGames);
}

// Filter functionality
function initFilters() {
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
}

// Apply filters
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const price = document.getElementById('priceFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredGames = games.filter(game => {
        const matchesCategory = category === 'all' || game.category === category;
        const matchesSearch = searchTerm === '' || 
            game.title.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm);
        
        let matchesPrice = true;
        if (price !== 'all') {
            switch (price) {
                case 'free':
                    matchesPrice = game.price === 0;
                    break;
                case 'under2000':
                    matchesPrice = game.price > 0 && game.price < 2000;
                    break;
                case '2000-5000':
                    matchesPrice = game.price >= 2000 && game.price <= 5000;
                    break;
                case 'over5000':
                    matchesPrice = game.price > 5000;
                    break;
            }
        }
        
        return matchesCategory && matchesPrice && matchesSearch;
    });
    
    renderGames(filteredGames);
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('gameStoreUserData', JSON.stringify(userData));
}

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('gameStoreUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
        avatar.src = userData.avatar;
        updateBalanceDisplay();
    }
}

// View cart
cartButton.addEventListener('click', viewCart);

function viewCart() {
    if (shoppingCart.length === 0) {
        alert('Себет бос!');
        return;
    }
    
    let cartMessage = 'Себеттегі ойындар:\n\n';
    let totalPrice = 0;
    
    shoppingCart.forEach((game, index) => {
        cartMessage += `${index + 1}. ${game.title}: ${game.price === 0 ? 'Тегін' : game.price + ' ₸'}\n`;
        totalPrice += game.price;
    });
    
    cartMessage += `\nЖалпы бағасы: ${totalPrice} ₸`;
    cartMessage += `\nСіздің балансыңыз: ${userData.balance} ₸`;
    
    if (confirm(cartMessage + '\n\nБарлығын сатып алу керек пе?')) {
        if (userData.balance >= totalPrice) {
            shoppingCart.forEach(game => {
                if (!userData.purchasedGames.includes(game.id)) {
                    userData.purchasedGames.push(game.id);
                }
            });
            userData.balance -= totalPrice;
            shoppingCart = [];
            updateCartCounter();
            updateBalanceDisplay();
            saveUserData();
            showNotification('Барлық ойындар сәтті сатып алынды!');
        } else {
            const needed = totalPrice - userData.balance;
            alert(`Ақшаңыз жеткіліксіз! Сізге тағы ${needed} ₸ керек.`);
        }
    }
}

// Format card number input
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }
    
    e.target.value = formattedValue;
});

// Format expiry date input
document.getElementById('expiryDate').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
});

// Handle image errors globally
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        if (e.target.classList.contains('game-image')) {
            const gameTitle = e.target.alt || 'Game Image';
            e.target.src = `https://via.placeholder.com/300x150/2a475e/66c0f4?text=${encodeURIComponent(gameTitle)}`;
        } else if (e.target.id === 'avatar') {
            e.target.src = 'https://via.placeholder.com/40/2a475e/66c0f4?text=AV';
        }
    }
}, true);

// Debug function to check image loading
function checkImages() {
    console.log('🖼️ Checking images...');
    games.forEach(game => {
        const img = new Image();
        img.onload = function() {
            console.log(`✅ ${game.title} loaded successfully`);
        };
        img.onerror = function() {
            console.log(`❌ ${game.title} failed to load: ${game.image}`);
        };
        img.src = game.image;
    });
}

// Check images after page load
setTimeout(checkImages, 1000);