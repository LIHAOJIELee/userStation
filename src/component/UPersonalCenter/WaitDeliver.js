import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class WaitDeliver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WaitD: [{}],
    };
  }
  goBack() {
    this.props.history.push({ pathname: "/" });
  }

  componentDidMount() {
    console.log(this.props.msg);
  }
  WaitD = (item) => {
    this.props.history.push({
      pathname: "/UOrderdetailsDistribution",
      query: { id: item.id },
    });
    console.log(item.id);
  };
  render() {
    const data = sessionStorage.getItem("myData1");
    console.log(JSON.parse(data));

    let mdata = JSON.parse(data);
    return (
      <div>
        {mdata.map((item, index) => {
          return (
            <div key={index} onClick={() => this.WaitD(item)}>
              <div className="PersonCenter-WaitD">
                <div className="PersonCenter-OS">
                  <div
                    className="PersonCenter-OrderBH"
                    style={{ color: "red" }}
                  >
                    订单编号：{item.id}
                  </div>
                  <div className="PersonCenter-SendSingle">
                    <div>{item.orderStatus}</div>
                  </div>
                </div>
                <hr />
                <div className="PersonCenter-Shop">
                  <div>门店：{item.siteName}</div>
                  <div className="PersonCenter-SendSingle1">
                    <div>{item.agingCode}</div>
                  </div>
                </div>
                <div className="PersonCenter-Consignee">
                  <div>收货人：{item.consigneeName}</div>
                  <div className="PersonCenter-SendSingle">
                    <div>审核时间：{item.checkTime}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(WaitDeliver);
