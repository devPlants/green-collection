import { getToken } from "./app.mjs";

export const updateExchanges = async (status) => {
    alert(status);
    /* try {
        const options = {
            method: "PUT",
            headers: {
                authorization: `${getToken().token}`,
            },
            body: {
                productId1: "64ee2098-86bb-456b-b504-e543e0d91e43",
                productId2: "c834dae3-79d9-4862-be26-410d1c6ba6b1",
                status: "approved",
                id: "ab9cb5aa-08c4-402b-8e51-81c13f6cb976",
            },
        };
        const response = await fetch(
            "http://localhost:8000/exchanges",
            options
        );
        const data = await response.json();
    } catch (err) {
        console.log("Erro ao atualizar exchanges => ", err);
    } */
};
