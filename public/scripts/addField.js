// Procurar o button
document.querySelector("#add-time")
// Quando clicar no button
.addEventListener('click', cloneField)

// Executar a ação
    function cloneField(){
    // Duplicar os campos: que campos?
        const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Pegar os campos: que campos?
        const fields = newFieldsContainer.querySelectorAll('input')
    // Para cada campo: limpar
        fields.forEach((field) => {
            // Pegar o field do momento e limpa
            field.value = []
        })

    // Colocar na página: onde?
        document.querySelector("#schedule-items").appendChild(newFieldsContainer)
    }
   

    