import React, {Component} from 'react'
import {LeftOutlined,PlusSquareOutlined ,RightOutlined } from "@ant-design/icons";
import '../../css/wmx-css/Address.css'
import Axios from '../../util/Axios'
class Address extends Component {
        constructor(props) {
            super(props);
            this.state ={

            };
        }
        Add =() =>{
            this.props.history.push({
                pathname:"/EditAddress"
            })
        };
        componentDidMount() {
            // let Id =  localStorage.getItem('id')
            // Axios.post('/address',{userId:Id}).then((data) =>{
            //     console.log(data);
            // })
        }
    getBack = () => {
            this.props.history.push('/S_Index')
    }
    render() {
        return (
            <div id="await">
                <div className="wmx-top">
                    <span className="wmx-L">
                    <LeftOutlined onClick={this.getBack}/>
                    </span>
                    <div className="wmx_s"> 地址</div>
                    <span className="wmx-R">编辑</span>
                </div>
                <div className='top'>
                        <span className="Add">
                             <PlusSquareOutlined/>
                        </span>
                        <span onClick={() =>this.Add()}>添加新的地址</span>
                        <span className="Left">
                           <RightOutlined />
                        </span>
                </div>
            </div>
        )
    }
}

export default Address