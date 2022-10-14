export async function updateUser() {
  const forms = document.querySelector('#form-update')

  const form = new FormData(forms);

  if (
    form.get('name').length < 3 ||
    form.get('address').length < 3 ||
    form.get('number').length < 1 ||
    form.get('city').length < 3 ||
    form.get('state').length < 2
  ) {
    window.renderPage.modalAlert('Todos os campos são de preenchimento obrigatório!', 'red');
    return 400;
  }

  if (form.get('phone_number').length < 8) {
    window.renderPage.modalAlert('O telefone contém menos de 8 números!', 'red');
    return 400;
  }

  if (form.get('phone_number').length > 11) {
    window.renderPage.modalAlert('O telefone contém mais de 11 números!', 'red');
    return 400;
  }

  if (form.get('zip_code').length != 8) {
    window.renderPage.modalAlert('O CEP precisa conter 8 caracteres (Somente números)', 'red');
    return 400;
  }

  const options = {
    method: 'PUT',
    headers: {
      'authorization': `${document.cookie}`
    },
  };

  options.body = form;
  try {

    const response = await fetch(`/users`, options)

    if (response.status >= 300) {
      window.renderPage.modalAlert(`Ocorreu um erro na atualização de dados, tente novamente ou contacter o administrador.`, 'red');
      return 400;
    }

    setTimeout(() => {
      window.renderPage.modalAlert(`Dados atualizados com sucesso :)`, 'green');
    }, 900);
    return 200;

  } catch (err) {
    window.renderPage.modalAlert(`Ocorreu um erro na atualização de dados, tente novamente ou contacter o administrador. Erro: ${err}`, 'red');
    return 400;
  }
}