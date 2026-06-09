// SkyBook Flight Booking Platform - Core JS Logic
// Persists database state in localStorage
// Feature: Booking enhancements implementation for Lab 13-14 (Git Flow & DevOps)

// Допоміжна функція для динамічного вирахування дат рейсів
const dPlus = (days, time) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0] + "T" + time;
};

// --- 1. Ініціалізація бази даних у localStorage ---
const INIT_FLIGHTS = [
    {
        id: "f1",
        flightNumber: "PS-101",
        airline: "Ukraine Airways",
        origin: "KBP",
        destination: "CDG",
        departureTime: dPlus(5, "14:00"),
        price: 3800,
        duration: 160,
        aircraftModel: "boeing737",
        bookedSeats: ["1A", "5B", "10F", "12C"]
    },
    {
        id: "f2",
        flightNumber: "PS-204",
        airline: "Ukraine Airways",
        origin: "KBP",
        destination: "WAW",
        departureTime: dPlus(6, "09:30"),
        price: 2400,
        duration: 90,
        aircraftModel: "boeing737",
        bookedSeats: ["1B", "2C", "8D", "9F", "14A"]
    },
    {
        id: "f3",
        flightNumber: "LO-762",
        airline: "LOT Polish",
        origin: "LWO",
        destination: "WAW",
        departureTime: dPlus(7, "18:15"),
        price: 2100,
        duration: 65,
        aircraftModel: "airbus320",
        bookedSeats: ["1A", "4C"]
    },
    {
        id: "f4",
        flightNumber: "LH-149",
        airline: "Lufthansa",
        origin: "KBP",
        destination: "FRA",
        departureTime: dPlus(8, "06:00"),
        price: 5200,
        duration: 150,
        aircraftModel: "boeing737",
        bookedSeats: ["1A", "1B", "2A", "2B", "6C"]
    },
    {
        id: "f5",
        flightNumber: "TK-451",
        airline: "Turkish Airlines",
        origin: "ODS",
        destination: "IST",
        departureTime: dPlus(9, "21:45"),
        price: 4300,
        duration: 110,
        aircraftModel: "airbus320",
        bookedSeats: ["2A", "10E", "11F"]
    },
    {
        id: "f6",
        flightNumber: "PS-102",
        airline: "Ukraine Airways",
        origin: "KBP",
        destination: "CDG",
        departureTime: dPlus(2, "11:15"),
        price: 4100,
        duration: 160,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f7",
        flightNumber: "TK-452",
        airline: "Turkish Airlines",
        origin: "HRK",
        destination: "IST",
        departureTime: dPlus(3, "15:20"),
        price: 4600,
        duration: 125,
        aircraftModel: "airbus320",
        bookedSeats: []
    },
    {
        id: "f8",
        flightNumber: "PS-561",
        airline: "Ukraine Airways",
        origin: "LWO",
        destination: "CDG",
        departureTime: dPlus(4, "10:30"),
        price: 4800,
        duration: 155,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f9",
        flightNumber: "LO-765",
        airline: "LOT Polish",
        origin: "DNK",
        destination: "WAW",
        departureTime: dPlus(5, "13:45"),
        price: 3100,
        duration: 85,
        aircraftModel: "airbus320",
        bookedSeats: []
    },
    {
        id: "f10",
        flightNumber: "PS-301",
        airline: "Ukraine Airways",
        origin: "KBP",
        destination: "LHR",
        departureTime: dPlus(6, "17:00"),
        price: 6100,
        duration: 210,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f11",
        flightNumber: "PS-401",
        airline: "Ukraine Airways",
        origin: "KBP",
        destination: "MAD",
        departureTime: dPlus(7, "07:15"),
        price: 5900,
        duration: 230,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f12",
        flightNumber: "W9-4451",
        airline: "Wizz Air",
        origin: "ODS",
        destination: "FCO",
        departureTime: dPlus(8, "12:00"),
        price: 3700,
        duration: 130,
        aircraftModel: "airbus320",
        bookedSeats: []
    },
    {
        id: "f13",
        flightNumber: "FR-3882",
        airline: "Ryanair",
        origin: "LWO",
        destination: "LHR",
        departureTime: dPlus(9, "14:50"),
        price: 5100,
        duration: 195,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f14",
        flightNumber: "OS-661",
        airline: "Austrian Airlines",
        origin: "KBP",
        destination: "VIE",
        departureTime: dPlus(1, "08:45"),
        price: 3400,
        duration: 120,
        aircraftModel: "airbus320",
        bookedSeats: []
    },
    {
        id: "f15",
        flightNumber: "W9-4402",
        airline: "Wizz Air",
        origin: "IEV",
        destination: "WAW",
        departureTime: dPlus(2, "16:30"),
        price: 2250,
        duration: 80,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f16",
        flightNumber: "LH-150",
        airline: "Lufthansa",
        origin: "DNK",
        destination: "FRA",
        departureTime: dPlus(3, "05:30"),
        price: 5800,
        duration: 175,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f17",
        flightNumber: "PS-409",
        airline: "Ukraine Airways",
        origin: "KBP",
        destination: "BCN",
        departureTime: dPlus(4, "13:20"),
        price: 5500,
        duration: 220,
        aircraftModel: "boeing737",
        bookedSeats: []
    },
    {
        id: "f18",
        flightNumber: "VY-8841",
        airline: "Vueling",
        origin: "ODS",
        destination: "BCN",
        departureTime: dPlus(5, "10:10"),
        price: 5200,
        duration: 205,
        aircraftModel: "airbus320",
        bookedSeats: []
    },
    {
        id: "f19",
        flightNumber: "QS-481",
        airline: "Smartwings",
        origin: "KBP",
        destination: "PRG",
        departureTime: dPlus(6, "19:00"),
        price: 3900,
        duration: 130,
        aircraftModel: "airbus320",
        bookedSeats: []
    },
    {
        id: "f20",
        flightNumber: "PS-235",
        airline: "Ukraine Airways",
        origin: "LWO",
        destination: "FCO",
        departureTime: dPlus(7, "09:00"),
        price: 3600,
        duration: 120,
        aircraftModel: "airbus320",
        bookedSeats: []
    }
];

const INIT_BOOKINGS = [
    {
        id: "b1",
        flightId: "f1",
        flightNumber: "PS-101",
        origin: "KBP",
        destination: "CDG",
        departureTime: dPlus(5, "14:00"),
        passengerFirstName: "Viktoriia",
        passengerLastName: "Kryvoruchko",
        passengerPassport: "FT123456",
        passengerEmail: "v.kryvoruchko@skybook.ua",
        seatNumber: "4A",
        status: "PAID",
        totalPrice: 5700, // Business class seat
        pnr: "SB9Y82",
        bookingDate: "2026-06-07T10:15:00Z"
    },
    {
        id: "b2",
        flightId: "f2",
        flightNumber: "PS-204",
        origin: "KBP",
        destination: "WAW",
        departureTime: dPlus(6, "09:30"),
        passengerFirstName: "Viktoriia",
        passengerLastName: "Kryvoruchko",
        passengerPassport: "FT123456",
        passengerEmail: "v.kryvoruchko@skybook.ua",
        seatNumber: "10B",
        status: "PAID",
        totalPrice: 2400,
        pnr: "SB1D56",
        bookingDate: "2026-06-06T14:20:00Z"
    }
];

const INIT_BLACKLIST = [
    { type: "Паспорт", id: "FT111111", reason: "Підозра на фрод у 2025" },
    { type: "Карта", id: "4441 1144 5555 1111", reason: "Вкрадена картка" }
];

const INIT_TRANSACTIONS = [
    { id: "tx_101", bookingId: "b1", amount: 5700, fraudScore: 15, status: "APPROVED", timestamp: "2026-06-07T10:14:55Z" },
    { id: "tx_102", bookingId: "b2", amount: 2400, fraudScore: 22, status: "APPROVED", timestamp: "2026-06-06T14:19:50Z" }
];

// URL-адреса єдиної хмарної бази даних (KVdb.io)
const DB_BLOB_URL = "https://kvdb.io/797Lb9grTLEF1nocaTgepi/db";

