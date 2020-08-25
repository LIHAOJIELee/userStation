import React, { Component } from "react"; //引入react模块 ，首字母大写
//实例化组件创造，首字母大写
import {Table} from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { Resizable } from "react-resizable";
import "../../css/Uthr/UOrderdetailsDistribution.css";
import Axios from "../../util/Axios";
const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Distribution extends Component {
  constructor() {
    super();
    this.state = {
      message1: {},
      orderList: [],
      List: [],

      message: {
        cashiersnumber: "123456",
        serialnumber: "123",
        ordertime: "2020/08/04",
        audittime: "2020/07/03",
      },
      usermessage: {
        name: "陈小姐",
        phone: "13684140782",
        bphone: "17398898853",
        address: "成都市武侯区玉林院",
      },
      ordermessage: {
        ordertype: "生鲜",
        boxnum: "3",
        boxweight: "20kg",
        boxmoney: "320",
      },
      columns: [
        {
          title: "商品分类1",
          dataIndex: "date",
          width: 200,
        },

        {
          title: "商品分类2",
          dataIndex: "type",
          width: 200,
        },
        {
          title: "数目",
          dataIndex: "note",
          width: 100,
        },
      ],
    };
  }
  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  

  handleResize = (index) => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  componentDidMount() {
    Axios.post("/UserPortOrderInfor/userOrderInforWaitDe", {
      orderId: this.props.location.query.id,
    }).then((data) => {
      const List = [];
      this.setState({
        message1: data.data.data,
      });
      console.log(this.state.message1);
      this.setState({
        orderList: data.data.data.sxorderTwoList,
      });
      this.state.orderList.forEach((val, index) => {
        List.push({
			date: val.twoName,
			type: val.threeName,
			note: val.count2,
          key: index,
        });
      });
      console.log(List);
      this.setState({
        List,
      });
      console.log(this.state.List);
    });
  }
  back(){
    this.props.history.push({
		pathname:"/PrsonalCenter"
	})

  }
  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <div>
        <div className="ordertop">
          <LeftOutlined className="ordertopicon" onClick={this.back.bind(this)}/>
          <span className="ordertoptext">订单详情</span>
        </div>
        <div className="ordermiddentop">
          <div className="ordermiddentopt">签收失败</div>
          <div className="ordermindentopm">
            <div>
              收银条台号:
              <span className="ordermindentopmspan">
                {this.state.message1.cashNumber}
              </span>
            </div>
            <div>
              流水号:
              <span className="ordermindentopmspan">
                {this.state.message1.serialNumber}
              </span>
            </div>
            <div>
              时间:
              <span className="ordermindentopmspan">
                {this.state.message1.streamTime}
              </span>
            </div>
            <div className="ordermindentopms">
              审核时间:
              <span className="ordermindentopmspan">
                {this.state.message1.checkTime}
              </span>
            </div>
          </div>
        </div>
        <div className="ordermiddenbtm">
          <div>
            收件人:
            <span className="ordermiddenbtmspan">
              {this.state.message1.consigneeName}
            </span>
          </div>
          <div>
            电话:
            <span className="ordermiddenbtmspan">
              {this.state.message1.consigneePhoneNumber}
            </span>
          </div>
          <div>
            备用电话:
            <span className="ordermiddenbtmspan">
              {this.state.message1.standbyPhoneNumber}
            </span>
          </div>
          <div>
            收货地址:
            <span className="ordermiddenbtmspan">
              {this.state.message1.consigneeAddress}
            </span>
          </div>
        </div>
    
        <div className="orderalltable">
          <div className="orderalltablename">
            <span className="orderalltablenamespan">
              {this.state.ordermessage.ordertype}
            </span>
            订单
          </div>
          <div className="ordertable">
            <Table
              bordered
              components={this.components}
              columns={columns}
              dataSource={this.state.List}
              pagination={false}
              className="ordertable1"
            />
          </div>

          <div className="orderalltablemessage">
            <div>
              箱数:
              <span className="orderalltablemessagespan">
                {this.state.message1.supCount}
              </span>
            </div>
            <div>
              重量:
              <span className="orderalltablemessagespan">
                {this.state.message1.heavy}
              </span>
            </div>
            <div>
              金额:
              <span className="orderalltablemessagespan">
                {this.state.message1.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Distribution;
