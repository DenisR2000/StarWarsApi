import '../styles/Plenets.css'
import CartPlenet from './CartPlenet'
function Plenets( { data }){
    return(
        <>
            { data.map((plenet, i) => {
                return(
                    <>
                        <div className="plenet-container">
                           <CartPlenet key={i} info={ plenet }/> 
                        </div>
                    </>
                ) 
            }) }
            
        </>
    )
}
export default Plenets