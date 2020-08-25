import React, {Component} from 'react'

import { LeftOutlined,UserOutlined} from '@ant-design/icons';
import '../../css/wmx-css/wmx-Await.css'
class Await extends Component {
    render() {
        return (
            <div id='await'>
                <div className="wmx-top">
                    <span className="wmx-L">
                    <LeftOutlined/>
                    </span>
                    <div className="wmx_s"> 首页</div>
                    <span className="wmx-R">
                     <UserOutlined/>
                    </span>
                </div>
                <div className="wmx-Await">
                    <div>你当前有订单正在审核中，排序号码为：18号，请注意站点喊号</div>
                </div>
            </div>
    )
    }
}

export default Await