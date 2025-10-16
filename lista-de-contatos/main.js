const form = document.querySelector("form");
const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const tableBody = document.querySelector("tbody");
let names = [];
let phones = [];
let rowCount = 1;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let phoneNumber = phoneInput.value;
    let isNameValid = checkName();
    let isPhoneValid = checkPhone();

    if (isNameValid === true && isPhoneValid === true) {
        addContact();
        renderTable();
    }
    else if (isNameValid === false) {
        alert("Nome inválido. Insira um nome com pelo menos duas letras.");
    }
    else if (isPhoneValid === false) {
        alert("Telefone inválido. Use o seguinte padrão: +xx xx 9xxxx-xxxx");
    }

    function checkName() {
        let pattern = /([A-Z]|[a-z]|\ )\w+/;
        return pattern.test(nameInput.value);
    }

    function checkPhone() {
        let mainPattern = /\+[0-9]{2}\ [0-9]{2}\ 9[0-9]{4}\-[0-9]{4}/;
        let shortPattern = /[0-9]{13}/;
        let shorterPattern = /[0-9]{8}/;
        let matchesMainPattern = mainPattern.test(phoneInput.value);
        let matchesShortPattern = shortPattern.test(phoneInput.value);
        let matchesShorterPatter = shorterPattern.test(phoneInput.value);
        let newNumber = "";
        
        if (matchesShortPattern ) {
            newNumber += "+";

            for (let i = 0; i < 2; i++) {
                newNumber += phoneNumber[i];
            }

            newNumber += " ";

            for (let i = 2; i < 4; i++) {
                newNumber += phoneNumber[i];
            }

            newNumber += " ";

            for (let i = 4; i < 9; i++) {
                newNumber += phoneNumber[i];
            }

            newNumber += "-";

            for (let i = 9; i < 13; i++) {
                newNumber += phoneNumber[i];
            }

        }
        else if (matchesShorterPatter) {
            newNumber = "+55 51 9";

            for (let i = 0; i <= 3; i++) {
                newNumber += phoneNumber[i];
            }

            newNumber += "-";

            for (let i = 4; i < 8; i++) {
                newNumber += phoneNumber[i];
            }
        }

        phoneNumber = newNumber;
        console.log(newNumber);

        return matchesMainPattern || matchesShortPattern || matchesShorterPatter;
    }

    function addContact() {
        names.push(nameInput.value);
        phones.push(phoneInput.value);
    }

    function renderTable() {
        let tableRowContent = "";
        const darkRow = "<tr class='dark-row'>"
        const lightRow = "<tr class='light-row'>"

        tableRowContent += rowCount % 2 == 0 ? darkRow : lightRow;
        tableRowContent += `<td>${nameInput.value}</td>`
        tableRowContent += `<td>${phoneNumber}</td>`
        tableRowContent += "</tr>";

        tableBody.innerHTML += tableRowContent;
        rowCount++;
    }
});
