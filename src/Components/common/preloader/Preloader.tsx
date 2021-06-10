import React from 'react';
import { Spin, Alert } from 'antd';

const Preloader:React.FC = (props) => {
    return <Spin tip="Loading...">
    </Spin>
};

export default Preloader;