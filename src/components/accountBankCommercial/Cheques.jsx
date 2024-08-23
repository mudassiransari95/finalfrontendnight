import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const Cheques = () => {
    const data = [
        {
          id: 1,
          issueDate: '20,june,2024',
          incExp:'PESO',
          partyName:'$12.00',
          bankName:'$12.00',
          amount:'$4002.00',
          type:'$4002.00',
          status:'$4002.00',
          action: <MoreVertIcon/>,
         }]
  return (
    <div>
         <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"60px"}} className="col-11">
          <div className="card">
            <div className="card-content">
          
                 <div  className="card-body titleHead">
   
                <h4 style={{marginTop:"50px"}} className="card-title">
                CHEQUES                   
                </h4>
                <div style={{flexDirection: "row",marginTop:"0px",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
     <button type="button" class="btn btn-outline-primary"  ><Link to="/admin"> Passed</Link></button>
     <button type="button" class="btn btn-outline-primary"  ><Link to="/admin">Unused</Link></button>
     
 
</div>
              </div>
              <hr />

              <div style={{marginLeft:"10px",alignSelf:"center", width:"200px"}}>
  <input type="text" class="form-control" placeholder="Search..."/>
</div>

<div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Issue Date</th>
                <th>Income/Expense</th>
                <th>Party Name</th>
                <th>Bank Name</th>
                <th>Amount</th>
               
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.issueDate}</td>
                  <td>{item.incExp}</td>
                  <td>{item.partyName}</td>
                  <td>{item.bankName}</td>
                  <td>{item.amount}</td>
                  <td>{item.type}</td>
                  <td>{item.status}</td>
                  <td>{item.action}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
</div>


        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cheques
