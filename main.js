function result(){
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let res = document.getElementById('res')
    let cem = 0
    let cinquenta = 0
    let vinte = 0
    let dez = 0
    let cinco = 0
    let dois = 0
    let um = 0

    res.innerHTML = ''
    res.style.marginTop = '0'
    if(num <= 0){
        window.alert('Digite um valor válido.')
        return
    }

    while(num >= 100){
        cem += 1
        num -= 100
    }
    while(num >= 50){
        cinquenta += 1
        num -= 50
    }
    while(num >= 20){
        vinte += 1
        num -= 20
    }
    while(num >= 10){
        dez += 1
        num -= 10
    }
    while(num >= 5){
        cinco += 1
        num -= 5
    }
    while(num >= 2){
        dois += 1
        num -= 2
    }
    while(num >= 1){
        um += 1
        num -= 1
    }

    res.style.marginTop = '20px'
    if(cem === 1){
        res.innerHTML += `${cem} nota de R$100 <br>`
    } else if(cem > 1){
        res.innerHTML += `${cem} notas de R$100 <br>`
    }
    if(cinquenta === 1){
        res.innerHTML += `${cinquenta} nota de R$50 <br>`
    } else if(cinquenta > 1){
        res.innerHTML += `${cinquenta} notas de R$50 <br>`
    }
    if(vinte === 1){
        res.innerHTML += `${vinte} nota de R$20 <br>`
    } else if(vinte > 1){
        res.innerHTML += `${vinte} notas de R$20 <br>`
    }
    if(dez === 1){
        res.innerHTML += `${dez} nota de R$10 <br>`
    } else if(dez > 1){
        res.innerHTML += `${dez} notas de R$10 <br>`
    }
    if(cinco === 1){
        res.innerHTML += `${cinco} nota de R$5 <br>`
    } else if(cinco > 1){
        res.innerHTML += `${cinco} notas de R$5 <br>`
    }
    if(dois === 1){
        res.innerHTML += `${dois} nota de R$2 <br>`
    } else if(dois > 1){
        res.innerHTML += `${dois} notas de R$2 <br>`
    }
    if(um === 1){
        res.innerHTML += `${um} moeda de 1 real <br>`
    } else if(um > 1){
        res.innerHTML += `${um} moedas de 1 real <br>`
    }
}