import React from "react";
import { Link } from "react-router-dom";

const IncomeList = () => {
  const data = [
    {
      id: 1,
      category: "0000002",
      jan: 0.00,
      feb: 0.00,
      mar: 0.00,
      apr: 0.00,
      may: 0.00,
      jun: 0.00,
      jul: 8100.00,
      aug: 0.00,
      sep: 0.00,
      oct: 0.00,
      nov: 0.00,
      dec: 0.00,
      total: 8100.00, // Total for the "0000002" row
    },
    {
      id: 2,
      category: "0000003",
      jan: 0.00,
      feb: 0.00,
      mar: 0.00,
      apr: 0.00,
      may: 0.00,
      jun: 0.00,
      jul: 0.00,
      aug: 0.00,
      sep: 27500.00,
      oct: 0.00,
      nov: 0.00,
      dec: 0.00,
      total: 27500.00, // Total for the "0000003" row
    },
  ];

  const totalRow = [
    {
      id: 1,
      categoryTot: "Total",
      janTot: data.reduce((acc, curr) => acc + curr.jan, 0).toFixed(2),
      febTot: data.reduce((acc, curr) => acc + curr.feb, 0).toFixed(2),
      marTot: data.reduce((acc, curr) => acc + curr.mar, 0).toFixed(2),
      aprTot: data.reduce((acc, curr) => acc + curr.apr, 0).toFixed(2),
      mayTot: data.reduce((acc, curr) => acc + curr.may, 0).toFixed(2),
      junTot: data.reduce((acc, curr) => acc + curr.jun, 0).toFixed(2),
      julTot: data.reduce((acc, curr) => acc + curr.jul, 0).toFixed(2),
      augTot: data.reduce((acc, curr) => acc + curr.aug, 0).toFixed(2),
      sepTot: data.reduce((acc, curr) => acc + curr.sep, 0).toFixed(2),
      octTot: data.reduce((acc, curr) => acc + curr.oct, 0).toFixed(2),
      novTot: data.reduce((acc, curr) => acc + curr.nov, 0).toFixed(2),
      decTot: data.reduce((acc, curr) => acc + curr.dec, 0).toFixed(2),
      total: data.reduce((acc, curr) => acc + curr.total, 0).toFixed(2), // Grand total for all rows
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
                <h4 className="card-title">INCOME LIST</h4>
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
                <div
                  style={{
                    height: "100px",
                    width: "300px",
                    marginTop: "30px",
                    marginBottom: "20px",
                    marginLeft: "20px",
                    backgroundColor: "rgb(250,232,207)",
                    border: "none",
                  }}
                  className="card"
                >
                  <div className="card-body">
                    <h2>$35,600.00</h2>
                    <h5>Total income</h5>
                  </div>
                </div>

                <div
                  style={{
                    marginLeft: "10px",
                    alignSelf: "center",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="dropdown mx-4"
                >
                  <div>
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      This year
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          2024
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2023
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          2022
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Link className="btn btn-outline-secondary" to="/addincome">
                    Create Income
                  </Link>
                </div>

                <table className="table ">
                  <div className="table-responsive">
                    <table className="table mb-0  table-bordered">
                      <thead>
                        <tr>
                          <th>Category</th>
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
                          <td>${item.jan.toFixed(2)}</td>
                          <td>${item.feb.toFixed(2)}</td>
                          <td>${item.mar.toFixed(2)}</td>
                          <td>${item.apr.toFixed(2)}</td>
                          <td>${item.may.toFixed(2)}</td>
                          <td>${item.jun.toFixed(2)}</td>
                          <td>${item.jul.toFixed(2)}</td>
                          <td>${item.aug.toFixed(2)}</td>
                          <td>${item.sep.toFixed(2)}</td>
                          <td>${item.oct.toFixed(2)}</td>
                          <td>${item.nov.toFixed(2)}</td>
                          <td>${item.dec.toFixed(2)}</td>
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
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeList;
