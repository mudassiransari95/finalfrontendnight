import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Designations = () => {
    const data = [
        {
          id: 1,
          designation: 'rr',
          description:'PESO',
          action: <MoreVertIcon/>,
         }]

  return (
    <div>
       <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
              {/* <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                 DESIGNATION LIST
                  
                </h4>

                <div style={{marginTop:"100px",marginRight:"100px"}} class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                
                <div style={{marginLeft:"500px"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Designation list</button>
  <button type="button" class="btn btn-outline-primary">Add Designation</button>
 
</div>
              </div> */}
                    <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                DESIGNATION LIST                  
                </h4>
                <div style={{flexDirection: "row",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Designation list</button>
  <button type="button" class="btn btn-outline-primary">Add New Designation</button>
 
</div>
              </div>
              <hr />
              <div style={{display:"flex"}}>
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
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Designation</th>
                <th>Description</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.designation}</td>
                  <td>{item.description}</td>
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
  )
}

export default Designations
