function contar(){
let inicio = document.getElementById('txtni')
let Fim = document.getElementById('txtnf')
let Passo = document.getElementById('passo')
var res = document.getElementById('res')
if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados')
}else{
    res.innerHTML = 'Contando:'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F447}`
    }
    res.innerHTML += `\u{1F3C1}`
}
 }