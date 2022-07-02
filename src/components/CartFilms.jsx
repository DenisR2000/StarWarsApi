import React from "react";
import '../styles/CartFilms.css'
function CartFilms( props ){
    console.log(props.info)
    return(
        <>
            <div className="card" >
                <div className="card-body">
                    <div>
                        <span className="name">Title</span>
                        <h6 className="card-title">{props.info.title}</h6>
                        <span className="name">Episode id</span>
                        <h6 className="card-title">{props.info.episode_id}</h6>
                        <span className="name">Opening crawl</span>
                        <h6 className="card-title">{props.info.opening_crawl}</h6>
                        <span className="name">Director</span>
                        <h6 className="card-title">{props.info.director}</h6>
                        <span className="name">Producer</span>
                        <h6 className="card-title">{props.info.producer}</h6>
                        <span className="name">Release date</span>
                        <h6 className="card-title">{props.info.release_date}</h6>
                    </div>
                    <p className="card-text"></p>
                </div>
            </div>
        </>
    )
}

export default CartFilms