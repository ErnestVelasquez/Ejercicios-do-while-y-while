const prompt = require('prompt-sync')();

const producto = {
    precio: 0,
    descuento: 0,
    neto: function(){
        return this.precio - (this.precio * (this.descuento / 100));
    }
};

producto.precio = parseFloat(prompt('Ingrese el precio: '));
producto.descuento = parseFloat(prompt('Ingrese el descuento (%): '));

const precioNeto = producto.neto();

console.log(`El precio neto es: ${precioNeto.toFixed(2)}`)