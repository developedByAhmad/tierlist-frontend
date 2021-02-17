import React, { Component } from "react";
import { Input, Space, Button, Card, Form, FormItem } from "antd";
import Image from "../asserts/MainImage.png";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import axiosInstance from "../axios-Instance";

class forgetPassword extends Component {
  state = {
    email: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("auth/forgetPassword", {
        email: this.state.email
      })
      .then((res)=>{
      console.log(res.data.message)})
      .catch((err)=>{
        console.log(err)
      });
  }


  render() {
    return (
      <div className="container login-container">
        <div className="container  login">
          <div className="row">
            <div className="col-5">
              <img src={Image} />
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
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        style={{
                          width: "300px",
                          height: "40px",
                          borderRadius: "20px",
                        }}
                        prefix={<AiOutlineMail />}
                      />
                    </Form.Item>

                    <Form.Item>
                      <div className="row center button-margin">
                        <button
                          to="/AdminPanel"
                          disabled={this.state.disabled}
                          className="Login-button"
                          onClick={(e) => this.handleSubmit(e)}
                          type="primary"
                          htmlType="submit"
                        >
                          Confirm
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
