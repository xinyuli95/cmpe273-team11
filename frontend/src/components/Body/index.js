import React from 'react';
import './index.css';
import Sidebar from './Sidebar';
import Main from './Main';

function index() {
  return (
    <div className="body__index">
        <div className="body__indexContent">
            <Sidebar />
            <Main />
        </div>
    </div>
  )
}

export default index