// Завантаження/Ініціалізація даних з localStorage (як локальний кеш)
function getDbTable(tableName, fallbackData) {
    if (tableName === "skybook_flights") {
        const stored = localStorage.getItem(tableName);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed.length <= 5) {
                    localStorage.setItem(tableName, JSON.stringify(fallbackData));
                    return fallbackData;
                }
            } catch (e) {
                // помилка парсингу, переписуємо
            }
        }
    }
    if (!localStorage.getItem(tableName)) {
        localStorage.setItem(tableName, JSON.stringify(fallbackData));
    }
    return JSON.parse(localStorage.getItem(tableName));
}

let flights = getDbTable("skybook_flights", INIT_FLIGHTS);
let bookings = getDbTable("skybook_bookings", INIT_BOOKINGS);
let blacklist = getDbTable("skybook_blacklist", INIT_BLACKLIST);
let transactions = getDbTable("skybook_transactions", INIT_TRANSACTIONS);
let fraudThreshold = parseInt(localStorage.getItem("skybook_fraud_threshold") || "75");

// Ініціалізація користувачів (база даних користувачів)
const INIT_USERS = [
    {
        email: "v.kryvoruchko@skybook.ua",
        password: "pass123",
        firstName: "Viktoriia",
        lastName: "Kryvoruchko",
        passport: "FT123456",
        role: "passenger",
        status: "Gold"
    },
    {
        email: "admin@skybook.ua",
        password: "admin123",
        firstName: "Oleksandr",
        lastName: "Admin",
        passport: "AD999999",
        role: "admin",
        status: "Staff"
    },
    {
        email: "support@skybook.ua",
        password: "123",
        firstName: "Taras",
        lastName: "Operator",
        passport: "OP111111",
        role: "operator",
        status: "Staff"
    },
    {
        email: "security@skybook.ua",
        password: "123",
        firstName: "Ivan",
        lastName: "Security",
        passport: "SC222222",
        role: "security",
        status: "Staff"
    }
];
let users = getDbTable("skybook_users", INIT_USERS);

// Переконуємося, що нові користувачі є в списку, навіть якщо таблиця вже була ініціалізована в localStorage
const requiredUsers = [
    {
        email: "support@skybook.ua",
        password: "123",
        firstName: "Taras",
        lastName: "Operator",
        passport: "OP111111",
        role: "operator",
        status: "Staff"
    },
    {
        email: "security@skybook.ua",
        password: "123",
        firstName: "Ivan",
        lastName: "Security",
        passport: "SC222222",
        role: "security",
        status: "Staff"
    }
];

let usersUpdated = false;
requiredUsers.forEach(reqU => {
    if (!users.some(u => u.email === reqU.email)) {
        users.push(reqU);
        usersUpdated = true;
    }
});
if (usersUpdated) {
    localStorage.setItem("skybook_users", JSON.stringify(users));
}

// Асинхронне збереження всієї бази даних у хмару
async function saveFullDatabaseToCloud() {
    const database = {
        users,
        flights,
        bookings,
        blacklist,
        transactions
    };
    try {
        const response = await fetch(DB_BLOB_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(database)
        });
        if (!response.ok) throw new Error("Cloud DB PUT failed");
    } catch (err) {
        console.error("Помилка синхронізації бази даних з хмарою:", err);
    }
}

function saveDbTable(tableName, data) {
    if (tableName === "skybook_users") users = data;
    else if (tableName === "skybook_flights") flights = data;
    else if (tableName === "skybook_bookings") bookings = data;
    else if (tableName === "skybook_blacklist") blacklist = data;
    else if (tableName === "skybook_transactions") transactions = data;

    localStorage.setItem(tableName, JSON.stringify(data));
    saveFullDatabaseToCloud();
}

// Завантаження найсвіжіших даних із хмари при старті
async function loadDatabaseFromCloud() {
    try {
        const response = await fetch(DB_BLOB_URL);
        if (!response.ok) throw new Error("Cloud DB GET failed");
        const cloudDb = await response.json();
        
        if (cloudDb && cloudDb.users && cloudDb.flights && cloudDb.bookings && cloudDb.transactions) {
            users = cloudDb.users;
            flights = cloudDb.flights;
            bookings = cloudDb.bookings;
            transactions = cloudDb.transactions;
            if (cloudDb.blacklist) blacklist = cloudDb.blacklist;
            
            // Переконуємося, що нові користувачі є в списку, навіть після завантаження з хмари
            let cloudUsersUpdated = false;
            requiredUsers.forEach(reqU => {
                if (!users.some(u => u.email.toLowerCase() === reqU.email.toLowerCase())) {
                    users.push(reqU);
                    cloudUsersUpdated = true;
                }
            });
            
            localStorage.setItem("skybook_users", JSON.stringify(users));
            localStorage.setItem("skybook_flights", JSON.stringify(flights));
            localStorage.setItem("skybook_bookings", JSON.stringify(bookings));
            localStorage.setItem("skybook_transactions", JSON.stringify(transactions));
            localStorage.setItem("skybook_blacklist", JSON.stringify(blacklist));
            
            if (cloudUsersUpdated) {
                saveFullDatabaseToCloud();
            }
            
            // Якщо сесія активна, оновлюємо поточного користувача за поштою (на випадок зміни паролю/ролі)
            if (currentUser) {
                const refreshedUser = users.find(u => u.email.toLowerCase() === currentUser.email.toLowerCase());
                if (refreshedUser) {
                    currentUser = refreshedUser;
                    localStorage.setItem("skybook_current_user", JSON.stringify(currentUser));
                }
            }
            
            updateAuthUI();
            
            // Оновлюємо поточне представлення вкладки, якщо потрібно
            const activeTabButton = document.querySelector(".nav-menu li.active button");
            if (activeTabButton) {
                const targetViewId = activeTabButton.getAttribute("aria-controls");
                if (targetViewId === "view-admin") {
                    renderAdminDashboard();
                } else if (targetViewId === "view-dashboard") {
                    renderPassengerDashboard();
                }
            }
        }
    } catch (err) {
        console.warn("Не вдалося завантажити базу даних з хмари, використовується локальний кеш:", err);
    }
}

loadDatabaseFromCloud();

// --- 2. Системний стан (State) ---
// Гарантуємо, що при кожному новому відкритті вкладки/сесії користувач стартує як незареєстрований гість
if (!sessionStorage.getItem("skybook_session_active")) {
    localStorage.removeItem("skybook_current_user");
    sessionStorage.setItem("skybook_session_active", "true");
}

let currentUser = null;
const storedUser = localStorage.getItem("skybook_current_user");
if (storedUser) {
    currentUser = JSON.parse(storedUser);
}

let currentSearch = { origin: "", destination: "", date: "", class: "ECONOMY" };
let activeBookingSession = {
    selectedFlight: null,
    selectedSeat: null,
    seatClass: "ECONOMY",
    price: 0,
    passengerDetails: null
};

// --- 3. Навігація / Маршрутизатор SPA (Tabs Router) ---
const tabs = document.querySelectorAll(".nav-menu button");
const views = document.querySelectorAll(".tab-view");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetViewId = tab.getAttribute("aria-controls");
        switchActiveTab(targetViewId);
    });
});

// --- 4. Тост-сповіщення (Notifications) ---
function showNotification(message, type = "success") {
    const container = document.getElementById("notif-container");
    const toast = document.createElement("div");
    toast.className = `notification-toast ${type}`;
    
    let icon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
    `;
    if (type === "warning") {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
        `;
    } else if (type === "danger") {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>
        `;
    }

    toast.innerHTML = `
        ${icon}
        <div style="font-size: 13px; font-weight: 600;">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Автоматичне видалення через 4 секунди
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px) scale(0.9)";
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// --- 5. Пошук рейсів (Пасажир) ---
const searchForm = document.getElementById("flight-search-form");
const flightsListTarget = document.getElementById("flights-list-target");
const sortSelector = document.getElementById("sort-selector");

// Встановлення мінімальної та стандартної дати пошуку (сьогодні)
const dateInput = document.getElementById("search-date");
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;
dateInput.value = new Date(Date.now() + 86400000 * 5).toISOString().split("T")[0]; // +5 днів як стандарт

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearch.origin = document.getElementById("search-origin").value;
    currentSearch.destination = document.getElementById("search-destination").value;
    currentSearch.date = document.getElementById("search-date").value;
    currentSearch.class = document.getElementById("search-class").value;
    
    if (currentSearch.origin === currentSearch.destination) {
        showNotification("Аеропорт відправлення та прибуття мають бути різними!", "warning");
        return;
    }
    
    renderFlights();
});

