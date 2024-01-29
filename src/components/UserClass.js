import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        console.log(this.props.name+ " constructor");
    }
    componentDidMount(){
        console.log(this.props.name +" component did mount");
    }
    render(){
        const { name } = this.props;
        const {  } = this.state;
        console.log(this.props.name+ " render");
        return (
        <div className="user-card">
            <h2>{name}</h2>
            <h3>Bengaluru</h3>
            <h4>jupiter@planets.com</h4>
        </div>
        )
    }
}

export default UserClass;