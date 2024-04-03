import React from 'react'
import Topbar from './shared/Topbar'
import Sidebar from './shared/Sidebar'
import Dashboardroutes from './Router/Dashboardroutes'
import './cdindex.css';

function cdash() {
  return (
    <div>
      <Topbar />
        <div className="app">
          <Sidebar>
            <Dashboardroutes />
          </Sidebar>
        </div>
    </div>
  )
}

export default cdash;
