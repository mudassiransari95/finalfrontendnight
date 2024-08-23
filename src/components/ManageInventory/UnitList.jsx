import React, { useRef } from 'react';
// import DynamicList from './DynamicList';
import { message } from 'antd';
import DynamicList from '../common/DynamicList';
import { Link } from 'react-router-dom';
import { FaFileCsv, FaFilePdf } from 'react-icons/fa6';
import { LuPrinter } from "react-icons/lu";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const UnitModule = () => {
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

  const apiEndpoint = 'http://localhost:8080/api/unit/getAllUnit';

  const tableFields = [
    { label: 'Name', key: 'name' },
    {
      label: 'Status',
      key: 'status',
      render: (status) => (
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" checked={status}  />
        </div>
      ),
    },
  ];

  const onEdit = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/api/unit/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add your edit data here */ }),
      });
      if (response.ok) {
        message.success('Item edited successfully');
      } else {
        message.error('Failed to edit item');
      }
    } catch (error) {
      message.error('Error occurred while editing item');
    }
  };

  const onDelete = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/api/unit/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        message.success('Item deleted successfully');
      } else {
        message.error('Failed to delete item');
      }
    } catch (error) {
      message.error('Error occurred while deleting item');
    }
  };

  return (
    <div>
    <div className="row" >
    <div style={{marginLeft:"50px",marginTop:"50px"}} className="col-11">
      <div className="card">
        <div className="card-content">
         
                <div style={{display:"flex"}} className="card-body titleHead">
            <h4  className="card-title">
            UNIT LIST                  
            </h4>
            <div style={{flexDirection: "row",
alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
<button type="button" class="btn btn-outline-primary">Unit list</button>
<button type="button" class="btn btn-outline-primary"><Link to="/createUnit">Add New Unit</Link></button>

</div>
          </div>
          <hr className='' />

          <div className='w-full  h-20 px-3  flex  justify-end gap-2 items-center'>
<LuPrinter onClick={handlePrint}  className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf}  className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>


</div>

          <div className='mt-2' style={{display:"flex"}}>
          <div style={{marginLeft:"10px",alignSelf:"center"}} class="dropdown mx-4">
<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
All result
</button>
<ul class="dropdown-menu">
<li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div>
<div>
<input type="text" class="form-control" placeholder="search"/>
</div>
          </div>
    
    <DynamicList
    tableone={"tableone"}
      apiEndpoint={apiEndpoint}
      tableFields={tableFields}
      onEdit={onEdit}
      onDelete={onDelete}
      navigateTo={"createUnit"}
    />
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default UnitModule;
