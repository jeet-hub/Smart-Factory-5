import React, {useEffect, useState} from 'react';

const Table1 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://smartdashboardapi.azurewebsites.net/Inventory');
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
     <table class="table tables-inv ">
                                            <tbody>
                                                <tr>
                                                    <th className='th-inv'>Inventory Position :  </th>
                                                    <td className='td-inv'>{item.inventoroy_position}</td>

                                                </tr>
                                                <tr>
                                                    <th className='th-inv'>Customer Name : </th>
                                                    <td className='td-inv'>{item.customer_Name}</td>

                                                </tr>
                                                <tr>
                                                    <th className='th-inv'>Product Color : </th>
                                                    <td className='td-inv'>{item.product_Color}</td>

                                                </tr>
                                                <tr>
                                                    <th className='th-inv'>Batch No : </th>
                                                    <td className='td-inv'>{item.batch_No}</td>

                                                </tr>
                                                <tr>
                                                    <th className='th-inv'>Delivery City : </th>
                                                    <td className='td-inv'>{item.delivery_city}</td>

                                                </tr>

                                            </tbody>
                                        </table>
                                         ))}
    </>
  )
}

export default Table1