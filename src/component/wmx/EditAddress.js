import React, {Component} from 'react'


import {LeftOutlined} from '@ant-design/icons';
import "../../css/wmx-css/wmx-EditAddress.css"


import Axios from '../../util/Axios'
class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.input_Name =React.createRef();
        this.input_phone =React.createRef();
        this.input_bphone =React.createRef();
        this.input_address =React.createRef();
        this.input_meng =React.createRef();
        this.state ={
            // consigneeId:'',
            consigeeName:'',
            consigneePhoneNumber:'',
            standbyPhoneNumber:'',
            consigneeAddress:'',
            street:''
        }
    }
    goback =() =>{
        this.props.history.push({
            pathname:'/Address'
        })
    };
    saveAddress =() =>{
      console.log(this.input_Name.current.value);
      console.log(this.input_phone.current.value);
      console.log(this.input_bphone.current.value);
      console.log(this.input_address.current.value);
      console.log(this.input_meng.current.value);
      let Id =  localStorage.getItem('id')
      Axios.post('/address/add',{
          consigeeName:this.input_Name.current.value,
          consigneePhoneNumber:this.input_phone.current.value,
          standbyPhoneNumber:this.input_bphone.current.value,
          consigneeAddress:this.input_address.current.value,
          street:this.input_meng.current.value,
          userId:Id
      }).then((data) =>{
          console.log(data);
      })

    };
    render() {
        return (
            <div id='editAddress'>
                <div className="wmx-top">
                    <span className="wmx-L" onClick={() =>this.goback()}>
                    <LeftOutlined/>
                    </span>
                    <div className="wmx_s"> 添加收货地址</div>
                    <div className="wmx-R" onClick={() =>this.saveAddress()}>
                        保存
                    </div>
                </div>
                <div>联系人</div>
                <div className="wmx-ba">
                    <div className="wmx-lab">
                        <label>姓名：</label>
                        <input className="wmx-input" placeholder="请填写收货人的姓名" defaultValue={this.state.consigeeName}  ref={this.input_Name}/>
                    </div>
                    <div className="wmx-lab">
                        <label>手机：</label>
                        <input className="wmx-input" placeholder="请填写收货手机号码" defaultValue={this.state.consigneePhoneNumber} ref={this.input_phone}/>
                    </div>
                    <div className="wmx-lab">
                        <label>备用手机：</label>
                        <input placeholder="请填写备用收货手机号码" defaultValue={this.state.standbyPhoneNumber} ref={this.input_bphone}/>
                    </div>
                </div>
                <div>收货地址</div>
                <div className="wmx-ba">
                    <div className="wmx-lab">
                        <label>详细位置：</label>
                        <input className="wmx-input" placeholder="请填写详细位置" defaultValue={this.state.consigneeAddress} ref={this.input_address}/>
                    </div>
                    <div className="wmx-lab">
                        <label>详细位置：</label>
                        <input className="wmx-input" placeholder="楼号/门牌" defaultValue={this.state.street} ref={this.input_meng}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditAddress