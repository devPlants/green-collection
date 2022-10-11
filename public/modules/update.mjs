// import { getData } from "../app.mjs";

export async function update() {
  const forms = document.querySelector('#form-update')

  const form = new FormData(forms);

  const options = {
    method: 'PUT',
    headers: {
      'authorization': `${document.cookie}`
    },
  };

  options.body = form;
  try {

    const response = await fetch(`http://localhost:8000/users`, options)
    // const data = await response.json();
    console.log(response);
    console.log('PASSOUUUUUUU!');
    return;

  } catch (err) {
    console.log(`Erro: ${err}`);
    return err;
  }
}