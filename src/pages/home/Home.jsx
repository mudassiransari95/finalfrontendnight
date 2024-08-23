import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import {  useState } from "react";
import { Layout, Menu } from "antd";
import { Pie, PieChart } from "recharts";

const Home = (props) => {
  const {collapsed, setCollapsed} = props;

  return (
    <div className="home">
      <div className="homeContainer">
        {/* <Navbar  collapsed={collapsed} setCollapsed={setCollapsed} /> */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        
        </div>
        <div className="widgets">
          <Widget type="weekly" />
          <Widget type="monthly" />
          <Widget type="yearly" />
        
        </div>
        <div className="widgets">
          <Widget type="cash" />
          <Widget type="bank" />
          <Widget type="supplier" />
        
        </div>
        <div className="widgets">
          <Widget type="monthly exp" />
          <Widget type="debit" />
          <Widget type="credit" />
        
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={ 1} />
          <Featured />
        </div>
     
    
      </div>
    </div>
  );
};

export default Home;
