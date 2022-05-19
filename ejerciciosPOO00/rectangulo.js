console.log('Ejemplo de POO');

//nombre de las clases inician con mayusculas
class Rectangulo{
   // base = 0;
   // altura = 0;
    // metodo default constructor
    constructor(base,altura){
        this.altura = altura;
        this.base   = base;
        this.area();
        console.log('desde el metodo de constructor');
    }
    area(){
        return this.base * this.altura;
        console.log('calculando area');
    }
    perimetro(){
        return (this.base * 2) + (this.altura * 2);
    }
}

//instanciar
let rectanguloUno = new Rectangulo(5,10);
console.log(rectanguloUno.area());
console.log(rectanguloUno.perimetro());
document.getElementById('respuesta').innerHTML = rectanguloUno.area()