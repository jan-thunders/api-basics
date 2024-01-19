import React,{useState} from "react";
import axios from "axios";

const Sum = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
//   const [num, setNum] = useState({num1: 0, num2: 0});

    const [result, setResult] = useState(0); 


    // function getSum(){
    //     fetch("http://localhost:5000/sum",{
    //       method: "POST",
    //       headers:{
    //            "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(
    //         {
    //             num1: 100, 
    //             num2: 200
    //        }
    //       )

    //     }
    //     )
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    // }


    function getSum(e){
        e.preventDefault();
         axios.post("http://localhost:5000/sum",{
            num1: +number1, 
            num2: +number2
         })
            .then(response => {
                console.log(response.data)
                setResult(response.data.sum)
            })
            .catch(err => {console.log(err);     })
    }

    return(
        <div>
            <h1>Sum</h1>
            <form onSubmit={getSum}>
                <input type="number" placeholder="Enter number 1" 
                 value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                />
                <input type="number" placeholder="Enter number 2" 
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                />
                <button type="submit" > Get Result </button>
            </form>
            
            <p> {result} </p>
        </div>
    )
}

export default Sum;