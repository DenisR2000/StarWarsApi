import React from "react";
import '../styles/CartPeople.css'
function CartPeople( props ){
   
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <div>
                        <span className="name">Name</span>
                        <h6 className="card-title">{props.info.name}</h6>
                        <span className="name">Height</span>
                        <h6 className="card-title">{props.info.height}</h6>
                        <span className="name">Mass</span>
                        <h6 className="card-title">{props.info.mass}</h6>
                        <span className="name">Hair color</span>
                        <h6 className="card-title">{props.info.hair_color}</h6>
                        <span className="name">Skin color</span>
                        <h6 className="card-title">{props.info.skin_color}</h6>
                        <span className="name">Eye color</span>
                        <h6 className="card-title">{props.info.eye_color}</h6>
                        <span className="name">Birth year</span>
                        <h6 className="card-title">{props.info.birth_year}</h6>
                        <span className="name">Gender</span>
                        <h6 className="card-title">{props.info.gender}</h6>
                    </div>
                    <p className="card-text"></p>
                </div>
            </div>
        </>
    )
}

export default CartPeople