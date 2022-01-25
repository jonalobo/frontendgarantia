const btn = document.getElementById('btnConsulta')
const URL = 'https://servidorgarantias.herokuapp.com/api/equipo?serie='


btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const formulario = document.getElementById('form')
    const serie = document.querySelector('input').value
    const scripting = document.querySelector('.respuesta')
    scripting.innerHTML = ''
    if (validarSerie(serie)) {
        fetch(`${URL}${serie}`)
            .then(res=>res.json())
            .then((data)=>{
                const respuesta = data.existeSerie
                respuesta.forEach(element => {
                    const { marca, consola,venceGarantia}= element
                    const HTML = `<table>
                    <tr>
                        <th>Marca</th>
                        <th>Categoría</th>
                        <th>Garantía</th>
                    </tr>
                    <tr>
                        <td>${marca}</td>
                        <td>${consola}</td>
                        <td>${venceGarantia}</td>
                    </tr>
                </table>`
                scripting.innerHTML = HTML
                formulario.reset()
                });
            })
    }

})

const validarSerie = (serie) => {
    if (serie != '') {
        return serie
    } else {
        alert('Debe ingresar una serie de equipo')
    }
}