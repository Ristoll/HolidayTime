const { createElement } = require("react");

function fetchHeader() {
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
}

function fetchFooter() {
    const container = document.getElementById("footer");
    if (!container) return;

    const footer = document.createElement("footer");

    const p = document.createElement("p");
    p.textContent = "© 2021 HolidayTime. All rights reserved.";
    p.style.fontStyle = "italic";
    
    footer.appendChild(p);
    container.appendChild(footer);
}

const cards_data = [
    {
        title: "Незвідана Бакота",
        description: "У Хмельницькій області розташований загублений край - Бакота. Мальовничий каньйон з давньою історією захоплює своїми просторами та незвичною атмосферою. Бджільництво, свіжий мед із польових трав, дотик до природи."
    },
    {
        title:"Полонини Карпат",
        description: "Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас."
    },
    {
        title: "Автентична Київщина",
        description: "Неподалік центра Києва розташувалось автентичне українське село на території однойменного села Пирогово. Дерев’яні млини, запашний хліб, приготовлений своїми руками, українські пісні та багато іншого чекає на вас уже зараз."
    },
    {
        title: "Нетипова Одещина",
        description: "В Одеській області знаходиться мальовниче містечко Вилкове. Його ще називають «українською Венецією». Вилкове - це містечко на воді, весь в каналах. Розташоване в місці, де зустрічаються річка Дунай і Чорне море. Люди пересуваються переважно човнами. Нетипове українське село не залишить Вас без вражень."
    }    
]

function createCard(card) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("booking-card");

    cardEl.innerHTML = `
        <div class="image-wrapper"></div>

        <div class="booking-info">
            <h2>${card.title}</h2>
            <hr>
            <div class="into-block">
                <p>${card.description}</p>
            </div>
        </div>

        <img src="resources/star-icon.svg" alt="star">
        <button><sup>Детальніше</sup></button>
    `;

    return cardEl;
}

function clearContainer(container) {
    container.innerHTML = "";
}

function showCards(cards) {
    const container = document.querySelector(".booking-cards-container");
    if (!container) return;

    clearContainer(container);

    cards.forEach(card => {
        const cardEl = createCard(card);
        container.appendChild(cardEl);
    });
}

function fetchTitle(text) {
    const container = document.getElementById("page-title");
    if (!container) return;

    const div = document.createElement("div");
    div.classList.add("page-title");

    const h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.fontStyle = "italic";

    div.appendChild(h1);
    container.appendChild(div);
}

function goToHouse() {
    fetchTitle('Бронювання будиночка в Карпатах');
    window.location.href = 'house.html';
}

showCards(cards_data);
fetchHeader();
fetchFooter();