function add(a, b) {
  
  return a + b;
}

const add2 = (a, b) => a + b
const add3 = (a, b) => {
  console.log("a", a)
  console.log("b", b)
  return a + b
}

function summaaArray(array) {
  let tulos = 0;

  array.forEach((a) => {
    tulos += add(tulos, a)
  })

  return tulos
}

const summaaArray2 = (array) => {
  let tulos = 0;

  array.forEach((a) => {
    tulos += add(tulos, a)
  })

  return tulos
}

console.log("Kutsutaan koodia funktio-esimerkki.js tiedostosta")
console.log(summaaArray([1,2,3,4]))