sortSelector.addEventListener("change", () => {
    renderFlights();
});

function renderFlights() {
    flightsListTarget.innerHTML = "";
    
    // Фільтруємо рейси за напрямком
    let filtered = flights.filter(f => f.origin === currentSearch.origin && f.destination === currentSearch.destination);
    
    if (filtered.length === 0) {
        flightsListTarget.innerHTML = `
            <div class="glass-card" style="text-align: center; padding: 40px 20px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-muted); margin-bottom: 15px;"><path d="M22 2 15 22 11 13 2 9Z"/><path d="M22 2 11 13"/></svg>
                <h3>Рейсів не знайдено</h3>
                <p style="color: var(--text-secondary); margin-top: 8px;">Немає запланованих рейсів за цим маршрутом. Спробуйте змінити міста або додати рейс в панелі адміна.</p>
            </div>
        `;
        return;
    }

    // Сортування рейсів
    const sortVal = sortSelector.value;
    if (sortVal === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === "duration") {
        filtered.sort((a, b) => a.duration - b.duration);
    }

    filtered.forEach(flight => {
        const depDate = new Date(flight.departureTime);
        const formattedDate = depDate.toLocaleDateString("uk-UA", { day: "numeric", month: "long" });
        const formattedTime = depDate.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });
        
        // Розраховуємо час прибуття
        const arrDate = new Date(depDate.getTime() + flight.duration * 60000);
        const formattedArrTime = arrDate.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });
        
        const cardPrice = currentSearch.class === "BUSINESS" ? Math.round(flight.price * 1.5) : flight.price;
        const totalSeats = flight.aircraftModel === "boeing737" ? 102 : 80;
        const freeSeatsCount = totalSeats - flight.bookedSeats.length;

        const card = document.createElement("div");
        card.className = "glass-card flight-card";
        card.innerHTML = `
            <div class="airline-info">
                <div class="airline-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 15 22 11 13 2 9Z"/><path d="M22 2 11 13"/></svg>
                </div>
                <div>
                    <h3 style="font-size: 16px;">${flight.airline}</h3>
                    <p style="font-size: 12px; color: var(--text-secondary);">${flight.flightNumber} • ${flight.aircraftModel === "boeing737" ? "Boeing 737" : "Airbus A320"}</p>
                </div>
            </div>
            
            <div class="flight-timeline">
                <div class="time-node">
                    <h3>${formattedTime}</h3>
                    <p>${flight.origin}</p>
                </div>
                <div class="timeline-path">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 15 22 11 13 2 9Z"/><path d="M22 2 11 13"/></svg>
                    <div class="timeline-line"></div>
                    <span class="timeline-duration">${Math.floor(flight.duration / 60)}г ${flight.duration % 60}хв</span>
                </div>
                <div class="time-node">
                    <h3>${formattedArrTime}</h3>
                    <p>${flight.destination}</p>
                </div>
            </div>

            <div class="flight-price">
                <h2>${cardPrice.toLocaleString()} грн</h2>
                <p>${currentSearch.class === "BUSINESS" ? "Бізнес клас" : "Економ клас"}</p>
                <span style="font-size: 11px; color: ${freeSeatsCount < 10 ? 'var(--accent-rose)' : 'var(--text-muted)'}; font-weight:600;">
                    Вільних місць: ${freeSeatsCount}
                </span>
            </div>

            <div>
                <button type="button" class="btn btn-primary" onclick="openSeatSelector('${flight.id}')">
                    Вибрати місце
                </button>
            </div>
        `;
        flightsListTarget.appendChild(card);
    });
}

// --- 6. Інтерактивна схема літака та кабінет вибору (Passenger Booking) ---
const seatModal = document.getElementById("modal-seat-selector");
const seatingChartTarget = document.getElementById("seating-chart-target");
const selectedSeatSpan = document.getElementById("sum-seat");
const summaryPriceSpan = document.getElementById("sum-price");
const routeSpan = document.getElementById("sum-route");
const datetimeSpan = document.getElementById("sum-datetime");

const closeSeatModalBtn = document.getElementById("btn-close-seat-modal");
const passengerForm = document.getElementById("passenger-info-form");

