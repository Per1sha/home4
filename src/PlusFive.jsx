import React,{useState}from 'react';

const PlusFive = () => {
     const [num, setNum] = useState (0);

     const minfive = ()=>{
        setNum(item => Math.max(item -5, 0))
     }

     const plusfive = ()=>{
        setNum(item => Math.min(item +5, 15))
     }


    return (
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{
                if (num < 15) setNum (num+1)
            }}>+1</button>

           <button onClick={()=>{
                if (num > 0) setNum (num-1)
            }}>-1</button>

            <button onClick={minfive}>-5</button>
            <button onClick={plusfive}>+5</button>
            <button onClick={()=>{
                setNum(0)
            }}>reset</button>
        </div>
    );
}

export default PlusFive;
