import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import '../../css/Uaudit/UAudit.css';

import { DatePicker, Form, Space,Button } from 'antd';
// import moment from 'moment';

import { Select } from 'antd';

import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

import Axios from "../../../src/util/Axios.js";

const layout = {
    // labelCol: { span: 8 },
    // wrapperCol: { span: 16 },
};

const tailLayout = {
    // wrapperCol: { offset: 8, span: 16 },
};

const { Option } = Select;

const dateFormat = 'YYYY-MM-DD';

class Audit extends Component {


    constructor(props) {
        super(props);

        this.state = {
            starTime:'',
            endTime:'',
            data: [],
            tt: "",
            userId: 1,
            myData: []
        }
    }



    //==========循环拿到的数据和div模板上去==============================================================

    //=====================================模糊查询=============================================



    onFinish= (values) => {

        values.userId = localStorage.getItem('id');
        values.starTime = this.state.starTime;
        values.endTime = this.state.endTime;

        // console.log(values.starTime);
        // console.log(this.state.endTime);
        console.log(values);
       

        Axios.post("/zhouzhouController/selectMyApplication", 
                values
     ).then(values => {
            console.log(values)
    

            let mylite = values.data.data.map((item, index) => {
                return (
                    <div className='AuditBox' key={index} onClick={() => { this.ToConfirm(this.item) }} arr={this.state.data}>
                        <p>
                            <span className='AuditMsg'>订单编号：{item.orderId}</span>
                            <span className='AuditGettime'>{item.checkStatus}</span>
                        </p>
                        <hr className='line'></hr>
                        <p className='AuditMsg' >门店：{item.siteName}</p>
                        <p id='AuditConsignee'>
                            <span className='AuditMsg'>收货人：{item.consigneeName}</span>
                            <span className='AuditGettime'>提交时间：{item.streamTime}</span>
                        </p>
                        <div className='Hline'></div>
                       
                    </div>
                )
            })
            console.log(mylite);
            this.setState({
                tt: mylite
            })

        })
    }



    //==================================请求用户信息数据==========================================
    componentDidMount() {
        this.getDistribution()

    }
    getDistribution() {


        Axios.post("/zhouzhouController/selectMyApplication", { userId:localStorage.getItem('id') }).then(userId => {
            console.log(userId)
           
            let mylite = userId.data.data.map((item, index) => {
                return (
                    <div className='AuditBox' key={index} onClick={() => { this.ToConfirm(item) }} arr={this.state.data}>
                        <p>
                            <span className='AuditMsg'>订单编号：{item.orderId}</span>
                            <span className='AuditGettime'>{item.checkStatus}</span>
                        </p>
                        <hr className='line'></hr>
                        <p className='AuditMsg' >门店：{item.siteName}</p>
                        <p id='AuditConsignee'>
                            <span className='AuditMsg'>收货人：{item.consigneeName}</span>
                            <span className='AuditGettime'>提交时间：{item.streamTime}</span>
                        </p>
                        <div className='Hline'></div>
                    </div>
                )
            })
            console.log(mylite);
            this.setState({
                tt: mylite
            })

        })

    }
    //=============================================================================



    getStarTime = (val, datastring) => {
        console.log(datastring);
        this.setState({
            starTime:datastring
        })
    }
    getEndTime = (val, datastring) => {
        console.log(datastring);
        this.setState({
            endTime:datastring
        })
    }




    //=============跳转页面并传参====================================================
    ToConfirm(val) {
        this.props.history.push({
            pathname:'/AuditWaiting',
            state:{
                item:val
            }
        })

    }
    //=============判断跳转页面====================================================






    render() {

        return (
            <div id='allAudit'>
              <div id='AuditTitle'>
                <div className='Head' >
                    <Link to='/PrsonalCenter' ><LeftOutlined className='Font' style={{ color: 'rgb(251, 251, 251)' }} /></Link>
                    <span className='HeadTite'>我的申请</span>
                </div>

                <Form
                    {...layout}
                    id="DistributionTop-search"
                    name="DistributionTop-search"
                    onFinish={this.onFinish}
                >
                    <Form.Item label="" htmlFor="ftime" name={`starTime`} className='DatePickerOne'>
                            <Space direction="vertical">
                                <DatePicker onChange={this.getStarTime} format={dateFormat} style={{ width: 115 }} locale={locale} />
                            </Space>                       
                    </Form.Item>

                    <Form.Item  htmlFor="ftime" name={`endTime`} className='DatePickerTwo'>
                            <Space direction="vertical" >
                                <DatePicker onChange={this.getEndTime} format={dateFormat} style={{ width: 115 }} locale={locale} />
                            </Space>
                    </Form.Item>

                    <Form.Item label="" htmlFor="ftime" name={`checkStatus`} className='DatePickerTwo'>
                        <Select
                            style={{ width: 100 }}
                        >
                            <Option value="待审核">待审核</Option>
                            <Option value="审核成功">审核成功</Option>
                            <Option value="审核失败">审核失败</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item  {...tailLayout} className='DatePickerThere' >
                        <Button htmlType="submit"    className='DatePickerBtn' >冲</Button>
                    </Form.Item>
                </Form>
                </div>
                <div id='AuditBox'>
                    {this.state.tt}
                </div>

            </div>
        )
    }
}

export default Audit 