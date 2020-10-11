import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../Redux/actions/loginAction";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if(email.length > 0 && password.length > 0){
      let payload = {
        email: email,
        password: password
    }
    this.props.loginRequest(payload);
    }else{
      alert("Fill all Details")
    }
  };
  render() {
    const { email, password } = this.state;
    const { isAuth, isLoading, error, message } = this.props;
    console.log(isAuth, isLoading,error, message);
    if (!isAuth)
      return (
        <>
          <form onSubmit={this.onSubmit}>
            <div>email:
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="email"
                type="text"
                value={email}
              />
            </div>
            <div>Password:
              <input
                onChange={this.handleChange}
                name="password"
                placeholder="password"
                type="password"
                value={password}
              />
            </div>
            <div>
              <input value="submit" type="submit" />
            </div>
          </form>
          {isLoading && "...loading"}
          {error && error}
          {
              !isAuth && message && <div>{message}</div>
          }
        </>
      );
    else {
      return ( 
        <div>
          Logged IN
          </div>
      )

    }
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.login.isAuth,
  error: state.login.error,
  isLoading: state.login.isLoading,
  profile: state.login.profile,
  message: state.login.message
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(userLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