function openSeatSelector(flightId) {
    const flight = flights.find(f => f.id === flightId);
    if (!flight) return;

    activeBookingSession.selectedFlight = flight;
    activeBookingSession.selectedSeat = null;
    activeBookingSession.seatClass = currentSearch.class;
    activeBookingSession.price = 0;
    
    // Оновлення модального вікна текстовими даними
    document.getElementById("modal-seat-flight-num").innerText = flight.flightNumber;
    routeSpan.innerText = `${flight.origin} → ${flight.destination}`;
    
    const depDate = new Date(flight.departureTime);
    datetimeSpan.innerText = depDate.toLocaleString("uk-UA", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
    
    selectedSeatSpan.innerText = "Не вибрано";
    selectedSeatSpan.style.color = "var(--text-muted)";
    summaryPriceSpan.innerText = "0 грн";
    
    // Скидання форми та автозаповнення для авторизованого пасажира чи адміна
    passengerForm.reset();
    if (currentUser) {
        document.getElementById("pass-first-name").value = currentUser.firstName || "";
        document.getElementById("pass-last-name").value = currentUser.lastName || "";
        document.getElementById("pass-passport").value = currentUser.passport || "";
        document.getElementById("pass-email").value = currentUser.email || "";
    }

    // Генерація схеми літака
    generateSeatMap(flight);

    // Показуємо модал
    seatModal.classList.add("active");
}

closeSeatModalBtn.addEventListener("click", () => {
    seatModal.classList.remove("active");
});

function generateSeatMap(flight) {
    seatingChartTarget.innerHTML = "";
    
    const isBoeing = flight.aircraftModel === "boeing737";
    const totalRows = isBoeing ? 17 : 14; // 1-3 бізнес, решта економ
    
    // 1. Створюємо блок бізнес-класу
    const bizDivider = document.createElement("div");
    bizDivider.className = "cabin-divider business";
    seatingChartTarget.appendChild(bizDivider);
    
    for (let rowNum = 1; rowNum <= totalRows; rowNum++) {
        // Додаємо роздільник економ-класу перед 4 рядком
        if (rowNum === 4) {
            const econDivider = document.createElement("div");
            econDivider.className = "cabin-divider";
            seatingChartTarget.appendChild(econDivider);
        }
        
        const row = document.createElement("div");
        row.className = "seat-row";
        
        const rowLabel = document.createElement("span");
        rowLabel.className = "seat-row-num";
        rowLabel.innerText = rowNum;
        row.appendChild(rowLabel);
        
        const isBusinessRow = rowNum <= 3;
        
        if (isBusinessRow) {
            // Бізнес-клас: 2-2 розкладка (A, B --- C, D)
            const leftGroup = document.createElement("div");
            leftGroup.className = "seat-group";
            leftGroup.appendChild(createSeatButton(rowNum + "A", true, flight));
            leftGroup.appendChild(createSeatButton(rowNum + "B", true, flight));
            row.appendChild(leftGroup);
            
            const aisle = document.createElement("div");
            aisle.className = "aisle";
            row.appendChild(aisle);
            
            const rightGroup = document.createElement("div");
            rightGroup.className = "seat-group";
            rightGroup.appendChild(createSeatButton(rowNum + "C", true, flight));
            rightGroup.appendChild(createSeatButton(rowNum + "D", true, flight));
            row.appendChild(rightGroup);
        } else {
            // Економ-клас: 3-3 розкладка (A, B, C --- D, E, F)
            const leftGroup = document.createElement("div");
            leftGroup.className = "seat-group";
            leftGroup.appendChild(createSeatButton(rowNum + "A", false, flight));
            leftGroup.appendChild(createSeatButton(rowNum + "B", false, flight));
            leftGroup.appendChild(createSeatButton(rowNum + "C", false, flight));
            row.appendChild(leftGroup);
            
            const aisle = document.createElement("div");
            aisle.className = "aisle";
            row.appendChild(aisle);
            
            const rightGroup = document.createElement("div");
            rightGroup.className = "seat-group";
            rightGroup.appendChild(createSeatButton(rowNum + "D", false, flight));
            rightGroup.appendChild(createSeatButton(rowNum + "E", false, flight));
            rightGroup.appendChild(createSeatButton(rowNum + "F", false, flight));
            row.appendChild(rightGroup);
        }
        
        seatingChartTarget.appendChild(row);
    }
}

function createSeatButton(seatId, isBusiness, flight) {
    const seatBtn = document.createElement("button");
    seatBtn.type = "button";
    seatBtn.className = "seat" + (isBusiness ? " business" : "");
    seatBtn.innerText = seatId;
    
    const isOccupied = flight.bookedSeats.includes(seatId);
    if (isOccupied) {
        seatBtn.classList.add("occupied");
        seatBtn.setAttribute("disabled", "true");
    } else {
        seatBtn.addEventListener("click", () => {
            // Знімаємо вибір з інших
            document.querySelectorAll(".seating-chart .seat.selected").forEach(s => s.classList.remove("selected"));
            
            seatBtn.classList.add("selected");
            activeBookingSession.selectedSeat = seatId;
            activeBookingSession.seatClass = isBusiness ? "BUSINESS" : "ECONOMY";
            
            // Розрахунок ціни
            const basePrice = flight.price;
            activeBookingSession.price = isBusiness ? Math.round(basePrice * 1.5) : basePrice;
            
            // Оновлення UI
            selectedSeatSpan.innerText = `${seatId} (${isBusiness ? 'Бізнес' : 'Економ'})`;
            selectedSeatSpan.style.color = isBusiness ? "var(--accent-amber)" : "var(--primary)";
            summaryPriceSpan.innerText = `${activeBookingSession.price.toLocaleString()} грн`;
        });
    }
    
    return seatBtn;
}

// --- 7. Симуляція Onboarding через API Дія ---
const btnDiiaAuth = document.getElementById("btn-diia-auth");
const modalDiiaScan = document.getElementById("modal-diia-scan");
const btnCancelDiia = document.getElementById("btn-cancel-diia");

btnDiiaAuth.addEventListener("click", () => {
    modalDiiaScan.classList.add("active");
    
    // Імітація сканування FaceID в Дії (2.2 секунди)
    setTimeout(() => {
        if (!modalDiiaScan.classList.contains("active")) return; // скасовано
        
        modalDiiaScan.classList.remove("active");
        
        // Автозаповнення форми
        if (currentUser) {
            document.getElementById("pass-first-name").value = currentUser.firstName || "";
            document.getElementById("pass-last-name").value = currentUser.lastName || "";
            document.getElementById("pass-passport").value = currentUser.passport || "";
            document.getElementById("pass-email").value = currentUser.email || "";
        } else {
            // Для гостя вставляємо дефолтні дані
            document.getElementById("pass-first-name").value = "Дмитро";
            document.getElementById("pass-last-name").value = "Шевченко";
            document.getElementById("pass-passport").value = "ДІ987654";
            document.getElementById("pass-email").value = "d.shevchenko@diia.gov.ua";
        }
        
        showNotification("Дані паспорта успішно імпортовано через Дія API!", "success");
    }, 2200);
});

btnCancelDiia.addEventListener("click", () => {
    modalDiiaScan.classList.remove("active");
    showNotification("Авторизацію через Дія скасовано", "warning");
});

// --- 8. Оформлення пасажира та оплата (Payment Flow & Security check) ---
const paymentModal = document.getElementById("modal-payment");
const closePaymentModalBtn = document.getElementById("btn-close-payment-modal");
const paymentCardForm = document.getElementById("payment-card-form");
const processingState = document.getElementById("payment-processing-state");
const submitPaymentBtn = document.getElementById("btn-submit-payment");

passengerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeBookingSession.selectedSeat) {
        showNotification("Будь ласка, оберіть місце на схемі літака!", "warning");
        return;
    }
    
    activeBookingSession.passengerDetails = {
        firstName: document.getElementById("pass-first-name").value,
        lastName: document.getElementById("pass-last-name").value,
        passport: document.getElementById("pass-passport").value,
        email: document.getElementById("pass-email").value
    };
    
    // Закриваємо вибір місця і відкриваємо оплату
    seatModal.classList.remove("active");
    
    document.getElementById("payment-total-amount").innerText = `${activeBookingSession.price.toLocaleString()} грн`;
    paymentModal.classList.add("active");
    
    // Скидаємо стан форми оплати
    paymentCardForm.reset();
    paymentCardForm.style.display = "flex";
    processingState.style.display = "none";
});

closePaymentModalBtn.addEventListener("click", () => {
    paymentModal.classList.remove("active");
});

// Маска для введення номера карти (додавання пробілів)
document.getElementById("card-number").addEventListener("input", (e) => {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = value.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
        e.target.value = parts.join(' ');
    } else {
        e.target.value = value;
    }
});

// Маска для дати терміну дії карти MM/YY
document.getElementById("card-expiry").addEventListener("input", (e) => {
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (val.length >= 2) {
        e.target.value = val.substring(0, 2) + '/' + val.substring(2, 4);
    } else {
        e.target.value = val;
    }
});

paymentCardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const cardNumber = document.getElementById("card-number").value;
    const cardHolder = document.getElementById("card-holder").value;
    const passportNum = activeBookingSession.passengerDetails.passport;
    
    // Перехід до стану обробки
    paymentCardForm.style.display = "none";
    processingState.style.display = "flex";
    
    const statusText = document.getElementById("payment-status-message");
    const substatusText = document.getElementById("payment-substatus");
    
    // Крок 1: HTTPS Шифрування
    statusText.innerText = "Шифрування з'єднання...";
    substatusText.innerText = "Встановлення захищеного HTTPS каналу з шлюзом...";
    
    setTimeout(() => {
        // Крок 2: Черга транзакцій та Фрод-моніторинг
        statusText.innerText = "Аналіз безпеки транзакції...";
        substatusText.innerText = "Працює модуль фрод-моніторингу. Оцінка ризиків...";
        
        setTimeout(() => {
            // Розрахунок фрод-балу (Fraud Scoring)
            let fraudScore = Math.floor(Math.random() * 40) + 10; // дефолтний низький бал (10-50)
            
            // Якщо номер паспорта чи карти у чорному списку
            const isBlacklistedPassport = blacklist.some(b => b.type === "Паспорт" && b.id === passportNum);
            const isBlacklistedCard = blacklist.some(b => b.type === "Карта" && b.id === cardNumber);
            
            if (isBlacklistedPassport || isBlacklistedCard) {
                fraudScore = Math.floor(Math.random() * 15) + 85; // критичний фрод бал (85-99)
            }
            
            const isBlocked = fraudScore >= fraudThreshold;
            
            // Фіналізація операції
            if (isBlocked) {
                statusText.innerText = "Транзакцію відхилено!";
                substatusText.innerText = `Виявлено високий рівень ризику шахрайства (${fraudScore} балів). Операцію заблоковано.`;
                substatusText.style.color = "var(--accent-rose)";
                
                // Записуємо транзакцію в лог
                const txId = "tx_" + Math.random().toString(36).substring(2, 9);
                transactions.unshift({
                    id: txId,
                    bookingId: "n/a",
                    amount: activeBookingSession.price,
                    fraudScore: fraudScore,
                    status: "BLOCKED",
                    timestamp: new Date().toISOString()
                });
                saveDbTable("skybook_transactions", transactions);
                
                setTimeout(() => {
                    paymentModal.classList.remove("active");
                    showNotification(`Оплата скасована банком (Фрод-бал: ${fraudScore}). Картка заблокована в системі.`, "danger");
                }, 3000);
            } else {
                statusText.innerText = "Платіж авторизовано!";
                substatusText.innerText = "Транзакція підтверджена банком. Формування квитків...";
                
                // Генерація унікального бронювання
                const bookingId = "b_" + Math.random().toString(36).substring(2, 9);
                const pnrCode = "SB" + Math.random().toString(36).substring(2, 8).toUpperCase();
                const txId = "tx_" + Math.random().toString(36).substring(2, 9);
                
                const newBooking = {
                    id: bookingId,
                    flightId: activeBookingSession.selectedFlight.id,
                    flightNumber: activeBookingSession.selectedFlight.flightNumber,
                    origin: activeBookingSession.selectedFlight.origin,
                    destination: activeBookingSession.selectedFlight.destination,
                    departureTime: activeBookingSession.selectedFlight.departureTime,
                    passengerFirstName: activeBookingSession.passengerDetails.firstName,
                    passengerLastName: activeBookingSession.passengerDetails.lastName,
                    passengerPassport: activeBookingSession.passengerDetails.passport,
                    passengerEmail: activeBookingSession.passengerDetails.email,
                    seatNumber: activeBookingSession.selectedSeat,
                    status: "PAID",
                    totalPrice: activeBookingSession.price,
                    pnr: pnrCode,
                    bookingDate: new Date().toISOString()
                };
                
                // Зберігаємо бронювання
                bookings.unshift(newBooking);
                saveDbTable("skybook_bookings", bookings);
                
                // Оновлюємо заброньовані місця в польоті
                const flightIndex = flights.findIndex(f => f.id === activeBookingSession.selectedFlight.id);
                if (flightIndex !== -1) {
                    flights[flightIndex].bookedSeats.push(activeBookingSession.selectedSeat);
                    saveDbTable("skybook_flights", flights);
                }
                
                // Логуємо успішну транзакцію
                transactions.unshift({
                    id: txId,
                    bookingId: bookingId,
                    amount: activeBookingSession.price,
                    fraudScore: fraudScore,
                    status: "APPROVED",
                    timestamp: new Date().toISOString()
                });
                saveDbTable("skybook_transactions", transactions);
                
                setTimeout(() => {
                    paymentModal.classList.remove("active");
                    openTicketModal(newBooking);
                    showNotification("Оплата пройшла успішно! Квиток надіслано на email.", "success");
                }, 1500);
            }
        }, 1500);
    }, 1200);
});

