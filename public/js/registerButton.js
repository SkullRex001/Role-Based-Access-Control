
async function register() {
    let email = document.getElementsByClassName("idInput")[0].value;
    let password = document.getElementsByClassName("passwordInput")[0].value;

    let data = await fetch('http://localhost:3001/auth/register', {
        method: 'POST', 
        headers: {
            email: email,
            password: password
        },
      
    });

    let resolved = await data.json();

    console.log(resolved);
}
