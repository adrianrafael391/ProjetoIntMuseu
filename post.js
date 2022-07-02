function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "aplication/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}




function cadastroItem(){
   
    let url = "https://httpbin.org/post"
    let nomeTecnico = document.getElementById("nometecn").value
    let nomevulg = document.getElementById("nomevulg").value
    let codigo = document.getElementById("codigo").value
    let termo = document.getElementById("termo").value
    let cota = document.getElementById("cota").value
    let areaestudo = document.getElementById("areaestudo").value
    let seculo = document.getElementById("seculo").value
    let localizacao = document.getElementById("localizacao").value
    let material = document.getElementById("material").value
    let altura = document.getElementById("altura").value
    let largura = document.getElementById("altura").value
    let comprimento = document.getElementById("comprimento").value
    let nomefabricante = document.getElementById("nomefabricante").value
    let importador = document.getElementById("importador").value
    let anofabricacao = document.getElementById("anofabricacao").value
    let responsavel = document.getElementById("responsavel").value
    let descricao = document.getElementById("descricao").value
    let historia = document.getElementById("historia").value
    let conservacao = document.getElementById("testando").value


    console.log(historia)

    body = {
        "nometecnico": nomeTecnico,
        "nomevulg": nomevulg,
        "codigo": codigo,
        "termo": termo,
        "cota": cota,
        "areaestudo": areaestudo,
        "seculo": seculo,
        "localizacao": localizacao,
        "material": material,
        "altura": altura,
        "largura": largura,
        "comprimento": comprimento,
        "nomefabricante": nomefabricante,
        "importador": importador,
        "anofabricacao": anofabricacao,
        "responsavel": responsavel,
        "descricao": descricao,
        "historia": historia,
        "conservadddcao": conservacao
    }

    fazPost(url, body)
}