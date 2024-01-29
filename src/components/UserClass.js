import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
    }
    componentDidMount(){
        //const data = await fetch("https://api.github.com/users/Shwetha-703");
        //const json = await data.json();
        //this.setState(json);
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    render(){
        const { name } = this.props;
        const { login } = this.state;
        return (
        <div className="user-card">
            <h2>{name} - {login}</h2>
            <h3>Bengaluru</h3>
            <h4>jupiter@planets.com</h4>
        </div>
        )
    }
}

export default UserClass;