import { useDispatch, useSelector } from "react-redux"


const Counter=()=>{
    const count= useSelector((state)=>state.count)
    const dispatch=useDispatch()

    return (
        <div>
            <h1>
                count:{count}
            </h1>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </div>
    )
}

export default Counter