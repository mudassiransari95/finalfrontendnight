import React from 'react'
import { Link } from 'react-router-dom'

const Costingform = () => {
  return (
    <div className='w-auto h-auto pl-5 ' style={{height:"100vh"}}>
        
        {/* header */}
        <div className='head-box w-auto  flex flex-row justify-between mt-3'>
        <h2 className=' ms-3' style={{fontWeight:"bold",fontSize:"20px"}}>
        Costing Form

        </h2>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5 text-center'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none",fontSize:"15px"}}> 
<Link to='/costing' className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'>Costing List
</Link>
<Link to='/costingform'className='ordersummary h-10 w-40 pl-5 pt-2 text-white bg-purple-500'> Costing Form
</Link>
</div>
      </div>    


<form action=" mt-2" method="post" encType="multipart/form-data" className="table-form-section ajaxform_instant_reload" noValidate="novalidate">
  <input type="hidden" name="_token" defaultValue="dy7Io4NmCb3FoN4jPjbnostqHGBp0sCsZMpb7hYW"  />  
    <div className="col-4 mt-30">
    {/* <label>Select a order</label> */}
    <select className="select h-11 w-100  mt-5"style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected className='pl-2'>    Select Per Page
    </option>
    <option>0000005</option>
    <option >0000003</option>
    <option>0000002</option>
    <option>0000001</option>
</select>
   

    <select name="order_info[style]" required="required" className="form-control costing-style select-tow mb-30 w-100 style-dropdown-container mb-2 mt-3" style={{border:"1px solid black"}}>
      <option value>Style (Select Order First)</option>
    </select>
    
    <table className="table table-bordered small-table clr-black form-table-sm budget-form">
      <tbody><tr>
        </tr>
        <tr>
        </tr>
        <tr>
          <td>Party Name:</td>
          <td><input type="text" id="party_name" readOnly className="form-control" placeholder="Party Name" /></td>
        </tr>
        <tr>
          <td>Type:</td>
          <td><input type="text" id="party_type" readOnly className="form-control" placeholder="Party Type" /></td>
        </tr>
        <tr>
          <td>Order No</td>
          <td><input type="text" id="order_no" readOnly className="form-control datepicker" placeholder="Order No." /></td>
        </tr>
        <tr>
          <td>Fabrication</td>
          <td><input type="text" id="fabrication" readOnly className="form-control" placeholder="Fabrication" /></td>
        </tr>
        <tr className="all-hide">
          <td>Shipment Date</td>
          <td><input type="text" name="order_info[shipment_date]" id="shipment_date" readOnly className="form-control datepicker" placeholder="Shipment Date" /></td>
        </tr>
        <tr>
          <td>Total Order Qty</td>
          <td><input type="number" name="order_info[qty]" id="qty" readOnly className="form-control" /></td>
        </tr>
        <tr>
          <td>Unit Price</td>
          <td><input type="number" name="order_info[unit_price]" id="unit_price" readOnly className="form-control" /></td>
        </tr>
        <tr>
          <td>Total L/C Value</td>
          <td><input type="number" name="order_info[lc]" id="lc" readOnly className="form-control" /></td>
        </tr>
      </tbody></table>
  </div>
  <div className="responsive-table budget-form">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>items details</th>
          <th>yarn composition &amp; count</th>
          <th>type</th>
          <th>qty(KGS)</th>
          <th>unit</th>
          <th>price(KGS)</th>
          <th>total</th>
          <th>G. total</th>
          <th>Payment</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr className="position-relative">
          <td><div className="add-btn-one"><i className="fal fa-plus" aria-hidden="true" /></div></td>
          <td><div className="tr-remove-btn remove-one"><i className="fas fa-trash" /></div></td>
        </tr>
        <tr className="duplicate-one">
          <td><input type="text" name="yarn_desc[items][]" className="form-control clear-input" placeholder="Yarn" /></td>
          <td><input type="text" name="yarn_desc[composition][]" className="form-control clear-input" placeholder="Composition" /></td>
          <td><input type="text" name="yarn_desc[type][]" className="form-control clear-input" placeholder="Type" /></td>
          <td><input type="number" name="yarn_desc[qty][]" step="any" data-length={0} className="form-control count-total yarn-qty 0" placeholder={0} /></td>
          <td><input type="text" name="yarn_desc[unit][]" className="form-control clear-input" placeholder="Unit" /></td>
          <td><input type="number" name="yarn_desc[price][]" step="any" data-length={0} className="form-control count-total yarn-price 0" placeholder={0} /></td>
          <td><input type="number" name="yarn_desc[total][]" step="any" defaultValue={0} data-length={0} readOnly className="form-control yarn-total 0" placeholder="Total" /></td>
          <td rowSpan={1}><input type="number" name="yarn_desc[grand_total][]" step="any" readOnly className="form-control yarn-grand-total" /></td>
          <td><input type="text" name="yarn_desc[payment][]" className="form-control clear-input" placeholder="Payment" /></td>
          <td><input type="text" name="yarn_desc[remarks][]" className="form-control clear-input" placeholder="Remarks" /></td>
        </tr>
        <tr>
          <td colSpan={7} className="text-start"><b>Yarn</b></td>
          <td><input type="number" readOnly name="yarn_total" id="yarn_total" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr className="position-relative">
          <td><div className="add-btn-two"><i className="fal fa-plus" aria-hidden="true" /></div></td>
          <td><div className="tr-remove-btn remove-two"><i className="fas fa-trash" /></div></td>
        </tr>
        <tr className="duplicate-two">
          <td><input type="text" name="knitting_desc[items][]" className="form-control clear-input" placeholder="Knitting Type" /></td>
          <td><input type="text" name="knitting_desc[composition][]" className="form-control clear-input" placeholder="Composition" /></td>
          <td><input type="text" name="knitting_desc[type][]" className="form-control clear-input" placeholder="Type" /></td>
          <td><input type="number" name="knitting_desc[qty][]" step="any" data-length={0} className="form-control count-total knitting-qty 0" placeholder={0} /></td>
          <td><input type="text" name="knitting_desc[unit][]" className="form-control clear-input" placeholder="Unit" /></td>
          <td><input type="number" name="knitting_desc[price][]" step="any" data-length={0} className="form-control count-total knitting-price 0" placeholder={0} /></td>
          <td><input type="number" name="knitting_desc[total][]" step="any" defaultValue={0} data-length={0} readOnly className="form-control knitting-total 0" placeholder="Total" /></td>
          <td><input type="number" name="knitting_desc[grand_total][]" step="any" readOnly className="form-control" /></td>
          <td><input type="text" name="knitting_desc[payment][]" className="form-control clear-input" placeholder="Payment" /></td>
          <td><input type="text" name="knitting_desc[remarks][]" className="form-control clear-input" placeholder="Remarks" /></td>
        </tr>
        <tr>
          <td colSpan={7} className="text-start"><b>Knitting Type</b></td>
          <td><input type="number" readOnly name="knitting_total" id="knitting_total" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr className="position-relative">
          <td><div className="add-btn-three"><i className="fal fa-plus" aria-hidden="true" /></div></td>
          <td><div className="tr-remove-btn remove-three"><i className="fas fa-trash" /></div></td>
        </tr>
        <tr className="duplicate-three">
          <td><input type="text" name="dyeing_desc[items][]" className="form-control clear-input" placeholder="Dyeing & Finishing" /></td>
          <td><input type="text" name="dyeing_desc[composition][]" className="form-control clear-input" placeholder="Composition" /></td>
          <td><input type="text" name="dyeing_desc[type][]" className="form-control clear-input" placeholder="Type" /></td>
          <td><input type="number" step="any" name="dyeing_desc[qty][]" data-length={0} className="form-control count-total dyeing-qty 0" placeholder={0} /></td>
          <td><input type="text" name="dyeing_desc[unit][]" className="form-contro clear-input" placeholder="Unit" /></td>
          <td><input type="number" step="any" name="dyeing_desc[price][]" data-length={0} className="form-control count-total dyeing-price 0" placeholder={0} /></td>
          <td><input type="number" step="any" name="dyeing_desc[total][]" defaultValue={0} data-length={0} readOnly className="form-control dyeing-total 0" placeholder="Total" /></td>
          <td><input type="number" step="any" name="dyeing_desc[grand_total][]" readOnly className="form-control" /></td>
          <td><input type="text" name="dyeing_desc[payment][]" className="form-control clear-input" placeholder="Payment" /></td>
          <td><input type="text" name="dyeing_desc[remarks][]" className="form-control clear-input" placeholder="Remarks" /></td>
        </tr>
        <tr>
          <td colSpan={7} className="text-start"><b>Dyeing &amp; Finishing</b></td>
          <td><input type="number" readOnly name="dyeing_total" id="dyeing_total" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr className="position-relative">
          <td><div className="add-btn-four"><i className="fal fa-plus" aria-hidden="true" /></div></td>
          <td><div className="tr-remove-btn remove-four"><i className="fas fa-trash" /></div></td>
        </tr>
        <tr className="duplicate-four">
          <td><input type="text" name="print_desc[items][]" className="form-control clear-input" placeholder="Print/Embo" /></td>
          <td><input type="text" name="print_desc[composition][]" className="form-control clear-input" placeholder="Composition" /></td>
          <td><input type="text" name="print_desc[type][]" className="form-control clear-input" placeholder="Type" /></td>
          <td><input type="number" step="any" name="print_desc[qty][]" data-length={0} className="form-control count-total print-qty 0" placeholder={0} /></td>
          <td><input type="text" name="print_desc[unit][]" className="form-control clear-input" placeholder="Unit" /></td>
          <td><input type="number" step="any" name="print_desc[price][]" data-length={0} className="form-control count-total print-price 0" placeholder={0} /></td>
          <td><input type="number" step="any" name="print_desc[total][]" defaultValue={0} data-length={0} readOnly className="form-control print-total 0" placeholder="Total" /></td>
          <td><input type="number" step="any" name="print_desc[grand_total][]" readOnly className="form-control" /></td>
          <td><input type="text" name="print_desc[payment][]" className="form-control clear-input" placeholder="Payment" /></td>
          <td><input type="text" name="print_desc[remarks][]" className="form-control clear-input" placeholder="Remarks" /></td>
        </tr>
        <tr>
          <td colSpan={7} className="text-start"><b>Print/Embo</b></td>
          <td><input type="number" readOnly name="print_total" id="print_total" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr className="position-relative">
          <td><div className="add-btn-five"><i className="fal fa-plus" aria-hidden="true" /></div></td>
          <td><div className="tr-remove-btn remove-five"><i className="fas fa-trash" /></div></td>
        </tr>
        <tr className="duplicate-five">
          <td><input type="text" name="trim_desc[items][]" className="form-control clear-input" placeholder="Trims & Accessories" /></td>
          <td><input type="text" name="trim_desc[composition][]" className="form-control clear-input" placeholder="Composition" /></td>
          <td><input type="text" name="trim_desc[type][]" className="form-control clear-input" placeholder="Type" /></td>
          <td><input type="number" step="any" name="trim_desc[qty][]" data-length={0} className="form-control count-total trim-qty 0" placeholder={0} /></td>
          <td><input type="text" name="trim_desc[unit][]" className="form-control clear-input" placeholder="Unit" /></td>
          <td><input type="number" step="any" name="trim_desc[price][]" data-length={0} className="form-control count-total trim-price 0" placeholder={0} /></td>
          <td><input type="number" step="any" name="trim_desc[total][]" defaultValue={0} data-length={0} readOnly className="form-control trim-total 0" placeholder="Total" /></td>
          <td><input type="number" step="any" name="trim_desc[grand_total][]" readOnly className="form-control" /></td>
          <td><input type="text" name="trim_desc[payment][]" className="form-control clear-input" placeholder="Payment" /></td>
          <td><input type="text" name="trim_desc[remarks][]" className="form-control clear-input" placeholder="Remarks" /></td>
        </tr>
        <tr>
          <td className="text-start"><b>Trims &amp; Accessories</b></td>
          <td colSpan={6} />
          <td><input type="number" readOnly name="trim_total" id="trim_total" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr>
          <td className="text-start"><b>Commercial Cost</b></td>
          <td colSpan={2} />
          <td><input type="number" step="any" name="commercial_qty" className="form-control commercial-total commercial-qty" placeholder={0} /></td>
          <td><input type="text" name="commercial_unit" className="form-control" placeholder="Unit" /></td>
          <td><input type="number" step="any" name="commercial_price" className="form-control commercial-total commercial-price" placeholder={0} /></td>
          <td><input type="number" step="any" name="commercial_total" id="commercial_total" defaultValue={0} readOnly className="form-control" placeholder="Total" /></td>
          <td><input type="number" readOnly defaultValue={0} className="form-control commercial-grand-total fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr>
          <td className="text-start"><b>CM Cost/DZ.</b></td>
          <td colSpan={2}><input type="text" name="cm_cost_composition" className="form-control" placeholder="Long Pant-1 Styles" /></td>
          <td><input type="number" step="any" name="cm_cost_qty" className="form-control cm-total cm-qty" placeholder={0} /></td>
          <td><input type="text" name="cm_cost_unit" className="form-control" placeholder="Unit" /></td>
          <td><input type="number" step="any" name="cm_cost_price" className="form-control cm-total cm-price" placeholder={0} /></td>
          <td><input type="number" step="any" name="cm_cost_total" id="cm_cost_total" defaultValue={0} readOnly className="form-control" placeholder="Total" /></td>
          <td><input type="number" readOnly defaultValue={0} className="form-control cm-grand-total fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr>
          <td colSpan={7} />
          <td><input type="number" readOnly name="grand_total" id="grand_total" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
        <tr>
          <td colSpan={7} className="text-end text-uppercase"><b>Total Costing Per DZ Fob</b></td>
          <td><input type="number" readOnly name="grand_total_in_dzn" id="grand_total_in_dzn" defaultValue={0} className="form-control fw-semibold text-center" /></td>
          <td colSpan={2} />
        </tr>
      </tbody>
    </table>
  </div>
  <div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
                <button className=' btn btn-join w-48 h-11 bg-white' style={{ borderRadius: "5px", border: "1px solid black" }}>Reset</button>
                <button className='w-48 h-11 text-white bg-purple-500' style={{ borderRadius: "5px" }}>Save</button>

            </div>
</form>

    </div>
  )
}

export default Costingform
