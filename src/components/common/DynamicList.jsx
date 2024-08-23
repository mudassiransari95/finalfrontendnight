import React, { useEffect, useRef, useState } from 'react';
import { Dropdown, message, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FaFileCsv, FaFilePdf } from 'react-icons/fa6';
import { LuPrinter } from "react-icons/lu";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
const DynamicList = ({ apiEndpoint, tableone,tableFields, actions, onEdit, onDelete,navigateTo }) => {
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // print tablenmfnjidsgdf
 
  const handlePdf=async()=>{

    const doc = new jsPDF()
    doc.autoTable({ html: '.tableone' })
    doc.save('table.pdf')
  }

  
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let res = await fetch(apiEndpoint);
      let responseData = await res.json();
      setData(responseData?.allList || []);
    } catch (error) {
      message.error('Failed to fetch data');
    }
  }

  useEffect(() => {
    fetchData();
  }, [apiEndpoint]);
  const navigate = useNavigate();
  const handleMenuClick = async (key, id) => {
    if (key === '1' && onEdit) {
      navigate(`/${navigateTo}/${id}`);
    } else if (key === '2' && onDelete) {
      await onDelete(id);
      fetchData(); // Refresh data after delete
    }
  };

  const items = [
    {
      label: 'Edit',
      key: '1',
    },
    {
      label: 'Delete',
      key: '2',
    },
  ];

  return (
   <>
  
  
{/* search per page data  */}


 

{/* dngvkufsdhjklbnklgfhb */}

{/* seracvjdsfuifv */}


<div className='w-full h-10 flex justify-end'>
<div className='w-40 flex  justify-center gap-2 items-center'>
<LuPrinter onClick={handlePrint}  className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf}  className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>


</div>

</div>

  
              <div className="table-responsive">
                <table ref={componentRef} className="table tableone  mb-0">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      {tableFields.map((field) => (
                        <th key={field.key}>{field.label}</th>
                      ))}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item,index) => (
                      <tr key={item.id}>
                        <td>
                          {index+1}
                        </td>
                        {tableFields.map((field) => (
                          <td key={field.key}>
                            {field.render ? field.render(item[field.key]) : item[field.key]}
                          </td>
                        ))}
                        <td>
                          <Dropdown
                            menu={{
                              items,
                              onClick: ({ key }) => handleMenuClick(key, item._id),
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                <MoreOutlined />
                              </Space>
                            </a>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> 
              </>
  );
};

export default DynamicList;