// --- 9. Рендеринг посадочного талона (Ticket Modal View) ---
const ticketModal = document.getElementById("modal-ticket");
const closeTicketModalBtn = document.getElementById("btn-close-ticket-modal");
const closeTicketViewBtn = document.getElementById("btn-close-ticket-view");
const printTicketBtn = document.getElementById("btn-print-ticket");

function openTicketModal(booking) {
    document.getElementById("ticket-class-badge").innerText = booking.seatNumber.match(/[A-D]/) && parseInt(booking.seatNumber) <= 3 ? "БІЗНЕС" : "ЕКОНОМ";
    document.getElementById("ticket-class-badge").className = `badge ${booking.seatNumber.match(/[A-D]/) && parseInt(booking.seatNumber) <= 3 ? 'badge-warning' : 'badge-success'}`;
    
    document.getElementById("ticket-route").innerText = `${booking.origin} → ${booking.destination}`;
    
    const flightObj = flights.find(f => f.id === booking.flightId);
    document.getElementById("ticket-flight-company").innerText = `Рейс ${booking.flightNumber} • ${flightObj ? flightObj.airline : 'SkyBook Airways'}`;
    
    document.getElementById("ticket-pnr").innerText = `PNR: ${booking.pnr}`;
    document.getElementById("ticket-passenger-name").innerText = `${booking.passengerFirstName.toUpperCase()} ${booking.passengerLastName.toUpperCase()}`;
    document.getElementById("ticket-passenger-passport").innerText = booking.passengerPassport.toUpperCase();
    
    const depDate = new Date(booking.departureTime);
    document.getElementById("ticket-departure-time").innerText = depDate.toLocaleString("uk-UA", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
    
    document.getElementById("ticket-seat-number").innerText = booking.seatNumber;
    
    ticketModal.classList.add("active");
}

closeTicketModalBtn.addEventListener("click", () => ticketModal.classList.remove("active"));
closeTicketViewBtn.addEventListener("click", () => ticketModal.classList.remove("active"));

printTicketBtn.addEventListener("click", () => {
    window.print();
});

// --- 10. Кабінет пасажира (Dashboard) ---
const dashboardBookingsTarget = document.getElementById("dashboard-bookings-target");

function renderPassengerDashboard() {
    dashboardBookingsTarget.innerHTML = "";
    
    if (!currentUser) {
        dashboardBookingsTarget.innerHTML = `
            <div class="glass-card" style="text-align: center; padding: 30px;">
                <p style="color: var(--text-secondary);">Будь ласка, увійдіть в акаунт, щоб переглянути свої бронювання.</p>
            </div>
        `;
        return;
    }
    
    // Оновлення картки профілю у кабінеті
    const profileCardName = document.querySelector("#view-dashboard h2");
    const profileCardDetails = document.querySelector("#view-dashboard p");
    const profileCardAvatar = document.querySelector("#view-dashboard .airline-logo");
    
    if (profileCardName && profileCardDetails && profileCardAvatar) {
        profileCardName.innerText = `${currentUser.firstName} ${currentUser.lastName}`;
        const passportMask = currentUser.passport ? `**${currentUser.passport.slice(-4)}` : "не вказано";
        profileCardDetails.innerText = `Клієнт рівня ${currentUser.status || 'Standard'} • Паспорт: ${passportMask} • ${currentUser.email}`;
        profileCardAvatar.innerText = ((currentUser.firstName ? currentUser.firstName[0] : "") + (currentUser.lastName ? currentUser.lastName[0] : "")).toUpperCase();
    }
    
    // Фільтруємо бронювання по паспорту поточного користувача
    const userPassport = (currentUser.passport || "").toUpperCase();
    const myBookings = bookings.filter(b => b.passengerPassport && b.passengerPassport.toUpperCase() === userPassport);
    
    if (myBookings.length === 0) {
        dashboardBookingsTarget.innerHTML = `
            <div class="glass-card" style="text-align: center; padding: 30px;">
                <p style="color: var(--text-secondary);">У вас немає активних бронювань.</p>
            </div>
        `;
        return;
    }
    
    myBookings.forEach(booking => {
        const depDate = new Date(booking.departureTime);
        const formattedDate = depDate.toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" });
        const formattedTime = depDate.toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });
        
        const card = document.createElement("div");
        card.className = "glass-card";
        card.style.borderLeft = booking.status === "PAID" ? "4px solid var(--accent-emerald)" : "4px solid var(--text-muted)";
        
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px;">
                <div>
                    <span class="badge ${booking.status === 'PAID' ? 'badge-success' : 'badge-danger'}" style="margin-bottom: 8px;">
                        ${booking.status === 'PAID' ? 'Оплачено' : 'Скасовано'}
                    </span>
                    <h3 style="font-size: 18px;">${booking.origin} → ${booking.destination}</h3>
                    <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        Рейс ${booking.flightNumber} • Місце ${booking.seatNumber} • PNR: ${booking.pnr}
                    </p>
                    <p style="font-size: 12px; color: var(--text-secondary);">
                        Виліт: ${formattedDate} о ${formattedTime}
                    </p>
                </div>
                
                <div style="text-align: right; display: flex; flex-direction: column; gap: 10px;">
                    <span style="font-size: 18px; font-weight: 700; color: var(--primary);">${booking.totalPrice.toLocaleString()} грн</span>
                    <div style="display: flex; gap: 8px;">
                        ${booking.status === 'PAID' ? `
                            <button type="button" class="btn btn-secondary" onclick="viewTicketDirect('${booking.id}')" style="padding: 6px 12px; font-size: 12px;">
                                Посадочний
                            </button>
                            <button type="button" class="btn btn-danger" onclick="cancelBookingDirect('${booking.id}')" style="padding: 6px 12px; font-size: 12px;">
                                Скасувати
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        dashboardBookingsTarget.appendChild(card);
    });
}

function viewTicketDirect(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) openTicketModal(booking);
}

function cancelBookingDirect(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;
    
    // Розраховуємо суму до повернення (80% відповідно до лаб)
    const refundAmount = Math.round(booking.totalPrice * 0.8);
    const confirmCancel = confirm(`Ви дійсно бажаєте скасувати бронь ${booking.pnr}?\nДо повернення підлягає: ${refundAmount.toLocaleString()} грн (20% збір за скасування).`);
    
    if (confirmCancel) {
        // Оновлюємо статус бронювання
        booking.status = "CANCELED";
        saveDbTable("skybook_bookings", bookings);
        
        // Видаляємо місце з масиву зайнятих у польоті
        const flight = flights.find(f => f.id === booking.flightId);
        if (flight) {
            flight.bookedSeats = flight.bookedSeats.filter(s => s !== booking.seatNumber);
            saveDbTable("skybook_flights", flights);
        }
        
        // Додаємо подію скасування в транзакції
        transactions.unshift({
            id: "tx_" + Math.random().toString(36).substring(2, 9),
            bookingId: booking.id,
            amount: -refundAmount,
            fraudScore: 0,
            status: "REFUNDED",
            timestamp: new Date().toISOString()
        });
        saveDbTable("skybook_transactions", transactions);
        
        showNotification("Бронювання успішно скасовано. Кошти буде повернуто протягом 3 днів.", "success");
        renderPassengerDashboard();
    }
}

// --- 11. Панель адміністратора (Admin Panel) ---
const adminAddFlightForm = document.getElementById("admin-add-flight-form");
const adminBookingsTable = document.getElementById("admin-bookings-table-body");

// Встановлення мін дати для додавання нового рейсу в адмінці
const adminDateInput = document.getElementById("flight-departure");
adminDateInput.min = new Date().toISOString().substring(0, 16);

adminAddFlightForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const flightNum = document.getElementById("flight-number").value;
    const airline = document.getElementById("flight-airline").value;
    const origin = document.getElementById("flight-origin").value;
    const destination = document.getElementById("flight-destination").value;
    const depTime = document.getElementById("flight-departure").value;
    const price = parseInt(document.getElementById("flight-price").value);
    const aircraft = document.getElementById("flight-aircraft").value;
    const duration = parseInt(document.getElementById("flight-duration").value);
    
    if (origin === destination) {
        showNotification("Рейс не може здійснюватися в те саме місто!", "warning");
        return;
    }
    
    const newFlight = {
        id: "f_" + Math.random().toString(36).substring(2, 9),
        flightNumber: flightNum.toUpperCase(),
        airline: airline,
        origin: origin,
        destination: destination,
        departureTime: depTime,
        price: price,
        duration: duration,
        aircraftModel: aircraft,
        bookedSeats: []
    };
    
    flights.push(newFlight);
    saveDbTable("skybook_flights", flights);
    
    adminAddFlightForm.reset();
    showNotification(`Новий рейс ${newFlight.flightNumber} успішно зареєстровано в БД!`, "success");
    renderAdminDashboard();
});

function renderAdminDashboard() {
    // 1. Оновлення статистики
    const adminStatFlights = document.getElementById("admin-stat-flights");
    const adminStatBookings = document.getElementById("admin-stat-bookings");
    const adminStatRevenue = document.getElementById("admin-stat-revenue");
    const adminStatOccupancy = document.getElementById("admin-stat-occupancy");

    if (adminStatFlights) adminStatFlights.innerText = flights.length;
    if (adminStatBookings) adminStatBookings.innerText = bookings.length;
    
    // Рахуємо прибуток (APPROVED транзакції)
    const totalRev = transactions
        .filter(t => t.status === "APPROVED")
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalRefunded = transactions
        .filter(t => t.status === "REFUNDED")
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);
        
    if (adminStatRevenue) adminStatRevenue.innerText = `${(totalRev - totalRefunded).toLocaleString()} грн`;
    
    // Середнє заповнення
    let totalCap = 0;
    let totalBooked = 0;
    flights.forEach(f => {
        totalCap += f.aircraftModel === "boeing737" ? 102 : 80;
        totalBooked += f.bookedSeats.length;
    });
    const avgOcc = totalCap > 0 ? Math.round((totalBooked / totalCap) * 100) : 0;
    if (adminStatOccupancy) adminStatOccupancy.innerText = `${avgOcc}%`;

    // Керування видимістю секцій відповідно до ролі
    const addFlightSection = document.getElementById("admin-add-flight-section");
    const bookingsSection = document.getElementById("admin-bookings-section");
    const securitySection = document.getElementById("admin-security-section");
    const revenueCard = document.getElementById("admin-revenue-card");
    const splitLayout = document.querySelector("#view-admin .split-layout");
    const statsGrid = document.querySelector(".admin-stats-grid");

    if (currentUser.role === "admin") {
        if (addFlightSection) addFlightSection.classList.remove("hide");
        if (bookingsSection) bookingsSection.classList.add("hide");
        if (securitySection) securitySection.classList.add("hide");
        if (revenueCard) revenueCard.classList.remove("hide");
        if (splitLayout) {
            splitLayout.style.display = "block"; // Тільки одна картка
        }
        if (statsGrid) statsGrid.style.gridTemplateColumns = "";
    } else if (currentUser.role === "operator") {
        if (addFlightSection) addFlightSection.classList.add("hide");
        if (bookingsSection) bookingsSection.classList.remove("hide");
        if (securitySection) securitySection.classList.add("hide");
        if (revenueCard) revenueCard.classList.add("hide");
        if (splitLayout) {
            splitLayout.style.display = "block"; // Одинарна колонка
        }
        if (statsGrid) {
            statsGrid.style.gridTemplateColumns = window.innerWidth >= 992 ? "repeat(3, 1fr)" : "";
        }
    } else if (currentUser.role === "security") {
        if (addFlightSection) addFlightSection.classList.add("hide");
        if (bookingsSection) bookingsSection.classList.add("hide");
        if (securitySection) securitySection.classList.remove("hide");
        if (revenueCard) revenueCard.classList.add("hide");
        if (splitLayout) {
            splitLayout.style.display = "block"; // Одинарна колонка
        }
        if (statsGrid) {
            statsGrid.style.gridTemplateColumns = window.innerWidth >= 992 ? "repeat(3, 1fr)" : "";
        }
    }

    // 2. Рендеринг таблиці останніх бронювань (якщо видима)
    if (bookingsSection && !bookingsSection.classList.contains("hide")) {
        adminBookingsTable.innerHTML = "";
        if (bookings.length === 0) {
            adminBookingsTable.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">База даних порожня</td></tr>`;
        } else {
            bookings.forEach(b => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>
                        <span style="font-weight:600;">${b.flightNumber}</span><br>
                        <span style="font-size:11px; color:var(--text-secondary);">${b.passengerFirstName} ${b.passengerLastName}</span>
                    </td>
                    <td style="font-weight: 700; color: var(--primary);">${b.seatNumber}</td>
                    <td>
                        <span class="badge ${b.status === 'PAID' ? 'badge-success' : 'badge-danger'}">
                            ${b.status === 'PAID' ? 'Оплачено' : 'Скасовано'}
                        </span>
                    </td>
                    <td>
                        ${b.status === 'PAID' ? `
                            <button class="btn btn-secondary" onclick="adminCancelBooking('${b.id}')" style="padding: 4px 8px; font-size:11px;">
                                Анулювати
                            </button>
                        ` : '<span style="color:var(--text-muted); font-size:11px;">Неактивно</span>'}
                    </td>
                `;
                adminBookingsTable.appendChild(row);
            });
        }
    }

    // 3. Рендеринг монітора безпеки (якщо видимий)
    if (securitySection && !securitySection.classList.contains("hide")) {
        // Рендеринг повзунка
        const thresholdRange = document.getElementById("admin-threshold-range");
        const thresholdVal = document.getElementById("admin-threshold-val");
        if (thresholdRange && thresholdVal) {
            thresholdRange.value = fraudThreshold;
            thresholdVal.innerText = fraudThreshold + "%";
        }

        // Рендеринг транзакцій
        const transactionsTable = document.getElementById("admin-transactions-table-body");
        if (transactionsTable) {
            transactionsTable.innerHTML = "";
            if (transactions.length === 0) {
                transactionsTable.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Немає транзакцій</td></tr>`;
            } else {
                transactions.forEach(tx => {
                    const b = bookings.find(x => x.id === tx.bookingId);
                    const passengerName = b ? `${b.passengerFirstName} ${b.passengerLastName}` : "Гість";
                    const cardMask = "•••• " + (b && b.seatNumber ? "4321" : "1111");
                    
                    let scoreColor = "var(--accent-emerald)";
                    if (tx.fraudScore > 60) scoreColor = "var(--accent-rose)";
                    else if (tx.fraudScore > 30) scoreColor = "var(--accent-amber)";
                    
                    let statusBadgeClass = "badge-success";
                    let statusText = "Схвалено";
                    if (tx.status === "BLOCKED") {
                        statusBadgeClass = "badge-danger";
                        statusText = "Блоковано";
                    } else if (tx.status === "REFUNDED") {
                        statusBadgeClass = "badge-warning";
                        statusText = "Повернено";
                    }

                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td><span style="font-weight:600;">${tx.id}</span></td>
                        <td>
                            <span style="font-size:13px;">${passengerName}</span><br>
                            <span style="font-size:11px; color:var(--text-secondary);">${cardMask}</span>
                        </td>
                        <td style="font-weight:600;">${tx.amount.toLocaleString()} грн</td>
                        <td style="font-weight:700; color:${scoreColor};">${tx.fraudScore}%</td>
                        <td><span class="badge ${statusBadgeClass}">${statusText}</span></td>
                    `;
                    transactionsTable.appendChild(row);
                });
            }
        }

        // Рендеринг чорного списку
        const blacklistTable = document.getElementById("admin-blacklist-table-body");
        if (blacklistTable) {
            blacklistTable.innerHTML = "";
            if (blacklist.length === 0) {
                blacklistTable.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">Чорний список порожній</td></tr>`;
            } else {
                blacklist.forEach(item => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td style="font-family: monospace; font-weight: 600;">${item.id}</td>
                        <td><span class="badge badge-warning">${item.type}</span></td>
                        <td style="font-size: 12px; color: var(--text-secondary);">${item.reason}</td>
                    `;
                    blacklistTable.appendChild(row);
                });
            }
        }
    }
}

function adminCancelBooking(bookingId) {
    if (confirm("Адміністратор: Дійсно скасувати це бронювання безпосередньо в базі даних?")) {
        const booking = bookings.find(b => b.id === bookingId);
        if (!booking) return;

        booking.status = "CANCELED";
        saveDbTable("skybook_bookings", bookings);

        // Звільняємо місце
        const flight = flights.find(f => f.id === booking.flightId);
        if (flight) {
            flight.bookedSeats = flight.bookedSeats.filter(s => s !== booking.seatNumber);
            saveDbTable("skybook_flights", flights);
        }

        // Логуємо повернення (100% повернення при адмін скасуванні)
        transactions.unshift({
            id: "tx_" + Math.random().toString(36).substring(2, 9),
            bookingId: booking.id,
            amount: -booking.totalPrice,
            fraudScore: 0,
            status: "REFUNDED",
            timestamp: new Date().toISOString()
        });
        saveDbTable("skybook_transactions", transactions);

        showNotification("Бронювання анульовано адміністратором.", "warning");
        renderAdminDashboard();
    }
}

// --- 13. Управління навігацією та вкладками відповідно до прав ролей ---
function switchActiveTab(targetViewId) {
    window.scrollTo({ top: 0, behavior: "instant" });
    const activeTabButton = document.querySelector(`.nav-menu button[aria-controls="${targetViewId}"]`);
    if (activeTabButton) {
        // Очищуємо активний клас у всіх кнопок навігації в DOM
        document.querySelectorAll(".nav-menu button").forEach(btn => {
            btn.parentElement.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });
        activeTabButton.parentElement.classList.add("active");
        activeTabButton.setAttribute("aria-selected", "true");
    }
    
    // Перемикаємо видимість контейнерів-вкладок
    document.querySelectorAll(".tab-view").forEach(v => {
        if (v.id === targetViewId) {
            v.classList.add("active");
        } else {
            v.classList.remove("active");
        }
    });

    // Оновлення специфічних даних для кожної вкладки
    if (targetViewId === "view-admin") {
        renderAdminDashboard();
    } else if (targetViewId === "view-dashboard") {
        renderPassengerDashboard();
    }
}

// Функція оновлення інтерфейсу авторизації
function updateAuthUI() {
    const authGuestButtons = document.getElementById("auth-guest-buttons");
    const authUserProfile = document.getElementById("auth-user-profile");
    const navUserAvatar = document.getElementById("nav-user-avatar");
    const navUserName = document.getElementById("nav-user-name");
    const navUserBadge = document.getElementById("nav-user-badge");
    
    const navItemSearch = document.getElementById("nav-item-search");
    const navItemDashboard = document.getElementById("nav-item-dashboard");
    const navItemAdmin = document.getElementById("nav-item-admin");

    if (currentUser) {
        authGuestButtons.classList.add("hide");
        authUserProfile.classList.remove("hide");
        
        const initials = ((currentUser.firstName ? currentUser.firstName[0] : "") + (currentUser.lastName ? currentUser.lastName[0] : "")).toUpperCase() || "US";
        navUserAvatar.innerText = initials;
        navUserName.innerText = `${currentUser.firstName} ${currentUser.lastName[0]}.`;
        
        let roleName = "Пасажир";
        if (currentUser.role === "admin") roleName = "Адмін";
        else if (currentUser.role === "operator") roleName = "Підтримка";
        else if (currentUser.role === "security") roleName = "Безпека";
        navUserBadge.innerText = roleName;
        
        navItemSearch.classList.remove("hide");
        navItemDashboard.classList.remove("hide"); // Завжди показуємо кабінет авторизованому пасажиру або адміну
        
        if (currentUser.role === "admin" || currentUser.role === "operator" || currentUser.role === "security") {
            navItemAdmin.classList.remove("hide");
        } else {
            navItemAdmin.classList.add("hide");
        }
        
        // Оновлюємо контент блоку підвищення прав у кабінеті
        const statusText = document.getElementById("elevation-status-text");
        const formWrapper = document.getElementById("elevation-form-wrapper");
        const demoteWrapper = document.getElementById("demote-form-wrapper");
        const secretInput = document.getElementById("admin-secret-key");

        if (currentUser.role === "admin") {
            if (statusText) statusText.innerText = "Ви авторизовані як адміністратор системи. Вам доступно: Керування рейсами, розкладом, БД, скасування бронювань, моніторинг транзакцій та чорний список.";
            if (statusText) statusText.style.color = "var(--primary)";
            if (formWrapper) formWrapper.classList.add("hide");
            if (demoteWrapper) demoteWrapper.classList.remove("hide");
            if (secretInput) secretInput.value = "";
        } else if (currentUser.role === "operator") {
            if (statusText) statusText.innerText = "Ви авторизовані як оператор підтримки. Вам доступні функції перегляду та скасування бронювань.";
            if (statusText) statusText.style.color = "var(--accent-emerald)";
            if (formWrapper) formWrapper.classList.add("hide");
            if (demoteWrapper) demoteWrapper.classList.add("hide");
        } else if (currentUser.role === "security") {
            if (statusText) statusText.innerText = "Ви авторизовані як спеціаліст з авіабезпеки. Вам доступний моніторинг транзакцій та чорний список.";
            if (statusText) statusText.style.color = "var(--primary)";
            if (formWrapper) formWrapper.classList.add("hide");
            if (demoteWrapper) demoteWrapper.classList.add("hide");
        } else {
            if (statusText) statusText.innerText = "Ви авторизовані як пасажир. Для доступу до керування рейсами та перегляду звітності активуйте режим адміністратора.";
            if (statusText) statusText.style.color = "var(--text-secondary)";
            if (formWrapper) formWrapper.classList.remove("hide");
            if (demoteWrapper) demoteWrapper.classList.add("hide");
        }
    } else {
        authUserProfile.classList.add("hide");
        authGuestButtons.classList.remove("hide");
        
        navItemSearch.classList.remove("hide");
        navItemDashboard.classList.add("hide");
        navItemAdmin.classList.add("hide");
    }

    // Перевіряємо чи активна зараз вкладка не стала прихованою
    const activeTabLi = document.querySelector(".nav-menu .nav-item.active");
    if (activeTabLi && activeTabLi.classList.contains("hide")) {
        switchActiveTab("view-search");
    } else {
        // Оновлюємо контент поточної активної вкладки
        const activeBtn = document.querySelector(".nav-menu .nav-item.active button");
        if (activeBtn) {
            const targetViewId = activeBtn.getAttribute("aria-controls");
            if (targetViewId === "view-admin") renderAdminDashboard();
            else if (targetViewId === "view-dashboard") renderPassengerDashboard();
        }
    }
}

// --- Елементи авторизації ---
const modalLogin = document.getElementById("modal-login");
const modalRegister = document.getElementById("modal-register");
const btnOpenLogin = document.getElementById("btn-open-login");
const btnOpenRegister = document.getElementById("btn-open-register");
const btnCloseLogin = document.getElementById("btn-close-login-modal");
const btnCloseRegister = document.getElementById("btn-close-register-modal");
const linkToRegister = document.getElementById("link-to-register");
const linkToLogin = document.getElementById("link-to-login");
const btnLogout = document.getElementById("btn-logout");
if (btnOpenLogin) btnOpenLogin.addEventListener("click", () => modalLogin.classList.add("active"));
if (btnOpenRegister) btnOpenRegister.addEventListener("click", () => modalRegister.classList.add("active"));
if (btnCloseLogin) btnCloseLogin.addEventListener("click", () => modalLogin.classList.remove("active"));
if (btnCloseRegister) btnCloseRegister.addEventListener("click", () => modalRegister.classList.remove("active"));

if (linkToRegister) {
    linkToRegister.addEventListener("click", (e) => {
        e.preventDefault();
        modalLogin.classList.remove("active");
        modalRegister.classList.add("active");
    });
}
if (linkToLogin) {
    linkToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        modalRegister.classList.remove("active");
        modalLogin.classList.add("active");
    });
}

if (btnLogout) {
    btnLogout.addEventListener("click", () => {
        currentUser = null;
        localStorage.removeItem("skybook_current_user");
        showNotification("Ви вийшли з акаунту", "warning");
        updateAuthUI();
    });
}

// Вхід через форму
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value.trim().toLowerCase();
        const pass = document.getElementById("login-password").value;
        
        const u = users.find(usr => usr.email.toLowerCase() === email && usr.password === pass);
        if (u) {
            currentUser = u;
            localStorage.setItem("skybook_current_user", JSON.stringify(currentUser));
            modalLogin.classList.remove("active");
            loginForm.reset();
            showNotification(`Вітаємо, ${u.firstName}! Вхід успішний.`, "success");
            updateAuthUI();
        } else {
            showNotification("Невірний email або пароль!", "danger");
        }
    });
}

// Реєстрація через форму
const registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const fName = document.getElementById("reg-first-name").value.trim();
        const lName = document.getElementById("reg-last-name").value.trim();
        const passport = document.getElementById("reg-passport").value.trim();
        const email = document.getElementById("reg-email").value.trim().toLowerCase();
        const pass = document.getElementById("reg-password").value;
        const passConfirm = document.getElementById("reg-password-confirm").value;
        
        if (pass !== passConfirm) {
            showNotification("Паролі не співпадають!", "danger");
            return;
        }
        
        if (users.some(usr => usr.email.toLowerCase() === email)) {
            showNotification("Користувач з таким email вже існує!", "warning");
            return;
        }
        
        const newUser = {
            email: email,
            password: pass,
            firstName: fName,
            lastName: lName,
            passport: passport,
            role: "passenger",
            status: "Standard"
        };
        
        users.push(newUser);
        saveDbTable("skybook_users", users);
        
        currentUser = newUser;
        localStorage.setItem("skybook_current_user", JSON.stringify(currentUser));
        
        modalRegister.classList.remove("active");
        registerForm.reset();
        showNotification("Акаунт успішно створено!", "success");
        updateAuthUI();
    });
}

// --- Логіка підвищення прав (Elevation to Admin) ---
const btnElevateAdmin = document.getElementById("btn-elevate-admin");
const btnDemotePassenger = document.getElementById("btn-demote-passenger");

if (btnElevateAdmin) {
    btnElevateAdmin.addEventListener("click", () => {
        const secretKey = document.getElementById("admin-secret-key").value;
        if (secretKey === "admin2026") {
            if (currentUser) {
                currentUser.role = "admin";
                
                // Оновлюємо в базі даних користувачів
                const userIndex = users.findIndex(u => u.email.toLowerCase() === currentUser.email.toLowerCase());
                if (userIndex !== -1) {
                    users[userIndex].role = "admin";
                    saveDbTable("skybook_users", users);
                }
                
                localStorage.setItem("skybook_current_user", JSON.stringify(currentUser));
                showNotification("Режим адміністратора активовано! 🔑", "success");
                updateAuthUI();
                switchActiveTab("view-admin");
            }
        } else {
            showNotification("Невірний секретний ключ доступу!", "danger");
        }
    });
}

if (btnDemotePassenger) {
    btnDemotePassenger.addEventListener("click", () => {
        if (currentUser) {
            currentUser.role = "passenger";
            
            // Оновлюємо в базі даних користувачів
            const userIndex = users.findIndex(u => u.email.toLowerCase() === currentUser.email.toLowerCase());
            if (userIndex !== -1) {
                users[userIndex].role = "passenger";
                saveDbTable("skybook_users", users);
            }
            
            localStorage.setItem("skybook_current_user", JSON.stringify(currentUser));
            showNotification("Режим адміністратора вимкнено.", "warning");
            updateAuthUI();
            switchActiveTab("view-dashboard");
        }
    });
}

// --- 14. Запуск початкового стану ---
renderFlights();
currentSearch.origin = "KBP";
currentSearch.destination = "CDG";
currentSearch.date = today;
renderFlights();
updateAuthUI();

// Слухачі для безпеки та адаптивного дизайну
window.addEventListener("resize", () => {
    const activeBtn = document.querySelector(".nav-menu .nav-item.active button");
    if (activeBtn && activeBtn.getAttribute("aria-controls") === "view-admin") {
        renderAdminDashboard();
    }
});

document.addEventListener("input", (e) => {
    if (e.target && e.target.id === "admin-threshold-range") {
        const val = parseInt(e.target.value);
        fraudThreshold = val;
        localStorage.setItem("skybook_fraud_threshold", val.toString());
        const display = document.getElementById("admin-threshold-val");
        if (display) {
            display.innerText = val + "%";
        }
    }
});

// --- 15. Логіка вікна Про компанію та Контакти (Footer Info Modals) ---
const modalInfo = document.getElementById("modal-info");
const linkAboutModal = document.getElementById("link-about-modal");
const linkContactsModal = document.getElementById("link-contacts-modal");
const btnCloseInfoModal = document.getElementById("btn-close-info-modal");
const btnCloseInfoView = document.getElementById("btn-close-info-view");
const linkFooterDashboard = document.getElementById("link-footer-dashboard");

const openInfoModal = (mode) => {
    const title = document.getElementById("info-modal-title");
    const aboutSec = document.getElementById("info-about-section");
    const contactsSec = document.getElementById("info-contacts-section");
    
    if (mode === "about") {
        title.innerText = "Про компанію SkyBook";
        aboutSec.style.display = "block";
        contactsSec.style.display = "none";
    } else {
        title.innerText = "Контакти підтримки";
        aboutSec.style.display = "none";
        contactsSec.style.display = "block";
    }
    modalInfo.classList.add("active");
};

if (linkAboutModal) {
    linkAboutModal.addEventListener("click", (e) => {
        e.preventDefault();
        openInfoModal("about");
    });
}

if (linkContactsModal) {
    linkContactsModal.addEventListener("click", (e) => {
        e.preventDefault();
        openInfoModal("contacts");
    });
}

if (btnCloseInfoModal) btnCloseInfoModal.addEventListener("click", () => modalInfo.classList.remove("active"));
if (btnCloseInfoView) btnCloseInfoView.addEventListener("click", () => modalInfo.classList.remove("active"));

if (linkFooterDashboard) {
    linkFooterDashboard.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentUser) {
            switchActiveTab("view-dashboard");
        } else {
            modalLogin.classList.add("active");
            showNotification("Будь ласка, авторизуйтесь для входу в кабінет", "warning");
        }
    });
}

