export const getGift = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fKQ2rWwRWXFgtRhCd1facns3f4wneOj0&q=${category}&limit=20`;
    const resp = await fetch(url);//espera la peticion 
    const {data} = await resp.json();//desestructura y se pasa a un json
    //obtiene siertos datos
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url 
    }))
    
    return gifs;
}