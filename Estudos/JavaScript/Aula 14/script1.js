function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um numero!')
    }else {
        let n = (num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}