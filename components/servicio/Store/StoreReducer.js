const types ={
    album:'Album-action',
    photo:'photo-action'
}

const initialStore = {
    albumId: 1,
    photoId:1,
}
const StoreReducer = (state,action)=>{
   
    switch(action.types){
        case types.album:
            
            return {
                ...state,
                albumId: action.payload
            }
           
        case types.photo:
           
            return {
                ...state,
                photoId: action.payload
            }
        default:
            return state
    }
    
}

export {initialStore, types};
export default StoreReducer;

