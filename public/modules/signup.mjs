export async function signup(){
    const nameInput = document.querySelector('#name-input');
    const emailInput = document.querySelector('#email-input');
    const cpfInput = document.querySelector('#cpf-input');
    const phoneInput = document.querySelector('#phone-input');
    const zipcodeInput = document.querySelector('#zipcode-input');
    const addressInput = document.querySelector('#address-input');
    const numberInput = document.querySelector('#number-input');
    const cityInput = document.querySelector('#city-input');
    const stateInput = document.querySelector('#state-input');
    const passwordInput = document.querySelector('#passwd-input');
    const confPasswordInput = document.querySelector('#confirm-passwd-input');
    //FALTA FOTO!!

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userCpf = cpfInput.value;
    const userPhone = phoneInput.value;
    const userZipcode = zipcodeInput.value;
    const userAddress = addressInput.value;
    const userNummber = numberInput.value;
    const userCity = cityInput.value;
    const userState = stateInput.value;
    const userpassword = passwordInput.value;
    const userConfPassword = confPasswordInput.value;
    //const userPhoto = 

    ///////////

        const form = new FormData();
    form.append(`"name", ${userName}`);
    form.append(`"email", ${userEmail}`);
    form.append(`"password", ${userpassword}`);
    form.append(`"cpf", ${userCpf}`);
    form.append(`"phoneNumber", ${userPhone}`);
    form.append(`"zipCode", ${userZipcode}`);
    form.append(`"address", ${userAddress}`);
    form.append(`"number", ${userNummber}`);
    form.append(`"city", ${userCity}`);
    form.append(`"state", ${userState}`);
   //form.append("photo", "C:\\Users\\ozias\\Desktop\\minion.jpg");

    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3ODJjMjgzNC02YjhmLTRiMGQtOTI0OS0yZWVkYjc3NzQ3MmQiLCJpYXQiOjE2NjQ5MDc3MzIsImV4cCI6MTY2NDkxNzczMX0.pk0mqD1oFfvzRF_-lt2_o4qQknUIzgXY7ITdVcipysM'
    }
    };

    options.body = form;

    const response = await fetch('http://localhost:8000/users', options)
    const data = await response.json()
    return data;
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
}
