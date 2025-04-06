const formData ={
    email: "",
    message: ""
}
const localStorageKey = "feedback-form-state"

const formEl = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(localStorageKey);
if(savedData)
{
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    formEl.elements.email.value = parsedData.email;
    formEl.elements.message.value = parsedData.message;
}

formEl.addEventListener('input', saveData);
formEl.addEventListener('submit', handleSubmit);

function saveData(){
    
    const email = formEl.elements.email.value.trim();
    const message = formEl.elements.message.value.trim();

    formData.email = email;
    formData.message = message;

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function handleSubmit(event){
    event.preventDefault();
    const email = formEl.elements.email.value.trim();
    const message = formEl.elements.message.value.trim();

    if(email === "" || message === ""){
        alert('All form fields must be filled in');
        return
    }
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        formData.email = "";
        formData.message = "";
        formEl.reset();
};
