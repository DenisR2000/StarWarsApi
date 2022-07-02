import '../styles/Home.css'
function Home(){
    return(
        <div  className="home-container">
            <h1>Home</h1>
            <hr style={{ color: 'black', width: '80%' }}/>
            <div style={{ width: '100%', marginTop: '10px' }}>
                <h3 style={{ marginLeft: '200px', marginBottom: '20px' }}>What is this?</h3>
                <span >
                    <p style={{ marginLeft: '200px', width: '500px'}}>The Star Wars API is the world's first quantified and programmatically-formatted set of Star Wars data.</p>
                </span>
                <span>
                    <p style={{ marginLeft: '200px', width: '500px'}}>After hours of watching films and trawling through content online, we present to you all the People, Films, Species, Starships, Vehicles and Planets from Star Wars.</p>
                </span>
                <span>
                    <p style={{ marginLeft: '200px', width: '500px'}}>We've formatted this data in JSON and exposed it to you in a RESTish implementation that allows you to programmatically collect and measure the data.</p>
                </span>
                <span>
                    <p style={{ marginLeft: '200px', width: '500px'}}>Check out the documentation to get started consuming swapi data</p>
                </span>
            </div>
        </div>
    )
}
export default Home