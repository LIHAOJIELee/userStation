import React, {Component} from 'react'

import {Link} from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import  '../../css/Uaudit/UAudit.css';
import a from '../../images/1.png'
import b from '../../images/2.png'


class AuditWaiting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:''
        }
 
    }
    componentDidMount(){
        console.log(this.props.location.state.item);
        this.setState({
            data:this.props.location.state.item
        })
    }
    render() {
        

        return (

            <div>
                {/* {
                    this.props.arr.map(item => { //这个地方通过this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
                        // return (
                        //     <li key={item.userName}>
                        //         {item.userName} 评论是:{item.text}
                        //     </li>
                        // )
                    })
                } */}
    
               <div className='Head' >
                    <Link to='/Audit' ><LeftOutlined  className='Font' style={{color:'rgb(251, 251, 251)'}}/></Link> 
                    <span className='HeadTite'>订单详情</span>
                </div>

                <div>
                    <div className='AuditWaitingTop'> 
                        <div>
                            <p className='AuditWaitingRightText'>{this.state.data.cashNumber}</p>  
                            <p className='AuditWaitingRight'>排序列号</p>  
                            <p className='AuditWaitingCenter'></p>                         
                        </div>
                    
                        <p className='AuditWaitingLeft'>{this.state.data.checkStatus}</p>
                        <p className='AuditWaitingtext'>提交时间：{this.state.data.streamTime}</p>

                       
                    </div>

                    <p className='AuditWaitingTite'> 订单编号:{this.state.data.orderId}</p>

                    <div className='AuditWaitingPage'>
                        <img src={a} className='AuditWaitingPaget'  />
                        <div className='AuditWaitingPager'>
                            <p>收件人：{this.state.data.consigneeName}</p>
                            <p>电话：{this.state.data.consigneePhoneNumber}</p>
                            <p>备用电话：{this.state.data.standbyPhoneNumber}</p> 
                            <p>收货地址：{this.state.data.consigneeAddress}</p>
                        </div>  
                        
                    </div>

                    <div className='AuditWaitingButn'>
                        <p>购买凭证：</p>
                        <img src={b}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuditWaiting 