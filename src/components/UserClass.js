import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1
        }
    }
    render(){
        const { name } = this.props;
        const { count } = this.state;
        return (
        <div className="user-card">
            <h1>Count1 - {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1
                })
            }}>
                Increment count
            </button>
            <h2>{name}</h2>
            <h3>Bengaluru</h3>
            <h4>jupiter@planets.com</h4>
        </div>
        )
    }
}

export default UserClass;