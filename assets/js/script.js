
   let url = `https://jsonplaceholder.typicode.com/photos`
   fetch(url).then(resp => resp.json()).then(datas => {
    let container = document.querySelector('div')
    container.classList.add("container")
    let row = document.createElement('div')
    row.className= "row justify-content-between"
    

    for (let i = 0; i < datas.length-4500; i++) {
        let col = document.createElement("div")
        col.className = "col-lg-4 mt-5"

        let card = document.createElement("div")
        card.classList.add("card")
        card.style.width = "18rem"
        
        let img = document.createElement("img")
        img.classList.add("card-img-top")

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let h5 = document.createElement("h5")
        h5.classList.add("card-title")

        let p = document.createElement("p")
        p.classList.add("card-text")
        let id = document.createElement("p")
        
        let a = document.createElement("a")
        a.className = "btn btn-primary"
        let dataId = datas[i].id
        a.setAttribute('href',`card.html?dataId=${dataId}`)

        img.src = datas[i].url
        h5.innerText = datas[i].title
        p.innerText = datas[i].url
        p.style.cursor = "pointer"
        p.style.color = "green"
        id.innerText = datas[i].id
        a.innerText = "Submit"

        cardBody.append(h5)
        cardBody.append(p)
        cardBody.append(a)
        card.append(img)
        card.append(cardBody)
        col.append(card)
        row.append(col)
       

      
    }
       
        
     container.append(row)
})
    

   
    
