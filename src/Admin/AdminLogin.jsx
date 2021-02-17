import React, { Component } from 'react';
import { Input, Space, Button, Card, Form, FormItem } from 'antd';
import { Link, Redirect ,withRouter} from 'react-router-dom'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FaRegPaperPlane } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
// import { Link } from "react-router-dom";
import axiosInstance from '../axios-Instance';
// import Routes from'../routes';
import Image from "../asserts/MainImage.png";
import { AiOutlineUser } from "react-icons/ai";
class Adminlogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      loginMessage: "",
      username_error_text: null,
      password_error_text: null,
      disabled: true


    };
    this.onChange = this.handleChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }
  handleChange = (event) => { this.setState({ [event.target.name]: event.target.value }); }
  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userName: this.state.username,
      password: this.state.password,
    };

    axiosInstance
      .post('adminAuth/login', user)
      .then((res) => {
        const token = res.data.token;
        let msg = res.data.message;
        console.log(msg);
        // setAuthToken(token);
        localStorage.setItem('AdminloginToken', token);
        let message = res.data.message;
        console.log(message);
        this.props.history.push("/AdminPanel");
        alert('Logged in SuccessFully');
        this.setState({
          username: "",
          password: "",
          loggedIn: true,
          loginMessage: msg
        })
        this.props.history.push("/AdminPanel");
        console.log(user);
      })
      .catch((err) => {
        this.setState({
          loginMessage: err.response.data.message
        })
        console.log(err.response.data.message);
      });
  }
  render() {
    const isDisabled = () => {
      let usernameIsValid = false;
      let passwordIsValid = false;
      let firstnameIsValid = false;




      if (this.state.username === "" || !this.state.username) {
        this.setState({
          username_error_text: <p className="error-msg">Enter Your username</p>
        });
      } else {
        if (this.state.username.length >= 3) {
          usernameIsValid = true;
          this.setState({
            username_error_text: null
          });
        } else {
          this.setState({
            username_error_text: <p className="error-msg">Enter Your Username</p>
          });
        }
      }
      if (this.state.password === "" || !this.state.password) {
        this.setState({
          password_error_text: <p className="error-msg">Enter Your password</p>
        });
      } else {
        if (this.state.password.length >= 8) {
          passwordIsValid = true;
          this.setState({
            password_error_text: null
          });
        } else {
          this.setState({
            password_error_text: <p className="error-msg">Enter your password   </p>
          });
        }
      }

      if (usernameIsValid && passwordIsValid) {
        this.setState({
          disabled: false
        });
      }
    }
    const onFinish = values => {
      console.log('Success:', values);
    };
    const tailLayout = {
      wrapperCol: { offset: 14, span: 16 },
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className="container login-container" >
        <div className="container  login" >

          <div className="row">
            <div className="col-5">
              <img src={Image} />
            </div>
            <div className="col-5">

              <Card bordered={false} style={{ width: 500 }} className="login-design" >

                <div className="row ">
                  <h1 className="heading"> Admin Login</h1>
                </div>
                <div className="row center">
                  <Form
                    className="center-form"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      //  label="User Name"
                      name="username"
                      rules={[{ required: true, message: 'Please Enter your User Name!' }]}>

                      <Input
                        placeholder="Username"
                        name="username"
                        onBlur={isDisabled}
                        value={this.state.username}
                        onChange={this.handleChange}
                        style={{ width: "300px", height: "40px", borderRadius: "20px" }}
                        prefix={<AiOutlineUser />}
                      />
                      <p className="error-msg">{this.state.username_error_text}</p>




                    </Form.Item>

                    <Form.Item
                      //  label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please Enter your Password !' }]}>

                      <Input.Password
                        style={{ width: "300px", height: "40px", borderRadius: "20px" }}
                        placeholder="Enter password"
                        name="password"
                        onBlur={isDisabled}
                        value={this.state.password}
                        onChange={this.handleChange}
                        prefix={<FiLock />}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      />
                      <div className="row center"><p className="error-msg"> {this.state.password_error_text}</p></div>


                    </Form.Item>
                    <Form.Item>
                      <div className="row center"><p className="error-msg">{this.state.loginMessage}</p></div>
                      <div className="row center button-margin">
                        <button to="/AdminPanel" className="Login-button" onClick={(event) => this.handleSubmit(event)} type="primary" htmlType="submit"><FaRegPaperPlane />  Log in</button>
                      </div>

                    </Form.Item>
                  </Form>
                  {/* <div className="row center"> 
<p className="Already">Create an Account   <Link to="/SignUp">  <span className="mr-5">Sign up</span></Link></p>
</div> */}
                </div>


              </Card>
            </div>
          </div>

        </div>
      </div>


    );
  }
}

export default withRouter(Adminlogin);