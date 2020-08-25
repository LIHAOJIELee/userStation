import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Waiting extends Component {
  WaitI = (item) => {
    this.props.history.push({
      pathname: "/UOrderdetailsProgress",
      query: { id: item.id },
    });
  };

  render() {
    const data = sessionStorage.getItem("myData2");
    console.log(JSON.parse(data));

    let mdata = JSON.parse(data);

    return (
      <div>
        {mdata.map((item, index) => {
          return (
            <div key={index} onClick={() => this.WaitI(item)}>
              <div className="PersonCenter-WaitD">
                <div className="PersonCenter-OS">
                  <div
                    className="PersonCenter-OrderBH"
                    style={{ color: "red" }}
                  >
                    订单编号：{item.id}
                  </div>
                  <div className="PersonCenter-SendSingle">
                    <div style={{ color: "rgb(88,88,255)" }}>
                      {item.orderStatus}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="PersonCenter-Shop">
                  <div>门店：{item.siteName}</div>
                  <div>配送员：{item.staffName}</div>
                  <div className="PersonCenter-SendSingle1">
                    <div>{item.agingCode}</div>
                  </div>
                </div>
                <div className="PersonCenter-Consignee">
                  <div>收货人：{item.consigneeName}</div>
                  <div className="PersonCenter-SendSingle">
                    <div>取货时间：{item.checkTime}</div>
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

export default withRouter(Waiting);
