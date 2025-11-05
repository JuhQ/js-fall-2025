const nimet = [];

nimet.push("Juha");

// const avainsanalla määriteltyä muuttujaa ei voi uudelleenmäärittää
//nimet = ["juu", "joo"]
/*
while(true) {
  const nimi = prompt("Anna nimi")
  if(nimi === "") {
    break;
  }

  nimet.push(nimi)
}
 */

// sama kuin python for-in loop
for (let nimi of nimet) {
  console.log(nimi)
}

for (let i = 0; i < nimet.length; i++) {
  console.log(nimet[i])
}

for (let i = nimet.length; i >= 0; i--) {
  console.log(nimet[i])
}

for (let i = 0; i < nimet.length; i += 2) {
  console.log(i)
  console.log(nimet[i])
}

nimet.forEach((nimi) => {
  console.log(nimi)
})


const tulostaNimi = (nimi) => {
  console.log(nimi)
}

nimet.forEach(tulostaNimi)



const numerot = [1,2,3,100, 10, 11, -1, 3, 7, 1000, 20000]

numerot.sort()

console.log(numerot)


numerot.sort((a, b) => a - b)

console.log(numerot)













