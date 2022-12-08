export const LoadAlbum =()=>{
    return fetch('https://jsonplaceholder.typicode.com/photos')
  
}

export const LoadAlbumById =(id)=>{
    return fetch("https://jsonplaceholder.typicode.com/albums/"+id+"/photos")
  
}

export const LoadPic =(id)=>{
    return fetch("https://jsonplaceholder.typicode.com/photos/"+id)
  
}