const valueI = document.getElementById('valor')
const select = document.getElementById('id')
const select1 = document.getElementById('id1')



async function converter() {
    let money = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(function (resposta) {
        return resposta.json()
    })
    let dolar = money.USDBRL.high
    let euro = money.EURBRL.high
    let bitcoin = money.BTCBRL.high
    let real = 1
    let resultt = document.getElementById('valorConvertido')

    //TODOS COM ELE MESMO

    if (select.value === "DOLAR" && select1.value === "DOLAR" ) {
        let result = parseFloat(valueI.value)
        resultt.innerHTML =  new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD' }).format(result)
    }
    if (select.value === "EURO" && select1.value === "EURO") {
        let result = parseFloat(valueI.value)
        resultt.innerHTML =  new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'EUR' }).format(result)
    }
    if (select.value === "REAL" && select1.value === "REAL") {
        let result = parseFloat(valueI.value)
        resultt.innerHTML =  new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL' }).format(result)
    }

    if (select.value === "BITCOIN" && select1.value === "BITCOIN") {
        let result = parseFloat(valueI.value)
        resultt.innerHTML = (result)
    }

    // REAL COM TODOS

     if (select.value === "DOLAR" && select1.value === "REAL" ) {
        let result = parseFloat(valueI.value)
        resultt.innerHTML =  new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD' }).format(result/ dolar)
    }
    if (select.value === "EURO" && select1.value === "REAL") {
        let result = parseFloat(valueI.value)
        resultt.innerHTML =  new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'EUR' }).format(result/ euro)
    }
    if (select.value === "REAL" && select1.value === "REAL") {
        let result = parseFloat(valueI.value)
        resultt.innerHTML =  new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL' }).format(result/ real)
    }

    if (select.value === "BITCOIN" && select1.value === "REAL") {
        let result = parseFloat(valueI.value)
        resultt.innerHTML = (result/ bitcoin)/1000
    }

    // DOLAR COM TODOS

    if (select.value === "DOLAR" && select1.value === "DOLAR" ) {
        let result = parseFloat(valueI.value) * dolar
        resultt.innerHTML =  new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD' }).format(result/ dolar)
    }
    if (select.value === "EURO" && select1.value === "DOLAR") {
        let result = parseFloat(valueI.value) * dolar
        resultt.innerHTML =  new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'EUR' }).format(result/ euro)
    }
    if (select.value === "REAL" && select1.value === "DOLAR") {
        let result = parseFloat(valueI.value) * dolar
        resultt.innerHTML =  new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL' }).format(result/ real)
    }

    if (select.value === "BITCOIN" && select1.value === "DOLAR") {
        let result = parseFloat(valueI.value) * dolar
        resultt.innerHTML = (result/ bitcoin)/1000
    }

    // EURO COM TODOS

    if (select.value === "DOLAR" && select1.value === "EURO" ) {
        let result = parseFloat(valueI.value) * euro
        resultt.innerHTML =  new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD' }).format(result/ dolar)
    }
    if (select.value === "EURO" && select1.value === "EURO") {
        let result = parseFloat(valueI.value) * euro
        resultt.innerHTML =  new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'EUR' }).format(result/ euro)
    }
    if (select.value === "REAL" && select1.value === "EURO") {
        let result = parseFloat(valueI.value) * euro
        resultt.innerHTML =  new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL' }).format(result/ real)
    }

    if (select.value === "BITCOIN" && select1.value === "EURO") {
        let result = parseFloat(valueI.value) * euro
        resultt.innerHTML = (result/ bitcoin)/1000
    }

    //BITCOIN COM TODOS

    if (select.value === "DOLAR" && select1.value === "BITCOIN" ) {
        let result = parseFloat(valueI.value) * bitcoin * 1000
        resultt.innerHTML =  new Intl.NumberFormat('en-US',
        {style: 'currency', currency: 'USD' }).format(result/ dolar)
    }
    if (select.value === "EURO" && select1.value === "BITCOIN") {
        let result = parseFloat(valueI.value) * bitcoin * 1000
        resultt.innerHTML =  new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'EUR' }).format(result/ euro)
    }
    if (select.value === "REAL" && select1.value === "BITCOIN") {
        let result = parseFloat(valueI.value) * bitcoin * 1000
        resultt.innerHTML =  new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: 'BRL' }).format(result/ real)
    }

    if (select.value === "BITCOIN" && select1.value === "BITCOIN") {
        let result = parseFloat(valueI.value) * bitcoin
        resultt.innerHTML = (result/ bitcoin)
    }



    


}

