import React from 'react';
import '../src/css/normalize.css'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Plogin from "./page/Plogin";
import S_Index from "./page/S_Index";
import Await from "./component/wmx/Await";
import EditAddress from "./component/wmx/EditAddress";
import Menshop from "./component/wmx/Menshop";
import Address from "./component/wmx/Address";
import PrsonalCenter from "./component/UPersonalCenter/PrsonalCenter";
import ShippingOrder from './component/UPersonalCenter/ShippingOrder'
import SignFail from './component/UPersonalCenter/SignFail'
import SignSuccessful from './component/UPersonalCenter/SignSuccessful'
import WaitDeliver from './component/UPersonalCenter/WaitDeliver'
import Waiting from './component/UPersonalCenter/Waiting'




import UInformationCenter from './component/Uinformation/UInformationCenter'
import UInformationCenterx from './component/Uinformation/UInformationCenterx'
import UOrderdetailsDistribution from './component/Uinformation/UOrderdetailsDistribution'
import UOrderdetailsErr from './component/Uinformation/UOrderdetailsErr'
import UOrderdetailsProgress from './component/Uinformation/UOrderdetailsProgress'
import UOrderdetailsSuccess from './component/Uinformation/UOrderdetailsSuccess'


import Audit from './component/UAudit/Audit'
import AuditWaiting from './component/UAudit/AuditWaiting'

function App() {
  return (
    <div className="App" >
      <Switch >
        <Route path='/' exact render={() => <Redirect to={'/Plogin'} />} />
        <Route path="/Plogin" component={Plogin} />
        <Route path="/S_Index" component={S_Index} />
        <Route path="/Await" component={Await} />
        <Route path="/EditAddress" component={EditAddress} />
        <Route path="/Menshop" component={Menshop} />
        <Route path='/Address' component={Address} />

        //个人中心
        <Route path='/PrsonalCenter' component={PrsonalCenter} />
        <Route path='/ShippingOrder' component={ShippingOrder} />
        <Route path='/SignFail' component={SignFail} />
        <Route path='/SignSuccessful' component={SignSuccessful} />
        <Route path='/WaitDeliver' component={WaitDeliver} />
        <Route path='/Waiting' component={Waiting} />


        <Route path='/UInformationCenter' component={UInformationCenter} />
        <Route path='/UInformationCenterx' component={UInformationCenterx} />
        <Route path='/UOrderdetailsDistribution' component={UOrderdetailsDistribution} />
        <Route path='/UOrderdetailsErr' component={UOrderdetailsErr} />
        <Route path='/UOrderdetailsProgress' component={UOrderdetailsProgress} />
        <Route path='/UOrderdetailsSuccess' component={UOrderdetailsSuccess} />



        <Route path='/Audit' component={Audit} />
        <Route path='/AuditWaiting' component={AuditWaiting} />





      </Switch>
    </div>
  );
}

export default App;