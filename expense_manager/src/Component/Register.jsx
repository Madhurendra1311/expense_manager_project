import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { userRegister } from "../Redux/actions/registerAction";
import { validEmail } from './emailValidation'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;

        if(name.length > 0 && validEmail(email) && password.length > 5 ) {
            axios
            .get('http://localhost:3000/usersData')
            .then(res=>{
                let userData = res.data
                let isValid = true
                for(let i = 0; i < userData.length; i++){
                    if(userData[i].email === email){
                        alert('Already Exist')
                        isValid = false
                    }
                }
                if(isValid){
                        let payload = {
                            name: name,
                            email: email,
                            password: password
                
                        }
                        this.props.registerRequest(payload);
                    }
            })
        }else{
            alert("Fill all Details")
        }
    }

    render(){
        const { name, email, password } = this.state;
        return(
            <>
                <form onSubmit={this.onSubmit}>
                    <div>
                        Name:<br/><input onChange={this.handleChange} name="name" placeholder="name" type="text" value={name} /><br/>
                    </div>
                    <div>
                        Email:<br/><input onChange={this.handleChange} name="email" placeholder="email" type="text" value={email} /><br/>
                    </div>
                    <div>
                        Password:<br/><input onChange={this.handleChange} name="password" placeholder="password" type="password" value={password} /><br/>
                    </div>
                    <div>
                        <input value="submit" type="submit" />
                    </div>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.register.isAuth,
    error: state.register.error,
    isLoading: state.register.isLoading,
    message: state.register.message
  });
  
  const mapDispatchToProps = (dispatch) => ({
    registerRequest: (payload) => dispatch(userRegister(payload))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register)