import React, { Component } from "react"; //引入react模块 ，首字母大写
//实例化组件创造，首字母大写

//实例化组件创造，首字母大写

import { LeftOutlined } from "@ant-design/icons";
import "../../css/Uthr/UInformation.css";
import { List, Avatar } from "antd";
import Axios from "../../util/Axios";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { name: "aaaa", number: "123" },
        { name: "bbbb", number: "321" },
      ],
      arr1: [],
      data: [
        {
          ordernum: "23400",
          orderstate: "签收成功,签收情况:本人签收,签收时间:2020/08/09",
          title: "Ant Design Title 1",
          ordertime: "2020/08/20 12 12 15",
        },
        {
          ordernum: "34845",
          orderstate: "分配骑手",

          title: "Ant Design Title 2",
        },
        {
          ordernum: "54687",
          orderstate: "骑手取货",

          title: "Ant Design Title 3",
        },
        {
          ordernum: "564456",
          orderstate: "签收失败",

          title: "Ant Design Title 4",
        },
      ],
    };
  }
  componentDidMount() {
    // console.log(this.props.location.state.userId);
    this.aalist();
  }
  aalist = () => {
    Axios.post("/userLogin/userMsg", { userId: localStorage.getItem('id') }).then((data) => {
      console.log(data);
      console.log(data.data.data);
      this.setState({
        arr1: data.data.data,
      });
      console.log(this.state.arr1);
    });
  };
  backinformation = () => {
    this.props.history.push('/PrsonalCenter')
  };
  addOrderMsg = (a) => {
    console.log(a);
    this.props.history.push({
      pathname: "/UInformationCenterx",
      state: { msg: a },
    });
  };

  render() {
    return (
      <div>
        <div className="ordertop">
          <LeftOutlined
            className="ordertopicon"
            onClick={this.backinformation}
          />
          <span className="ordertoptext">消息中心</span>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.arr1}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                /*  avatar={<Avatar src="./shoucang.png" />} */
                title={
                  <div>
                    <div onClick={() => this.addOrderMsg(item)}>
                      <div>
                        <span className="orderxx">订单信息</span>
                      </div>

                      <div className="ordern">{item}...</div>
                      <div className="aaaa"> {item.time}</div>
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default Information;
