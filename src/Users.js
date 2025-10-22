

const initialState={
    users:[],
    loading:false,
    error:null
}

export default function UserReducer(state=initialState,action){
    switch(action.type){
        case "user_fetch_start":
            return {...state,loading:true,error:null}
        case "user_fetch_success":
            return {...state,loading:false,users:action.payload}
        case "user_fetch_error":
            return {...state,loading:false,error:action.payload}  
        default :
        return state    
            
    }
}

export const fetchUser =()=>async(dispatch)=>{
    dispatch({type:"user_fetch_start"})

    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/users")
        const data= await res.json()
        dispatch({type:"user_fetch_success",payload:data})

        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
 
    }
    catch(error){
           dispatch({type:"user_fetch_error",payload:error.message})
        }
}