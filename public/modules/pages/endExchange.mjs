import { getData } from "../../app.mjs";

export const endExchange = (data) => {
    return `
    <div class="modal" style="display: block;">

        <div class="modal-endExchange">
            <span class="close-btn">×</span>
            <h2>${data.userName1}, Parabéns pela troca realizada!</h2>

            <div class="endExchange-wrapper">

                <div class="endExchange-msg-container">
                    <p>Para detalhes de envio, entre em contato com o "Green Colecionador" abaixo:</p>
                </div>
                <div class="endExchange-user">
                    <div class="endExchangeUser-photo-container" style="background-image: url(http://localhost:8000/files/${data.userPhoto2});"></div>

                    <div class="endExchange-user-data">
                        <span>${data.userName2}</span>
                        <span>${data.userEmail2}</span>
                        <span>${data.userPhone2}</span>
                    </div>
                </div>
            </div>
        
        </div>
    </div>

`;
};
