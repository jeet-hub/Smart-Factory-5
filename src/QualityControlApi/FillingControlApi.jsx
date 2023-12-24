import React, {useEffect, useState} from 'react';

const FillingControlApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://smartdashboardapi.azurewebsites.net/Quality_Control_Filling');
          if (response.ok) {
            const jsonData = await response.json();
            setData(jsonData);
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!data) {
      return <p>No data available.</p>;
    }
  return (
    <>
     {data.map((item) => (
    <div className="card-box mt-3 pb-5">
                <div className="card-header-name">
                <h6 className='bar-header-2'>Filling Unit Control</h6>
                <img style={{width:"80%", height:"1px", marginBottom:"10px"}} src="./img/hr-line.png" alt="hr-line" />
                {/* <img src="./img/bada.png" alt="btnn" style={{width:"30px"}}/> */}
                </div>
                {/* 3 charts  */}
                <div className="cota-box row">
                    <div className="col-6">
                    <p className='order-name'>Camera Feed</p>
                        <div className="video-futez img-items">
                        {/* <img className='loading-img' src="./img/loading-unit.svg" alt="machine1" /> */}
                       
                        </div>
                    </div>
                    <div className="col-1">
                    <div className="">
                    <img style={{ height: "250px" }} src="./img/line3.svg" alt="line" />
                        </div>
                    </div>

                    <div className="col-5">
                       <div className="quality-control-button">
                       {/* <p className='order-name'>Camera Feed</p> */}
                        <button className='qcbtn'>{item.product_Status}</button>
                          <div className="row color-main-box">
                            <div className="col color-box">
                                <p className='color-p'>Colour Expected</p>
                                <div className="color-1">
                                    
                                </div>
                            </div>
                            <div className="col color-box">
                                <p className='color-p'>Colour Expected</p>
                                <div className="color-2">
                                    
                                </div>
                            </div>
                          </div>
                            <br /> <br />
                           <p className='order-name'>Result</p>
                        <button className='qcbtn'>{item.final_Result}</button>
                       </div>
                    </div>
                
                </div>
            </div>
            ))}
    </>
  )
}

export default FillingControlApi