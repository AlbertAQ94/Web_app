document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aquí puedes agregar la lógica para validar el usuario y la contraseña
    alert(`Usuario: ${username}\nContraseña: ${password}`);
    // Ocultar el formulario de inicio de sesion y mostrar el menu
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.menu-container').style.display = 'block';
});


document.getElementById("ingresoDatos.html").addEventListener('click',
    function (event) {
        event.preventDefault();
        //Ocultar el menu y mostrar el formulario de entrada de datos
        document.querySelector('.menu-container').style.display = 'none';
        document.querySelector('.data-entry-container').style.display = 'block';
    });


document.getElementById('dataEntryForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const starTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const activity = document.getElementById('activity').value;

    if (startTime && endTime && activity) {
        alert(`Datos guardados:\nHora de Inicio: ${startTime}\nHora de Término: ${endTime}\nActividad: ${activity}`);
        // Aquí puedes agregar la lógica para guardar los datos
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
