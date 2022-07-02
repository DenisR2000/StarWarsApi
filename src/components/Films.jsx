import React from 'react'
import CartFilms from './CartFilms'
import '../styles/Films.css'
function Films( { data } ){
    return(
        <>
            { data.map((film, i) => {
                return(
                    <>
                        <div className="films-container">
                            <CartFilms key={i} info={film}/>
                        </div>
                    </>
                )
                
            }) }
        </>
    )
}
export default Films