import React, {useEffect, useState} from 'react';


const OrderStatus = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://smartdashboardapi.azurewebsites.net/OrderTable');
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
   <table class="table border-none">
                            <tbody>
                                <tr>
                                    <td className='th'>Customer Name</td>
                                    <td>{item.customer_Name}</td>

                                </tr>
                                <tr>
                                    <td className='th'>Product Color</td>
                                    <td>{item.color}</td>

                                </tr>
                                <tr>
                                    <td className='th'>Product Quantity</td>
                                    <td>{item.quantity}</td>

                                </tr>
                                <tr>
                                    <td className='th'>Current Status</td>
                                    <td>{item.current_status}</td>

                                </tr>
                            </tbody>
                        </table>
                            ))}
   </>
  )
}

export default OrderStatus