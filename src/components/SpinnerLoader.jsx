import React, {useEffect, useState} from "react";

export default function SPLoader() {

   //const [text, setText] = useState('')
   const [showImg, setShowImg] = useState(true)

 useEffect(() => {
   const timer = setTimeout(() => {
     setShowImg(false);
   }, 1000);
   return () => clearTimeout(timer);
 }, []);
   
   return(
     <>
       <div>
        {
            showImg ? (
                <img src="./Spinner.svg"   />
            ) : (
                <h3>{text}</h3>
            )
        }
       </div>
     
     </>
   )
}
