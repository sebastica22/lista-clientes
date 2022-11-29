import{ obtenerCliente, editarCliente } from './API.js';
import{ mostrarAlerta, validar } from './funciones.js'; 

(function(){

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosUrl = new URLSearchParams(window.location.search);
        const idCliente = parseInt( parametrosUrl.get('id') );
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });

    function mostrarCliente(cliente){
        const { nombre, email, telefono, empresa, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;


    }

    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        console.log(cliente);

        
        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;

        }

        editarCliente(cliente);

    }

})();