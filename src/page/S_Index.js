import React, {Component} from 'react'
import { LeftOutlined , UserOutlined  ,PhoneOutlined,EnvironmentOutlined ,FieldTimeOutlined,RightOutlined  } from '@ant-design/icons';
import {  Button } from 'antd';

import '../css/wmx-css/wmx_S_Index.css'
class S_Index extends Component {
        constructor(props) {
            super(props);
        
            this.state ={
                value:''
            };

        }
        UNSAFE_componentWillMount (){
          // console.log(this.props.location.query.value)
            // this.setState({
            //   value:this.props.location.query.value
            // })

        }
        MengDian =() =>{
            console.log("跳到门店列表");
            this.props.history.push("/Menshop")
         };
        Address =() =>{
            this.props.history.push('/Address')
        };
        //跳转到个人中心
    toPersonalCenter= () => {
        this.props.history.push('/PrsonalCenter')
    }
    render() {
        return (
            <div id='s_index'>
                <div className="wmx-top">
                    <span className="wmx-L">
                    <LeftOutlined/>
                    </span>
                    <div className="wmx_s"> 首页</div>
                    <span className="wmx-R" onClick={this.toPersonalCenter}>
                     <UserOutlined/>
                    </span>
                </div>

                <div className="wmx-d">
                    <span onClick={() =>this.MengDian()}>
                        当前门店：
                    </span>
                    <span>{this.state.value}</span>
                </div>
                <div className="wmx-Sec">
                    <div className="wmx-ad" onClick={() =>this.Address()}>  <EnvironmentOutlined />请选择地址
                        <span className="wmx-Right"> <RightOutlined/> </span>
                    </div>
                    <div className="wmx-f"> <FieldTimeOutlined />生鲜食品超过值3KM不配送</div>
                </div>
                <span className="wmx-Ihp"> <PhoneOutlined/></span>

            <Button className="wmx-Btn">提交配送</Button>
            </div>
        )
    }
}

export default S_Index