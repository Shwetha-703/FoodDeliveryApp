import {Component} from 'react';
import UserClass from './UserClass';

class Contact extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    componentWillUnmount(){
      console.log("Moving to another page");
    }
    render(){
        return (
          <div>
            <h2>Write a message</h2>
                  <p>"If you got any questions, please do not hesitate to send us a message. We reply within 24 working hours."</p>
      
                  <p> 📬 #4020, 2nd Floor, 17th Main, 1st Cross, Indiranagar, Bengaluru, Karnataka 560008</p>
      
                  <p> ✉️ lifemeinekbaaar@gmail.com</p>
      
                  <p> ☎️ +91-98765 43210</p>
      
                  <UserClass name = {"Jupiter Class Desu"}/>
          </div>
        )
    }
}

export default Contact;
/*
export const Contact = () => {
  return (
    <div>
      <h2>Write a message</h2>
            <p>"If you got any questions, please do not hesitate to send us a message. We reply within 24 working hours."</p>

            <p> 📬 #4020, 2nd Floor, 17th Main, 1st Cross, Indiranagar, Bengaluru, Karnataka 560008</p>

            <p> ✉️ lifemeinekbaaar@gmail.com</p>

            <p> ☎️ +91-98765 43210</p>

            <UserClass name = {"Jupiter Class Desu"}/>
            <UserClass name = {"Saturn Class Desu"}/>
            <UserClass name = {"Venus Class Desu"}/>
            <UserClass name = {"Mars Class Desu"}/>
    </div>
  )
}
*/
