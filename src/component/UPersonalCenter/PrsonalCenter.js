import React, { Component } from "react";
import { Avatar, Collapse, Button } from "antd";
import {
  UserOutlined,
  LeftOutlined,
  RightOutlined,
  MessageOutlined,
  ShopTwoTone,
  CarTwoTone,
  CloseSquareTwoTone,
  CheckSquareTwoTone,
} from "@ant-design/icons";
import "../../css/UPersonCenter/PersonCenter.css";
import WaitDeliver from "./WaitDeliver";
import Waiting from "./Waiting";
import SignSuccessful from "./SignSuccessful";
import SignFail from "./SignFail";
import Axios from "../../util/Axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export class PrsonalCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nn: {},
      myData: [],
      ob: [],
    };
  }
  Gogo() {
    this.props.history.push('/S_Index')
  }
  Mess() {
    console.log("点击了消息中心");
    this.props.history.push({
      pathname: "/UInformationCenter",
      state: { userId: localStorage.getItem('id') },
    });
  }
  myApplication() {
    this.props.history.push({
      pathname: "/Audit",
      state: { userId: localStorage.getItem('id') },
    });
    console.log("我的申请");
  }
  SQ() {
    console.log("点击了收货地址");
  }
  OutL() {
    console.log("点击了退出登录");
    localStorage.clear();
    this.props.history.push('/Plogin')
  }
  WaitDeliver() {
    const that = this;

    Axios.post("/zhouzhouController/selectOrderSatus", {
      orderStatus: "待取货",
      userId: localStorage.getItem('id'),
    })
      .then((data) => {
        console.log(data);
        const myData1 = [];
        const obj = [];

        data.data.data.forEach((val, index) => {
          obj.push(val);
        });
        console.log(obj);
        sessionStorage.setItem("myData1", JSON.stringify(obj));
      })
      .then(() => {
        this.props.history.push({
          pathname: "/ShippingOrder",
          query: { tab: "待配送" },
        });
      });
  }
  Waiting() {
    Axios.post("/zhouzhouController/selectOrderSatus", {
      orderStatus: "配送中",
      userId: localStorage.getItem('id'),
    })
      .then((data) => {
        console.log(data);
        const myData1 = [];
        const obj = [];

        data.data.data.forEach((val, index) => {
          obj.push(val);
        });

        console.log(obj);
        sessionStorage.setItem("myData2", JSON.stringify(obj));
      })
      .then(() => {
        this.props.history.push({
          pathname: "/ShippingOrder",
          query: { tab: "配送中" },
        });
      });

    console.log("点击了配送中");
  }
  SignSuccessful() {
    Axios.post("/zhouzhouController/selectOrderSatus", {
      orderStatus: "签收成功",
      userId: localStorage.getItem('id'),
    })
      .then((data) => {
        console.log(data);
        const myData1 = [];
        const obj = [];

        data.data.data.forEach((val, index) => {
          obj.push(val);
        });
        sessionStorage.setItem("myData3", JSON.stringify(obj));
        console.log(obj);
        console.log(myData1);
      })
      .then(() => {
        this.props.history.push({
          pathname: "/ShippingOrder",
          query: { tab: "签收成功" },
        });
      });
  }
  SignFail() {
    Axios.post("/zhouzhouController/selectOrderSatus", {
      orderStatus: "签收失败",
      userId: localStorage.getItem('id'),
    })
      .then((data) => {
        console.log(data);
        const myData1 = [];
        const obj = [];

        data.data.data.forEach((val, index) => {
          obj.push(val);
        });

        console.log(obj);
        sessionStorage.setItem("myData4", JSON.stringify(obj));
      })
      .then(() => {
        this.props.history.push({
          pathname: "/ShippingOrder",
          query: { tab: "签收失败" },
        });
      });

    console.log("点击了签约失败");
  }

  componentDidMount() {
    this.Person();
  }
  Person = () => {
    Axios.post("/orderQuantity", { userId: localStorage.getItem('id') })
      .then((data) => {
        console.log(data.data.data);
        const nn = {};
        nn.userName = data.data.data.userName;
        nn.userPhoneNumber = data.data.data.userPhoneNumber;
        nn.DeliveryInProgress = data.data.data.DeliveryInProgress;
        nn.FailedToSignIn = data.data.data.FailedToSignIn;
        nn.SignInSuccessfully = data.data.data.SignInSuccessfully;
        nn.ToBeDelivered = data.data.data.ToBeDelivered;
        this.setState({
          nn: nn,
        });
        console.log(nn.userName);
        console.log(nn.ToBeDelivered);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    var NameTel = [
      {
        nikeName: this.state.nn.userName,
        phone: this.state.nn.userPhoneNumber,
      },
    ];

    return (
      <div className="PersonCenter-header">
        <div className="PersonCenter-H">
          <LeftOutlined
            onClick={this.Gogo.bind(this)}
            className="PersonCenter-Left"
          />
          <div className="PersonCenter-PC">个人中心</div>
          <MessageOutlined
            className="PersonCenter-Mess"
            onClick={this.Mess.bind(this)}
          />
        </div>

        {/*=======================头像==================================*/}
        <div className="PersonCenter-Avatar">
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            className="PersonCenter-A"
            size={64}
            icon={<UserOutlined />}
            // srcSet={}
          />
          <div>
            {NameTel.map((item, index) => {
              return (
                <div key={index} className="PersonCenter-NP">
                  <span className="PersonCenter-Name">{item.nikeName}</span>
                  <span className="PersonCenter-Phone">{item.phone}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/*=======================订单=======================*/}
        <div className="PersonCenter-Order">
          <div className="PersonCenter-O">订单</div>
          <div
            className="PersonCenter-MyApplication"
            onClick={this.myApplication.bind(this)}
          >
            {/* <div className="PersonCenter-FH">〉</div> */}
            <RightOutlined className="PersonCenter-FH" />
            <div className="PersonCenter-SQ">我的申请</div>
            <RightOutlined className="PersonCenter-FH2" />
            {/* <div className="PersonCenter-FH">〉</div> */}
          </div>
          <Collapse
            defaultActiveKey={["1"]}
            onChange={callback}
            className="PersonCenter-WL"
            ghost
          >
            <Panel header="我的物流" key="1" className="cccc">
              <div className="PersonCenter-MyWL">
                <Router>
                  <Route path="/WaitDeliver" component={WaitDeliver}></Route>
                  <Route path="/Waiting" component={Waiting}></Route>
                  <Route
                    path="/SignSuccessful"
                    component={SignSuccessful}
                  ></Route>
                  <Route path="/SignFail" component={SignFail}></Route>
                </Router>

                <div
                  onClick={this.WaitDeliver.bind(this)}
                  className="PersonCenter-WL1"
                >
                  <div className="icons-list">
                    <ShopTwoTone />
                  </div>
                  <div>
                    待配送<div>({this.state.nn.ToBeDelivered})</div>
                  </div>
                </div>

                <div
                  onClick={this.Waiting.bind(this)}
                  className="PersonCenter-WL2"
                >
                  <div className="icons-list">
                    <CarTwoTone />
                  </div>
                  <div>
                    配送中<div>({this.state.nn.DeliveryInProgress})</div>
                  </div>
                </div>
                <div
                  onClick={this.SignSuccessful.bind(this)}
                  className="PersonCenter-WL3"
                >
                  <div className="icons-list">
                    <CheckSquareTwoTone />
                  </div>
                  <div>
                    签收成功 <div>({this.state.nn.SignInSuccessfully})</div>
                  </div>
                </div>
                <div
                  onClick={this.SignFail.bind(this)}
                  className="PersonCenter-WL4"
                >
                  <div className="icons-list">
                    <CloseSquareTwoTone />
                  </div>
                  <div>
                    签收失败 <div>({this.state.nn.FailedToSignIn})</div>
                  </div>
                </div>
              </div>
            </Panel>
          </Collapse>
          <div
            className="PersonCenter-MyApplication"
            onClick={this.SQ.bind(this)}
          >
            <RightOutlined className="PersonCenter-FH" />
            <div className="PersonCenter-SQ">收货地址</div>
            <RightOutlined className="PersonCenter-FH2" />
          </div>
        </div>

        {/* 退出登录 */}
        <Button
          style={{ width: "60%" }}
          onClick={this.OutL.bind(this)}
          className="PersonCenter-OutL"
        >
          退出登录
        </Button>
      </div>
    );
  }
}

export default PrsonalCenter;
