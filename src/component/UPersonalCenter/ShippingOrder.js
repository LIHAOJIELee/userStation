import React, { Component } from "react";
import { Tabs } from "antd";
import SignFail from "./SignFail";
import SignSuccessful from "./SignSuccessful";
import WaitDeliver from "./WaitDeliver";
import Waiting from "./Waiting";
import "../../css/UPersonCenter/PersonCenter.css";
import { LeftOutlined } from "@ant-design/icons";
// import Axios from "../../util/Axios";

const { TabPane } = Tabs;

export class ShippingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "small",
      onWaitD: "onWaitD",
      msg: "1",
      key: "",
      activeKey: "",
    };
  }

  onChange = (e) => {
    this.setState({ size: e.target.value });
  };
  goBack() {
    this.props.history.push({ pathname: "/PrsonalCenter" });
  }
  UNSAFE_componentWillMount() {
    console.log(this.props.location.query.tab);
    this.setState({
      activeKey: this.props.location.query.tab,
    });
  }
  componentDidMount() {}
  TBC = (key) => {
    console.log("点击了", key);
    console.log("2号点击了", key);
  };
  render() {
    const { size } = this.state;
    console.log(this.state.activeKey);
    return (
      <div>
        <div className="PersonCenter-PS">
          <LeftOutlined
            onClick={this.goBack.bind(this)}
            className="PersonCenter-Left2"
          />
          <div className="PersonCenter-PC">配送</div>
        </div>
        <Tabs
          onChange={this.TBC}
          defaultActiveKey={this.state.activeKey}
          type="card"
          size={"large"}
          className="PersonCenter-Tabs"
          centered
        >
          <TabPane tab="待配送" key="待配送">
            <WaitDeliver msg={"传递给待配送组件的消息" + this.state.msg} />
          </TabPane>
          <TabPane tab="配送中" key="配送中">
            <Waiting msg={"传递给配送中组件的消息"} />
          </TabPane>
          <TabPane tab="签收成功" key="签收成功">
            <SignSuccessful msg={"传递给签收成功组件的消息"} />
          </TabPane>
          <TabPane tab="签收失败" key="签收失败">
            <SignFail msg={"传递给签收失败组件的消息"} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default ShippingOrder;
