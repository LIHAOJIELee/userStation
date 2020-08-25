import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class SignSuccessful extends Component {
  SSu = (item) => {
    this.props.history.push({
      pathname: "/UOrderdetailsSuccess",
      query: { id: item.id },
    });
  };

  render() {
    const data = sessionStorage.getItem("myData3");
    console.log(data);

    let mdata = JSON.parse(data);
    return (
      <div>
        {mdata.map((item, index) => {
          return (
            <div key={index} onClick={() => this.SSu(item)}>
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
                  <div>配送员：{item.staffName}</div>
                  <div className="PersonCenter-SendSingle1">
                    <div>{item.agingCode}</div>
                  </div>
                </div>
                <div className="PersonCenter-ConsigneeTT">
                  <div>收货人：{item.consigneeName}</div>
                  <div className="PersonCenter-SendSingleTT">
                    <div>签收时间：{item.checkTime}</div>
                  </div>
                </div>
                <div className="PersonCenter-SignSituation">
                  <div>签收情况：{item.signIn}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(SignSuccessful);
