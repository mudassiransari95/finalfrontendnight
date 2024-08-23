import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LossProfit = () => {
const [currentyear, setcurrentyear] = useState('2024');
const onchange=(e)=>{
const year=e.target.value

setcurrentyear(year)

}
console.log('currentyear',currentyear)
const [dec, setdec] = useState();
const [nov, setnov] = useState();
const [oct, setoct] = useState();
const [sep, setsep] = useState();
const [jan, setjan] = useState();
const [feb, setfeb] = useState();
const [march, setmarch] = useState();
const [apr, setapr] = useState();
const [may, setmay] = useState();
const [june, setjune] = useState();
const [july, setjuly] = useState();
const [aug, setaug] = useState()
  const [alldata, setalldata] = useState([]);
  const handlegetyearmont=async()=>{
    const res=await fetch(`http://localhost:8080/api/getallshipmentyearmontdata/${currentyear}`,{
      method:'get',
      headers:{
        'content-type':'application/json'
      },
      //  body:JSON.stringify({year:currentyear})
    })
 const response=await res.json()
    console.log('shipment dataaaaaaaaaaaaaaaaaayearrrrrrrrrrrrr',response)
    setalldata(response.data)
    // const total = response.data.reduce((sum, ele) => sum + ele.TotalQty, 0);
    // settotalQty(total);
    const filterdata=response.data.filter((ele)=>ele.year===currentyear)
const august=filterdata.filter((ele)=>ele.month==="8")
    const total = august.reduce((sum, ele) => sum + ele.TotalQty, 0)
    console.log('total',total)
    setaug(total)
    const filterjuly=filterdata.filter((ele)=>ele.month==="7")
    const totaljuly = filterjuly.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setjuly(totaljuly)
    const filterjune=filterdata.filter((ele)=>ele.month==="6")
    const totaljune = filterjune.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setjune(totaljune)
    const filtermay=filterdata.filter((ele)=>ele.month==="5")
    const totalmay = filtermay.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setmay(totalmay)
    const filterapr=filterdata.filter((ele)=>ele.month==="4")
    const totalapr = filterapr.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setapr(totalapr)
    const filtermarch=filterdata.filter((ele)=>ele.month==="4")
    const totalmarch = filtermarch.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setmarch(totalmarch)
    const filterfeb=filterdata.filter((ele)=>ele.month==="4")
    const totalfeb = filterfeb.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setfeb(totalfeb)
    const filterjan=filterdata.filter((ele)=>ele.month==="4")
    const totaljan = filterjan.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setjan(totaljan)
    const filtersep=filterdata.filter((ele)=>ele.month==="4")
    const totalsep = filtersep.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setsep(totalsep)
    const filteroct=filterdata.filter((ele)=>ele.month==="4")
    const totaloct = filteroct.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setoct(totaloct)
    const filternov=filterdata.filter((ele)=>ele.month==="4")
    const totalnov = filternov.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setnov(totalnov)
    const filterdec=filterdata.filter((ele)=>ele.month==="4")
    const totaldec = filterdec.reduce((sum, ele) => sum + ele.TotalQty, 0)
    setdec(totaldec)
      }
//       let dataone=[]
//       for(let i=0;alldata.length-1;i++){
//         if(alldata.year===currentyear){

//             dataone.push[i]
//         }
// }
// console.log('dataone',dataone)
const [monthdataone, setmonthdataone] = useState([]);

// const filterdata=alldata.filter((ele)=>ele.year===currentyear)
// const monthdata=filterdata.filter((ele)=>ele.month==="8")
// setmonthdataone(monthdata)

// console.log('filterdata',filterdata)

      useEffect(()=>{
        handlegetyearmont()
      },[currentyear])
  const data = [
    {
      id: 1,
      category: "Shipment-QTY",
      jan:jan|| 0.00,
    
      feb: feb|| 0.00,
      mar:march|| 0.00,
      apr:apr|| 0.00,
      may: may||0.00,
      jun: june||0.0,
      jul: july,
      aug: aug,
      sep:sep|| 0.00,
      oct:oct|| 0.00,
      nov:nov|| 0.00,
      dec: dec|| 0.00,
      total:jan+feb+march+apr+may+june+aug+july+sep+oct+nov+dec // Total for the "Shipment-QTY" row
    },
    {
      id: 2,
      category: "Total CM",
      jan: 0.00,
      feb: 0.00,
      mar: 0.00,
      apr: 0.00,
      may: 0.00,
      jun: 12.00,
      jul: 1477.00,
      aug: 0.00,
      sep: 0.00,
      oct: 0.00,
      nov: 0.00,
      dec: 0.00,
      total: 1477.00, // Total for the "Total CM" row
    },
  ];

  const totalRow = [
    {
      id: 1,
      categoryTot: "Total",
      janTot: data.reduce((acc, curr) => acc + curr.jan, 0),
      febTot: data.reduce((acc, curr) => acc + curr.feb, 0),
      marTot: data.reduce((acc, curr) => acc + curr.mar, 0),
      aprTot: data.reduce((acc, curr) => acc + curr.apr, 0),
      mayTot: data.reduce((acc, curr) => acc + curr.may, 0),
      junTot: data.reduce((acc, curr) => acc + curr.jun, 0),
      julTot: data.reduce((acc, curr) => acc + curr.jul, 0),
      augTot: data.reduce((acc, curr) => acc + curr.aug, 0),
      sepTot: data.reduce((acc, curr) => acc + curr.sep, 0),
      octTot: data.reduce((acc, curr) => acc + curr.oct, 0),
      novTot: data.reduce((acc, curr) => acc + curr.nov, 0),
      decTot: data.reduce((acc, curr) => acc + curr.dec, 0),
      total: data.reduce((acc, curr) => acc + curr.total, 0), // Grand total for all rows
    },
  ];

  return (
    <div>
      <div className="row">
        <div
          style={{ marginLeft: "50px", marginTop: "50px" }}
          className="col-11"
        >
          <div className="card">
            <div className="card-content">
              <div style={{ display: "flex" }} className="card-body titleHead">
                <h4 className="card-title">LOSS/PROFIT</h4>
                <div
                  style={{ flexDirection: "row", alignItems: "baseline" }}
                  id="groupBtn"
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/lossprofit">Loss/Profit </Link>
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/expList">Expense List</Link>
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/incomeList">Income list</Link>
                  </button>
                </div>
              </div>
              <hr />

              <div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      height: "90px",
                      width: "215px",
                      marginTop: "30px",
                      marginBottom: "20px",
                      marginLeft: "20px",
                      backgroundColor: "rgb(207,239,250)",
                      border: "none",
                    }}
                    className="card"
                  >
                    <div className="card-body">
                      <h2>$18.800</h2>
                      <h5> Total Sale</h5>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "90px",
                      width: "215px",
                      marginTop: "30px",
                      marginBottom: "20px",
                      marginLeft: "20px",
                      backgroundColor: "rgb(250,232,207)",
                      border: "none",
                    }}
                    className="card"
                  >
                    <div className="card-body">
                      <h2>$18.800</h2>
                      <h5> Total Expense</h5>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "90px",
                      width: "215px",
                      marginTop: "30px",
                      marginBottom: "20px",
                      marginLeft: "20px",
                      backgroundColor: "rgb(207,250,230)",
                      border: "none",
                    }}
                    className="card"
                  >
                    <div className="card-body">
                      <h2>$18.800</h2>
                      <h5> Total Profit</h5>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "90px",
                      width: "215px",
                      marginTop: "30px",
                      marginBottom: "20px",
                      marginLeft: "20px",
                      backgroundColor: "rgb(250,207,213)",
                      border: "none",
                    }}
                    className="card"
                  >
                    <div className="card-body">
                      <h2>$18.800</h2>
                      <h5> Total Loss</h5>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: "10px",
                    alignSelf: "center",
                    marginBottom: "20px",
                  }}
                  className="dropdown mx-4"
                >
                  <select
                  
                   
          onChange={onchange}
              
                  >
                    This year
                  <option> 2024</option>
                  <option> 2023</option>
                  <option> 2022</option>

                  </select>
                 
                </div>

                <div className="table-responsive">
                  <table className="table mb-0  table-bordered">
                    <thead>
                      <tr>
                        <th>Revenue</th>
                        <th>January</th>
                        <th>February</th>
                        <th>March</th>
                        <th>April</th>
                        <th>May</th>
                        <th>June</th>
                        <th>July</th>
                        <th>August</th>
                        <th>September</th>
                        <th>October</th>
                        <th>November</th>
                        <th>December</th>
                        <th>TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td>{item.category}</td>
                          <td>${item.jan}</td>
                          <td>${item.feb}</td>
                          <td>${item.mar}</td>
                          <td>${item.apr}</td>
                          <td>${item.may}</td>
                          <td>${item.jun}</td>
                          <td>${item.jul}</td>
                          <td>${item.aug}</td>
                          <td>${item.sep}</td>
                          <td>${item.oct}</td>
                          <td>${item.nov}</td>
                          <td>${item.dec}</td>
                          <td>${item.total.toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>{totalRow[0].categoryTot}</td>
                        <td>${totalRow[0].janTot}</td>
                        <td>${totalRow[0].febTot}</td>
                        <td>${totalRow[0].marTot}</td>
                        <td>${totalRow[0].aprTot}</td>
                        <td>${totalRow[0].mayTot}</td>
                        <td>${totalRow[0].junTot}</td>
                        <td>${totalRow[0].julTot}</td>
                        <td>${totalRow[0].augTot}</td>
                        <td>${totalRow[0].sepTot}</td>
                        <td>${totalRow[0].octTot}</td>
                        <td>${totalRow[0].novTot}</td>
                        <td>${totalRow[0].decTot}</td>
                        <td>${totalRow[0].total}</td>
                      </tr>
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

export default LossProfit;
