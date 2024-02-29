function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    
    
    //tem que pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisaa preta, barba e fundo azulado.")
    }else {
        img.setAttribute("src", "./assets/avatar.png")
    }
    
    //se tiver light mode, adicionar a imagem light
}