import React from 'react';
import TopNav from '../components/TopNav';
import LoadingUnitControl from '../QualityControlApi/LoadingUnitControl';
import FillingControlApi from '../QualityControlApi/FillingControlApi';
import DispatchControl from '../QualityControlApi/DispatchControl';

const QualityControl = () => {

    const imageUrl = 'https://testdataimage.blob.core.windows.net/sumit/New.png';
    return (
        <>
        <div className="ccc">
            {/* <h1>QualityControl page</h1> */}
            <TopNav name="Quality Control System"/>
           <LoadingUnitControl/>

            {/* 2 line  */}

            <FillingControlApi/>
             {/* 3rd line  */}

            <DispatchControl/>
             
            </div>
        </>
    );
};

export default QualityControl;