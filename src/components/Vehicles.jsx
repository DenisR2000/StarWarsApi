import React from "react"
import '../styles/Vehicles.css'
import CartVehicles from "./CartVehicles"
function Vehicles({ data }){
    return(
        <>
            { data.map((vehicles, i) => {
                return(
                    <>
                        <div className="vehicles-container"> 
                            <CartVehicles key={i} info={vehicles}/>
                        </div>
                    </>
                   
                )
            }) }
        </>
    )
}
export default Vehicles