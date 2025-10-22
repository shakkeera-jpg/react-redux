import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./Users";


function Fetch (){
    const dispatch = useDispatch()
    const {users,loading,error}=useSelector((state)=>state)
    const [time,setTime]=useState(true)

    useEffect(()=>{
        dispatch(fetchUser())

         
    },[dispatch])

    return (
        <div>
            {loading &&<p>loading</p>}
            {error &&<p>error:{error}</p>}
            
            {users.length >0 &&
            
            <ul>
                <h1>user list</h1>
              {users.map((user)=>(<li key={user.id}>{user.name}</li>))}
            </ul>
            }
        </div>
    )
}

export default Fetch