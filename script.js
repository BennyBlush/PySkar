// 1. БАЗА ТОВАРОВ (Сюда добавляй новые)
const products = [
    {
        name: "Сигнал охотника (пачка)",
        desc: "15 сигнальных патронов. Яркая вспышка (1 млн кд) и мощный хлопок (120 дБ). Высота подъема до 50 м.",
        price: "1500 ₽",
        img: "img/signal.jpg"
    },
    {
        name: "Гром (пачка)",
        desc: "15 звуковых патронов. Звук до 160 дБ, искры и вспышка до 2.5 м. Для защиты от животных.",
        price: "1300 ₽",
        img: "img/grom.jpg"
    },
    {
        name: "Сигнал охотника (1 шт)",
        desc: "Одиночный резьбовой патрон. Время горения 3-5 сек, высота сигнала до 40 м.",
        price: "150 ₽",
        img: "img/signal.jpg"
    }
      {
        name: "Гром (1 шт)",
        desc: "Одиночный звуковой патрон. Громкий хлопок, искры до 30 см. Эффективно отпугивает.",
        price: "130 ₽",
        img: "img/grom.jpg"
    }
    {
        name: "ПУ-1",
        desc: "Одноствольное пусковое устройство из пластика. Компактное, легкое.",
        price: "300 ₽",
        img: "img/pu1.jpg"
    }
    {
        name: "ПУ-2",
        desc: "Спаренное пусковое устройство. Два патрона в обойме. Удобно для быстрого повторного выстрела.",
        price: "600 ₽",
        img: "img/pu2.jpg"
    }
    {
        name: "ПУ-3",
        desc: "Трехзарядный сигнальный пистолет. Имеется предохранитель.",
        price: "2000 ₽",
        img: "img/pu3.jpg"
    }
];

let cart = [];

// 2. ОТРИСОВКА ТОВАРОВ
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    products.forEach((item, index) => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="price">${item.price}</div>
                <button class="add-btn" onclick="addToCart(${index})">В корзину</button>
            </div>
        `;
    });
}

// 3. ДОБАВЛЕНИЕ В КОРЗИНУ
function addToCart(index) {
    const item = products[index];
    cart.push(item.name);
    
    // Обновить счетчик
    document.getElementById('cart-count').innerText = cart.length;

    // Уведомление на 0.8 секунды
    const note = document.getElementById('notification');
    note.innerText = `"${item.name}" добавлен в корзину`;
    note.style.display = 'block';
    
    setTimeout(() => {
        note.style.display = 'none';
    }, 800);
}

// 4. КОРЗИНА
function openCart() {
    const modal = document.getElementById('cartModal');
    const list = document.getElementById('cart-items-list');
    const tgBtn = document.getElementById('tg-link');

    modal.style.display = 'flex';

    if (cart.length === 0) {
        list.innerHTML = "Корзина пуста";
        tgBtn.style.display = 'none';
    } else {
        list.innerHTML = "<b>Вы выбрали:</b><br>" + cart.join(', ');
        tgBtn.style.display = 'block';

        // Ссылка в Телеграм с текстом
        const message = `Здравствуйте! Хочу купить: ${cart.join(', ')}`;
        tgBtn.href = `https://t.me/Benny_NFT?text=${encodeURIComponent(message)}`;
    }
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Запуск при загрузке
renderProducts();
