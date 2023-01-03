const form = document.getElementById('form-verificacao');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    verify();
});


function verify() {

    const numeroA = document.getElementById('number-a');
    const num1 = Number(numeroA.value)
    const numeroB = document.getElementById('number-b');
    const num2 = Number(numeroB.value)
    const resp = document.getElementById('res');


    if (num1 > num2) {
        resp.innerHTML = `O valor é INVÁLIDO`;
    } else {
        resp.innerHTML = `O valor é VALIDO`;
    }
}