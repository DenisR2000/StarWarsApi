import React from "react"
import CartPeople from './CartPeople'
import '../styles/People.css'
function People( { data } ) {
    return(
        <>
            {data.map((people, i) => {
                return(
                <>
                    <div className="people-container">
                        <CartPeople key={i} info={people}/>
                    </div>
                </>)
            })}
        </>
    )
}

export default People