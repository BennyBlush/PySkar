// 1. БАЗА ТОВАРОВ (Сюда добавляй новые)
const products = [
    {
        id: 1
        name: "Сигнал охотника (пачка)",
        desc: "15 сигнальных патронов. Яркая вспышка (1 млн кд) и мощный хлопок (120 дБ). Высота подъема до 50 м.",
        price: "1500 ₽",
        img: "img/signal.jpg"
    },
    {
        id: 2
        name: "Гром (пачка)",
        desc: "15 звуковых патронов. Звук до 160 дБ, искры и вспышка до 2.5 м. Для защиты от животных.",
        price: "1300 ₽",
        img: "img/grom.jpg"
    },
    {
        id: 3
        name: "Сигнал охотника (1 шт)",
        desc: "Одиночный резьбовой патрон. Время горения 3-5 сек, высота сигнала до 40 м.",
        price: "150 ₽",
        img: "img/signal.jpg"
    }
    {
        id: 4
        name: "Гром (1 шт)",
        desc: "Одиночный звуковой патрон. Громкий хлопок, искры до 30 см. Эффективно отпугивает.",
        price: "130 ₽",
        img: "img/grom.jpg"
    }
    {
        id: 5
        name: "ПУ-1",
        desc: "Одноствольное пусковое устройство из пластика. Компактное, легкое.",
        price: "300 ₽",
        img: "img/pu1.jpg"
    }
    {
        id: 6
        name: "ПУ-2",
        desc: "Спаренное пусковое устройство. Два патрона в обойме. Удобно для быстрого повторного выстрела.",
        price: "600 ₽",
        img: "img/pu2.jpg"
    }
    {
        id: 7
        name: "ПУ-3",
        desc: "Трехзарядный сигнальный пистолет. Имеется предохранитель.",
        price: "2000 ₽",
        img: "img/pu3.jpg"
    }
];

let cart = [];

// 2. ФУНКЦИЯ ОТРИСОВКИ (Render)
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
            <p>${product.description}</p>
            <button class="add-btn" onclick="addToCart('${product.name}')">В корзину</button>
        </div>
    `).join('');
}

// 3. ДОБАВЛЕНИЕ В КОРЗИНУ
function addToCart(name) {
    cart.push(name);
    document.getElementById('cart-count').innerText = cart.length;

    // Показ уведомления (0.8 сек)
    const toast = document.getElementById('toast');
    toast.innerText = `"${name}" добавлен в корзину`;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 800);
}

// 4. УПРАВЛЕНИЕ МОДАЛКОЙ
function toggleCart(show) {
    const modal = document.getElementById('modal');
    const list = document.getElementById('cart-list');
    const tgBtn = document.getElementById('tg-order-link');

    if (show) {
        modal.style.display = 'flex';
        if (cart.length > 0) {
            list.innerHTML = "<b>Вы выбрали:</b><br>" + cart.join(', ');
            tgBtn.style.display = 'block';
            
            // Формируем ссылку
            const message = `Здравствуйте! Хочу купить ${cart.join(', ')}`;
            tgBtn.href = `https://t.me/Benny_NFT?text=${encodeURIComponent(message)}`;
        } else {
            list.innerHTML = "Ваша корзина пуста";
            tgBtn.style.display = 'none';
        }
    } else {
        modal.style.display = 'none';
    }
}

// ЗАПУСК ПРИ ЗАГРУЗКЕ
document.addEventListener('DOMContentLoaded', renderProducts);
renderProducts();
