const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMenssage = document.querySelector('.msg')

const items = document.querySelector('.items')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === ""){
        errorMenssage.textContent = "por favor prencha os campos!";
        errorMenssage.classList = "error";

        setTimeout(() => {
            errorMenssage.textContent ="";
            errorMenssage.classList ="";
        }, 3000);
        return;
    }

    const li = document.createElement('li');
    li.classList = "item";
    li.innerHTML = `Nome; ${nameValue}<br> Email: ${emailValue}`

    items.appendChild(li);

    
})