import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1,
            count2 : 2
        }
    }
    render(){
        const { name } = this.props;
        const { count, count2 } = this.state;
        return (
        <div className="user-card">
            <h1>Count1 - {count}</h1>
            <h1>Count2 - {count2}</h1>
            <h2>{name}</h2>
            <h3>Bengaluru</h3>
            <h4>jupiter@planets.com</h4>
        </div>
        )
    }
}

export default UserClass;