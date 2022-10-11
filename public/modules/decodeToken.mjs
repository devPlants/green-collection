export async function decodeToken(_token, _userId) {

    const options = {
        method: "GET",
        headers: {
            authorization: `${_token}`,
        },
    };

    try {
        const response = await fetch(`/users/${_userId}`, options);
        const dataUser = await response.json();
        return {
            address: dataUser[0].address,
            admin: dataUser[0].admin,
            city: dataUser[0].city,
            cpf: dataUser[0].cpf,
            email: dataUser[0].email,
            id: dataUser[0].id,
            name: dataUser[0].name,
            number: dataUser[0].number,
            phone_number: dataUser[0].phone_number,
            photo: dataUser[0].photo,
            state: dataUser[0].state,
            zip_code: dataUser[0].zip_code
        }
    } catch (err) {
        return { status: 400, err };
    }
};

// export function decodeToken(_token) {
//     let base64Url = _token.split('.')[1];
//     let base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
//     const data = JSON.parse(base64);

//     return {
//         userAdmin: data.userAdmin,
//         userEmail: data.userEmail,
//         userId: data.userId,
//         userName: data.userName,
//         userPhoto: data.userPhoto
//     };
// };