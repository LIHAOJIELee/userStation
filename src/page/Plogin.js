import React, {Component} from 'react'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/wmx-css/Plogin.css'



import Axios from "../util/Axios";
import {withRouter} from 'react-router-dom'
class Plogin extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
        onFinish = values => {
            console.log(values.username);
            console.log(values.password);
            Axios.post('/userLogin/login',{phoneNumber:values.username,verificationCode:values.password})
                .then((data) =>{
                    console.log(data)
                    if(data.data.code === '0000'){
                        this.props.history.push("/S_Index")
                        localStorage.setItem('token',data.data.data.Authorization)
                        localStorage.setItem('id',data.data.data.userInfo.userId)
                    }else{
                       message.error('登录失败，请检查账户和密码~~')
                    }
                })
        };
        render() {
            return (
                <div className="Plogin">
                    <div className="p_title">
                        <h3>小U到家</h3>
                    </div>
                    <div className="p_content">
                        {/*<img src={require(`../../static/images/login.jpg`)}alt=""/>*/}
                        <p>欢迎回来-COOL BOY</p>
                    </div>
                    <div className="p_form">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{required: true, message: '请输入你的姓名'}]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: '请输入密码！'}]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <span className="login-form-forgot">
                                    Forgot password
                                </span>
                            </Form.Item>

                            <Form.Item className="wmx-center">
                                <Button type="primary" htmlType="submit" className="login-form-button" >
                                    登录
                                </Button>
                                {/*Or <a href="">register now!</a>*/}
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            )
        }
    }

export default withRouter(Plogin)
