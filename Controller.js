const consultarApiBtn = document.getElementById('consultarApiBtn');
const resultadoDiv = document.getElementById('resultado');

consultarApiBtn.addEventListener('click', () => {
    fetch('https://www.ecodeli.mx/ApiRest/ApiEcodeliComercial/v2/PaginaEcodeli/get_Proveedores', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            strAccion: '1',
            strUsuario: 'rnazario',
            strSucursal: '',
            strPeriodo: '8',
            strEjercicio: '2023',
            strID: '',
            strCoordinador: '',
            strConexion: 'connection'
        })
    })
    .then(response => response.json())
    .then(data => {
        // Elimina el contenido actual del tbody
        resultadoDiv.innerHTML = '';
    
        // Recorre los datos de la API y crea filas de tabla
        data.forEach(proveedor => {
            const row = document.createElement('tr');
            row.innerHTML = `

                <td>${proveedor.strNombre}</td>
                <td>${proveedor.strContacto}</td>
                <td>${proveedor.strEmail}</td>
                <td>${proveedor.strUsuario}</td>
                <td>${proveedor.intDias}</td>
                <td>${proveedor.strTipo}</td>
            `;
            resultadoDiv.appendChild(row);
        });
    })
    .catch(error => {
        // Maneja errores aquí
        console.error('Error:', error);
        alert('error');

    });
});
