import React from "react";
import '../styles/CartPlenet.css'

function CartPlenet( props ){
    return(
        <>
            <div className="card" >
                <div className="card-body">
                    <div>
                        <span className="name">Name</span>
                        <h6 className="card-title">{props.info.name}</h6>
                        <span className="name">Rotation period</span>
                        <h6 className="card-title">{props.info.rotation_period}</h6>
                        <span className="name">Orbital period</span>
                        <h6 className="card-title">{props.info.orbital_period}</h6>
                        <span className="name">Diameter</span>
                        <h6 className="card-title">{props.info.diameter}</h6>
                        <span className="name">Climate</span>
                        <h6 className="card-title">{props.info.climate}</h6>
                        <span className="name">Gravity</span>
                        <h6 className="card-title">{props.info.gravity}</h6>
                        <span className="name">Terrain</span>
                        <h6 className="card-title">{props.info.terrain}</h6>
                        <span className="name">Surface water</span>
                        <h6 className="card-title">{props.info.surface_water}</h6>
                        <span className="name">Population</span>
                        <h6 className="card-title">{props.info.population}</h6>
                    </div>
                    <p className="card-text"></p>
                </div>
            </div>
        </>
    )
}

export default CartPlenet
