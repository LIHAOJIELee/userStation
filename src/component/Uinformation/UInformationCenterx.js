import React, { Component } from "react"; //引入react模块 ，首字母大写
//实例化组件创造，首字母大写

//实例化组件创造，首字母大写

import { LeftOutlined, PhoneOutlined } from "@ant-design/icons";
import "../../css/Uthr/UInformationx.css";
import Axios from "../../util/Axios";

class Informationx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordernum: "",
    };
  }
  componentDidMount() {
    // console.log(this.props.location.state.msg);
  }
  backinformation = () => {
    this.props.history.push({
      pathname: "/UInformationCenter",
    });
  };
  customerservice = () => {
    console.log("aaaa");
    Axios.post("/sendVerifyCode",{
      phoneNumber:"13684140782"
    }
  ).then((data)=>{
    console.log("成功")
    })
  };

  render() {
    return (
      <div>
        <div className="ordertop">
          <LeftOutlined
            className="ordertopicon"
            onClick={this.backinformation}
          />
          <span className="ordertoptext">消息详情</span>
        </div>
        <div className="orderbuttom">
           <div className="aaa">
            {this.props.location.state.msg}
           
          </div> 
          
          <div className="customerservice">
            <PhoneOutlined className="picon" onClick={this.customerservice} />
            <div className="kefu" onClick={this.customerservice}>
              联系客服
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Informationx;
