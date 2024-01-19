import React,{useState, useEffect} from "react";
import axios from "axios";

const Hello = () => {
    const [message, setMessage] = useState("");

    // function getMessage(){
    //      fetch("http://localhost:5000/hello")
    //      .then((response) =>  response.json()) 
    //      .then(data => {
    //         console.log(data);
    //         setMessage(data.message)
    //      })
    //      .catch(err => console.log(err))

    // }

    useEffect(()=>{
         getMessage()
    },[])

    function getMessage(){
        axios.get("http://localhost:5000/hello")
        .then(response => {
            console.log(response.data)
            setMessage(response.data.message)
        }
            ) 
        .catch(err => console.log(err))
    }



    return(
        <div>
                <p> {message} </p>  
        </div>
    )
}

export default Hello;