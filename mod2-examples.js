
const luvut = []

for (let i = 0; i < 5; i++) {
  const numero = prompt("Anna luku")
  luvut.push(parseInt(numero))
}

for (let i = luvut.length; i >= 0; i--) {
  console.log(luvut[i])
}

const vieraidenMäärä = parseInt(prompt("Vieraiden määrä"))

const nimilista = []
for (let i = 0; i < vieraidenMäärä; i++) {
  const nimi = prompt("Anna nimi")
  nimilista.push(nimi)
}

nimilista.sort()

const ul = document.querySelector("ul")

for (const nimi of nimilista) {
  const li = document.createElement("li")
  li.innerText = nimi
  ul.appendChild(li)
}





