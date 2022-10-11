import { adminP, approvalList } from "../pages/adminP.mjs";

export const adminS = async () => {
    document.querySelector(".menu-user-header").classList.add("displayFlex");
    let adminPage = "";

    try {
        const options = {
            method: "GET",
            headers: {
                authorization: `${document.cookie}`,
            },
        };
        const pendents = await fetch(`http://localhost:8000/admins`, options);
        const response = await pendents.json();

        for (const list of response) {
            adminPage += approvalList({
                userId: list.users_id,
                productId: list.products_id,
                userPhoto: list.user_photo,
                userName: list.user_name,
                userCity: list.user_city,
                userState: list.user_state,
                productPhoto: list.product_photo,
                productName: list.product_name,
                description: list.description,
            });
        }

        return adminP(adminPage);
    } catch (err) {
        console.log("Erro na requisição do adminS: ", err);
    }
};

export const approvalAdmin = async (userId, productId, status) => {
    try {
        const options = {
            method: "PUT",
            headers: {
                authorization: `${document.cookie}`,
                "Content-Type": "application/json",
            },
            body: `{"userId":"${userId}","productId":"${productId}","status":"${status}"}`,
        };

        const response = await fetch("http://localhost:8000/admins", options);
    } catch (err) {
        console.log("Erro ao atualizar adminS => ", err);
    } finally {
        window.renderPage.admin();
        return;
    }
};
