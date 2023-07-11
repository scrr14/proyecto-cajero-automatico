// Datos de usuarios
const users = [
    { username: "aaron", password: "123456", balance: 500 },
    { username: "natalia", password: "123456", balance: 800 },
    { username: "liam", password: "123456", balance: 200 },
];

let currentUser = null;

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (user) {
        currentUser = user;

        usernameInput.value = "";
        passwordInput.value = "";

        document.getElementById("usernameDisplay").textContent =
            currentUser.username;
        document.getElementById("balanceDisplay").textContent =
            "$" + currentUser.balance;
        document.getElementById("account").style.display = "block";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function checkBalance() {
    document.getElementById("message").textContent =
        "Saldo actual: $" + currentUser.balance;
}

function deposit() {
    const depositAmountInput = document.getElementById("depositAmount");
    const depositAmount = parseInt(depositAmountInput.value);

    if (depositAmount >= 10 && depositAmount <= 990) {
        currentUser.balance += depositAmount;
        document.getElementById("balanceDisplay").textContent =
            "$" + currentUser.balance;
        document.getElementById("message").textContent =
            "Acabas de depositar: $" +
            depositAmount +
            "\nTu nuevo saldo: $" +
            currentUser.balance;
            alert("Hiciste un deposito por: " + depositAmount);
    } else {
        alert("El monto debe ser entre $10 y $990");
    }

    depositAmountInput.value = "";
}
//funcion para el retiro
function withdraw() {
    const withdrawAmountInput = document.getElementById("withdrawAmount");
    const withdrawAmount = parseInt(withdrawAmountInput.value);

    if (withdrawAmount >= 10 && withdrawAmount <= 990) {
        if (withdrawAmount <= currentUser.balance) {
            currentUser.balance -= withdrawAmount;
            document.getElementById("balanceDisplay");
            document.getElementById("message").textContent =
            "Acabas de retirar: $" + withdrawAmount;
            alert("acabas de retirar:" + withdrawAmount);
        }
    }
}
