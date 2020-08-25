import React, {Component} from 'react'
import {Radio } from 'antd'
import { LeftOutlined} from '@ant-design/icons';
import '../../css/wmx-css/wmx-Menshop.css'
class Menshop extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:1
        }
    }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };
    goback=() =>{
        this.props.history.push({
            pathname:"/S_Index",
            query:{value:this.state.value}
        });
        console.log(this.state.value)
    };
    render() {
        return (
            <div id='menshop'>
                <div className="wmx-top">
                    <span className="wmx-L" onClick={() =>this.goback()}>
                    <LeftOutlined/>
                    </span>
                    <div className="wmx_s"> 首页</div>
                </div>
                <Radio.Group onChange={this.onChange} value={this.state.value} className="wmx-check">
                    <div>
                        <Radio value={"青羊店"}><span className="wmx-wu">青羊店</span></Radio>
                    </div>
                    <div>
                        <Radio value={'武侯店'}><span className="wmx-wu">武侯店</span></Radio>
                    </div>
                </Radio.Group>
            </div>
        )
    }
}

export default Menshop