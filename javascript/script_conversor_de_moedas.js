function Converter() {
    var valorElemento = parseFloat(document.getElementById("valor").value)
    var conversao = valorElemento / 5;
    var valorConvertido = document.getElementById("valorConvertido")
    valorConvertido.innerHTML = `O valor convertido em dolar é U$ ${conversao}`
  }