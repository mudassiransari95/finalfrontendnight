import React from "react";
import { Link } from "react-router-dom";

const ExpList = ({ type }) => {
  const data = [
    {
      id: 1,
      category: "0000002",
      jan: "$0.00",
      feb: "$0.00",
      mar: "$0.00",
      apr: "$0.00",
      may: "$0.00",
      jun: "$0.00",
      jul: "$1,477.00",
      aug: "$0.00",
      sep: "$0.00",
      oct: "$0.00",
      nov: "$0.00",
      dec: "$0.00",
      total: "$1,477.00",
    },
    {
      id: 2,
      category: "0000003",
      jan: "$0.00",
      feb: "$0.00",
      mar: "$0.00",
      apr: "$0.00",
      may: "$0.00",
      jun: "$0.00",
      jul: "$0.00",
      aug: "$0.00",
      sep: "$0.00",
      oct: "$0.00",
      nov: "$0.00",
      dec: "$0.00",
      total: "$0.00",
    },
    {
      id: 3,
      category: "Others Expenses",
      jan: "$0.00",
      feb: "$0.00",
      mar: "$0.00",
      apr: "$0.00",
      may: "$0.00",
      jun: "$0.00",
      jul: "$0.00",
      aug: "$2,000.00",
      sep: "$0.00",
      oct: "$0.00",
      nov: "$0.00",
      dec: "$0.00",
      total: "$2,000.00",
    },
  ];

  const totalRow = [
    {
      id: 1,
      categoryTot: "Total",
      janTot: "$0.00",
      febTot: "$0.00",
      marTot: "$0.00",
      aprTot: "$0.00",
      mayTot: "$0.00",
      junTot: "$0.00",
      julTot: "$1,477.00",
      augTot: "$2,000.00",
      sepTot: "$0.00",
      octTot: "$0.00",
      novTot: "$0.00",
      decTot: "$0.00",
      total: "$3,477.00", // Sum of all totals
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
                <h4 className="card-title">EXPENSE LIST</h4>
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
                    <h2>$3,477.00</h2>
                    <h5>Total Expense</h5>
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
                  <Link className="btn btn-outline-secondary" to="/addexpense">
                    Create Expense
                  </Link>
                </div>

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
                          <td>{item.jan}</td>
                          <td>{item.feb}</td>
                          <td>{item.mar}</td>
                          <td>{item.apr}</td>
                          <td>{item.may}</td>
                          <td>{item.jun}</td>
                          <td>{item.jul}</td>
                          <td>{item.aug}</td>
                          <td>{item.sep}</td>
                          <td>{item.oct}</td>
                          <td>{item.nov}</td>
                          <td>{item.dec}</td>
                          <td>{item.total}</td>
                        </tr>
                      ))}
                      {totalRow.map((total) => (
                        <tr
                          style={{ backgroundColor: "rgb(252,217,166)" }}
                          key={total.id}
                        >
                          <td style={{ backgroundColor: "orange" }}>
                            {total.categoryTot}
                          </td>
                          <td>{total.janTot}</td>
                          <td>{total.febTot}</td>
                          <td>{total.marTot}</td>
                          <td>{total.aprTot}</td>
                          <td>{total.mayTot}</td>
                          <td>{total.junTot}</td>
                          <td>{total.julTot}</td>
                          <td>{total.augTot}</td>
                          <td>{total.sepTot}</td>
                          <td>{total.octTot}</td>
                          <td>{total.novTot}</td>
                          <td>{total.decTot}</td>
                          <td>{total.total}</td>
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
  );
};

export default ExpList;
