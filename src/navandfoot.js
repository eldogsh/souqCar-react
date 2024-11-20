import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


function Navandfoot({children}) {
    const location =useLocation();
    const [shownav,setshownav]=useState(false)
    useEffect(()=>{
        console.log("this is location ",location);
        if(location.pathname ==='/login'){
            setshownav(false)
        }else{
            setshownav(true)
        }
    },[location]
    
    
    )

return (
<>
<div>
{shownav&&children}
 </div>
</>
    )
}
export default Navandfoot
