import React from "react";
import '../styles/Starships.css'
import CartStarship from "./CartStarship";

function Starships({ data }){
    return(
        <>
            { data.map((starcyhip, i) => {
                return(
                    <>
                        <div className="starship-container">
                            <CartStarship key={i} info={starcyhip}/>
                        </div>
                    </>
                )
            }) }
        </>

    )
  
}
export default Starships