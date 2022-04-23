
function random(n) {
  return Math.floor(Math.random() * n)
}

const symbol = "!@#$%^&*()_-+={[}]:;<,>.?/"
  console.log();

function GetSymbol() {
  let newSymbol = symbol[random(symbol.length)]
  return newSymbol
}

export default GetSymbol