link = document.querySelector('.header-right').querySelectorAll('a');
console.log(link);

link.forEach(element => {
    element.addEventListener('click', function(){
        link.forEach(a => a.classList.remove('active'));

        this.classList.add('active');
    })
});

function encurtarUrl() {
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("Precisa inserir uma URL para encurtar");
        return;
    }

    //api key: 8be368b40bee4986bd03a75fcdfafe40


    let requestHeaders = {
        "Content-Type": "application/json",
        "apiKey": "8be368b40bee4986bd03a75fcdfafe40"
    }

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let inputUrl = document.getElementById("input-url");
        inputUrl.value = json.shortUrl;
        alert(`URL ENCURTADA ${inputUrl.value}`);
      });


}

function copiar() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL COPIADA ${inputUrl.value}`);
}

function Enviar() {

    var nome = document.getElementById("nameid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}