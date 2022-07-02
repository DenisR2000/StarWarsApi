import React from 'react'
import { Route, Link } from 'react-router-dom'

const User = ({ match }) => {
    return(
        <>
            <h2>User {match.params.id}</h2>
        </>
    )
}

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        console.log(this.props)
        return(
            <>
                <ul >
                    <li>
                        <Link to="/users/1">User 1</Link>
                    </li>
                    <li>
                        <Link to="/users/2">User 2</Link>
                    </li>
                    <li>
                        <Link to="/users/3">User 3</Link>
                    </li>
                </ul>
                <Route path="/users/:id" component={User}></Route>
            </>
        )
    }
}
export default Users