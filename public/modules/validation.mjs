export async function login(){
    const emailInput = document.querySelector('#email-input');
    const passwdInput = document.querySelector('#passwd-input')

    const userEmail = emailInput.value;
    const userPasswd = passwdInput.value;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email":"${userEmail}","password":${userPasswd}}`
    };

        async function requisition(){
            try {
                const response = await fetch('/login', options);
                if(response.status >= 300){
                    return 400;
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.log(`Erro na requisição: ${error}`);
            }

        }
        const token = await requisition();
        return token;
}