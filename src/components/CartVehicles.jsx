import React from "react";
import '../styles/CartVehicles.css'

function CartVehicles( props ){
    return(
        <>
            <div className="card" >
                <div className="card-body">
                    <div>
                        <span className="name">Name</span>
                        <h6 className="card-title">{props.info.name}</h6>
                        <span className="name">Model</span>
                        <h6 className="card-title">{props.info.model}</h6>
                        <span className="name">Manufacturer</span>
                        <h6 className="card-title">{props.info.manufacturer}</h6>
                        <span className="name">Cost in credits</span>
                        <h6 className="card-title">{props.info.cost_in_credits}</h6>
                        <span className="name">Length</span>
                        <h6 className="card-title">{props.info.length}</h6>
                        <span className="name">Max atmosphering speed</span>
                        <h6 className="card-title">{props.info.max_atmosphering_speed}</h6>
                        <span className="name">Crew</span>
                        <h6 className="card-title">{props.info.crew}</h6>
                        <span className="name">Passengers</span>
                        <h6 className="card-title">{props.info.passengers}</h6>
                        <span className="name">Cargo capacity</span>
                        <h6 className="card-title">{props.info.cargo_capacity}</h6>
                        <span className="name">Consumables</span>
                        <h6 className="card-title">{props.info.consumables}</h6>
                        <span className="name">Vehicle class</span>
                        <h6 className="card-title">{props.info.vehicle_class}</h6>
                    </div>
                    <p className="card-text"></p>
                </div>
            </div>
        </>
    )
}

export default CartVehicles