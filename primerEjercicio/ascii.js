let exp = [128, 64, 32, 16, 8, 4, 2, 1 ]

function ejecutarAscii() {

    let tabla = document.getElementById('tabla');
    let reg = false;
    var thead = document.createElement("thead");
    var th = document.createElement("th");
    th.innerHTML = "#";
    thead.appendChild(th)
    exp.forEach(element => { 
        var th = document.createElement("th");
        th.innerHTML = element;
        thead.appendChild(th);
    });
    document.getElementById("tabla").appendChild(thead); 
    let valor = document.getElementById('ascci').value;
    let arr = valor.split('');
    arr.forEach(element => {
        codigo = element.charCodeAt(0);
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        tr.appendChild(th);
        th.innerHTML = codigo;
        console.log(`El codigo es ${codigo}`);
        let resta = parseInt(codigo);
        exp.forEach(element => {
            if (resta >= element) {
                resta -= element;
                var td = document.createElement("td");
                td.innerHTML = "1";
                tr.appendChild(td);
            } else {
                var td = document.createElement("td");
                td.innerHTML = "0";
                tr.appendChild(td);
            }
            console.log("resta ", resta)
        });
        //agrega los numeros a la tabla
        document.getElementById("tabla").appendChild(tr);    
    });    
}
 
function eliminar() {
    document.getElementById('ascci').value = '';
    location.reload()
 }