import React, { Component } from "react";
import { Input, Space, Button, Card, Form, FormItem } from "antd";
import Image from "../asserts/MainImage.png";
import Lock from "../asserts/lock2.png";
import Lock2 from "../asserts/lock.jpg";
import Locks from "../asserts/Locks.png";
import Loc from "../asserts/locked.jpg";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import axiosInstance from "../axios-Instance";
class forgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("auth/updatePassword",{
        id:this.props.match.params.id,
        password: this.state.password
      })


    // console.log(user);



    // axiosInstance
    //   .post("auth/login", user)
    //   .then((res) => {
    //     const token = res.data.token;
    //     let loginID = res.data.id;
    //     console.log("login Id :", res.data.id);
    //     localStorage.setItem("loginToken", token);
    //     localStorage.setItem("loginId", loginID);

    //     this.setState({
    //       Loginalert: {
    //         variant: "success",
    //         message: "Log In SuccessFully",
    //       },
    //     });
    //     this.setState({
    //       username: "",
    //       password: "",
    //       loggedIn: true,
    //       // loginMessage: msg,
    //       loginID: loginID,
    //     });
    //     this.props.history.push("/User");
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       Loginalert: {
    //         variant: "danger",
    //         message: "not Login ",
    //       },
    //     });
    //     console.log(err.response.data.message);
    //   });
  };

  componentDidMount() {
    // let loginId = localStorage.getItem("loginId");
    // let newRank = [];
    // let copyWithoutGames = [];
    // this.setState({ loginId: loginId });
    // console.log(loginId);


    // const decodedToken = jwt.verify(token, process.env.JWT_SESSION_KEY);
    // const authId = decodedToken.id;

    // const token = this.props.match.params.id
    
    // axiosInstance
    //   .post("auth/updatePassword",{
    //     id:this.props.match.params.id,
    //     password:ss,
    //   })

    console.log(this.props.match.params.id);



    // axiosInstance
    //   .post("Auth/updatePassword")
    //   .then((res) => {

    //     this.props.history.push("/User");
    //   })
    //   .catch((err) => {

    //   })

  }
  render() {
    return (
      <div className="container login-container">
        <div className="container  login" style={{ marginTop: "200px" }}>
          <div className="row">
            <div className="col-5">
              <div className="mt--90">
                <img src={Locks} />
              </div>
            </div>
            <div className="col-5">
              <Card
                bordered={false}
                style={{ width: 400 }}
                className="login-design"
              >
                <div className="row ">
                  <h1 className="resetPassword">Reset Your Password </h1>
                </div>
                <div className="row center">
                  <Form className="center-form" name="basic">
                    <Form.Item
                      //  label="User Name"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter your User Name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter Your New Password"
                        name="password"
                        value={this.state.password}
                        onChange={(e)=>this.handleChange(e)}
                        style={{
                          width: "300px",
                          height: "40px",
                          borderRadius: "20px",
                        }}
                        prefix={<RiLockPasswordLine />}
                      />
                    </Form.Item>

                    <Form.Item>
                      <div className="row center button-margin">
                        <button
                          to="/AdminPanel"
                          disabled={this.state.disabled}
                          className="Login-button"
                          onClick={(e)=>this.handleSubmit(e)}
                          type="primary"
                          htmlType="submit"
                        >
                          Reset Password
                        </button>
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default forgetPassword;
