const getData = async (id)=>{
  try{
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await results.json()
    const detailsPokemon ={
      img:data.sprites.other.dream_world.front_default,
      name:data.name
    }
    addData(detailsPokemon)
    console.log(detailsPokemon);
  }catch(error){
    console.error(error + ' hubo un error');
  }
}
    
const addData = (detailsPokemon)=>{
  const cardButtons = document.querySelector('.card__buttons')
  const container = document.querySelector('.card__pokemon')
  const img = document.createElement('img')
  img.src=`${detailsPokemon.img}`
  container.insertBefore(img, cardButtons)
  const p = document.querySelector('.card__name')
  p.innerHTML = `${detailsPokemon.name}`
  container.insertBefore(p, cardButtons)
}

getData(25)



         


  

    
    

  




    // let section = document.createElement('section')
    // section.innerHTML = `
    // <article>
    //   <div class="imagen-container">
    //     <img src="${data.sprites.front_default}" alt="Personajes">
    //     <h2>${data.name}</h2>
    //     <span>${element.status}</span>
    //   </div>
    //  </article>`
    //  const contenedorPrincipal = document.querySelector('.container-principal')
    //  contenedorPrincipal.append(section)
  


// const getData = (done)=>{
//     const results =  fetch('https://rickandmortyapi.com/api/character')
//    results
//      .then(res => res.json())
//      .then(data =>{
//       done(data)})

//     }
//     getData(data =>{
//       console.log(data);
//       data.results.forEach(element =>{
//         const article = document.createRange().createContextualFragment(`
//         <article>
//              <div class="imagen-container">
//                <img src="${element.imagen}" alt="Personajes">
//                <h2>${element.name}</h2>
//                <span>${element.status}</span>
//             </div>
//         </article>`)
//           const contenedorPrincipal = document.querySelector('.container-principal')
//           contenedorPrincipal.append(article)
//       })
//     })




    