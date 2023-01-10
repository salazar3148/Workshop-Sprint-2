const productos = [
];

const form = document.querySelector(".main__form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const product = {}
    Object.keys(form).forEach((index) => {
        const item = form[index];
        if (item.id !== '') product[item.id] = item.value;
    })
    productos.push(product)
    console.log(product);
})

verTabla = () => {
    const tabla = document.querySelector(".main__table")
}