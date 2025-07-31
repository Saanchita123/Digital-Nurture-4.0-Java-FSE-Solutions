import React,{useState} from "react";

function CurrencyConverter()
{
    const[rupee,setRupee]=useState('');
    const [euros,setEuros]=useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        const conversionRate=0.011;
        setEuros((rupee*conversionRate).toFixed(2));
    }

    return(
        <div>
            <h2>Currency Converter</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Indian rupee :
                    <input 
                    type="number"
                    value={rupee}
                    onChange={(e)=>setRupee(e.target.value)}
                    />
                </label>
                <button type="Submit"> Convert </button>
            </form>
            {euros && <p>Euro : {euros}</p>}
        </div>
    );
}
export default CurrencyConverter;