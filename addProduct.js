const productos = [
];

const span = document.querySelector(".main__span")
const form = document.querySelector(".main__form");
const btnVerTabla = document.querySelector(".verTabla")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const product = {}
    Object.keys(form).forEach((index) => {
        const item = form[index];
        if (item.id !== '') product[item.id] = item.value;
    })
    productos.push(product)
    console.log(product);
    verTabla();
})

btnVerTabla.addEventListener("click", (event) => {
    event.preventDefault();
    verTabla();
})

verTabla = () => {
    let ids = 0;
    span.innerHTML = "";

    if (productos.length === 0) {
        alert("Debe agregar productos!");
        return;
    }

    const columnas = ['Nombre', 'Precio', 'Cantidad', 'Categoria', 'Eliminar', 'Editar']
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    let tr, th, img;
    tr = document.createElement("tr");
    columnas.forEach((columna) => {
        th = document.createElement("th");
        th.append(columna);
        tr.append(th);
    })
    tabla.append(tr);

    productos.forEach((producto) => {
        tr = document.createElement("tr");
        for (let element in producto) {
            td = document.createElement("td");
            td.append(producto[element]);
            tr.append(td);
        }
        td = document.createElement("td");
        img = document.createElement("img");

        img.src = "https://cdn-icons-png.flaticon.com/512/458/458594.png";
        img.classList.add("btnBorrar");
        img.height = "25";
        img.id = ids;

        img.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove();
            productos.splice(event.target.id, 1)
            verTabla();
        })

        td.append(img);
        tr.append(td);
        btnBorrar = document.querySelector(".btnBorrar")

        td = document.createElement("td");
        img = document.createElement("img");

        img.src = "https://cdn-icons-png.flaticon.com/512/526/526127.png"
        img.alt = "borrar"
        img.classList.add("btnClick");
        img.height = "25";
        img.id = ids++;


        td.append(img);
        tr.append(td);

        img.addEventListener("click", (event) => {
            const hijos = event.target.parentNode.childNodes;

            const t = event.target.parentNode.parentNode;
            //console.log(t);
            t.innerHTML = "";

            td = document.createElement("td");
            td.innerHTML = `<input id="nombre" placeholder="Digite el nombre" type="text" value="${productos[event.target.id]["nombre"]}">`
            t.append(td);

            td = document.createElement("td");
            td.innerHTML = `<input id="nombre" placeholder="Digite el nombre" type="text" value="${productos[event.target.id]["precio"]}">`
            t.append(td);

            td = document.createElement("td");
            td.innerHTML = `<input id="nombre" placeholder="Digite el nombre" type="text" value="${productos[event.target.id]["cantidad"]}">`
            t.append(td);

            td = document.createElement("td");
            td.innerHTML = `<select id="categoria">
                <option value="">Seleccione una opción</option>
                <option value="herramientas">Herramientas</option>
                <option value="muebles">Muebles</option>
                <option value="hogar">Hogar</option>
                <option value="electrodomesticos">Electrodomésticos</option>
                <option value="videojuegos">Videojuegos</option>
                <option value="lcm">Literatura, cine y música</option>
                <option value="ropa">Ropa</option>
                <option value="accesorios">Accesorios</option>
                <option value="familia">Familia</option>
                <option value="byn">Bebes y niños</option>
                <option value="otros">Otros</option>
                </select>'`
            t.append(td);

            img = document.createElement("img")
            img.src = "https://www.pnguniverse.com/wp-content/uploads/2020/09/Icono-guardar.png";
            img.height = "25";
            img.id = event.target.id;

            img.addEventListener("click", (event) => {
                const hijos = event.target.parentNode.childNodes;
                
                nuevaPersona = {
                    nombre: hijos[0].childNodes[0].value,
                    precio: hijos[1].childNodes[0].value,
                    cantidad: hijos[2].childNodes[0].value,
                    categoria: hijos[3].childNodes[0].value
                }

                productos.splice(event.target.id, 1, nuevaPersona)
                
                verTabla();
            })

            t.append(img)
        })

        tabla.append(tr);

    })
    span.append(tabla);
}


