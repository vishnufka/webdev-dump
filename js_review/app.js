

const billy = {
    name: "billy",
    age: 12,
    height: 5
}

let answer = prompt("how old is billy?")

if (answer == billy.age) {
    alert(`correct! billy is ${billy.age}`)
}
else {
    alert(`wrong! billy is ${billy.age}`)
}