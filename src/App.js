import React, { useContext, useRef } from 'react'
import Home from "./pages/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AccessoryList from "./components/ManageInventory/AccessoryList";
import CreateUnitt from "./components/ManageInventory/CreateUnitt";
import CreateInventory from "./components/ManageInventory/CreateAccessory";
import CreateAccessory from "./components/ManageInventory/CreateAccessory";
import CreateAccOrder from "./components/ManageInventory/CreateAccOrder";
import AccorderList from "./components/ManageInventory/AccorderList";
import Admin from "./components/userManagement/Admin";
import AddNewAdmin from "./components/userManagement/AddNewAdmin";
import Buyer from "./components/userManagement/Buyer";
import AddBuyer from "./components/userManagement/AddBuyer";
import Merchandiser from "./components/userManagement/Merchandiser";
import AddMerchandiser from "./components/userManagement/AddMerchandiser";
import CommercialList from "./components/userManagement/CommercialList";
import AddCommercial from "./components/userManagement/AddCommercial";
import Accountant from "./components/userManagement/Accountant";
import { useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import UnitList from "./components/ManageInventory/UnitList";
import Designations from "./components/HRMmanagement/Designations";
import Employees from "./components/HRMmanagement/Employees";
import AddEmployee from "./components/HRMmanagement/AddEmployee";
import './App.css'
import PayS from "./components/HRMmanagement/PayS";
import SalaryList from "./components/HRMmanagement/SalaryList";
import AddAccountant from "./components/userManagement/AddAccountant";
import BuyerDue from './components/Report/BuyerDue';
import MyProfile from './components/Report/MyProfile';
import Order from './components/Report/Order';
import Production from './components/Report/Production';
import PurchaseReport from './components/Report/PurchaseReport';
import SalesReport from './components/Report/SalesReport';
import Transaction from './components/Report/Transaction';
import Permission from './components/Permission/Permission';
import Role from './components/Permission/Role';
import CompanySetting from './components/Setting/CompanySetting';
import Currency from './components/Setting/Currency';
import Notification from './components/Setting/Notification';
import SystemSetting from './components/Setting/SystemSetting';
import Login from './components/login/Login';
import Forgotpassword from './components/login/ForgotPassword';
import Ordersummary from './orderManagement/Order_List/OrderSummary';
import AddNeworder from './orderManagement/Order_List/AddNewOrder';
import Booklist from './orderManagement/Order_List/Booking_list/Booklist';
import Addnewbudget from './orderManagement/Order_List/Budget_list/Addnewbudget';
import Costinglist from './orderManagement/Order_List/costing/Costing_list';
import Orderlist from './orderManagement/Order_List/sample/Orderlist';
import Shipmentslist from './orderManagement/Order_List/shipment_list/Shipment-list';
import Addbuyer from './party_List/AddBuyer';
import Supplierlist from './party_List/Supplierlist';
import Allbuyerduelist from './Party_Due_list/AllbuyerDuelist';
import ProductionList from './components/userManagement/Productionlist';
import AddProd from './components/userManagement/AddnewProduction';

import Add_New_Booking from "./orderManagement/Order_List/Booking_list/Add_New_Booking";
import Budget_list from "./orderManagement/Order_List/Budget_list/Budget_list";
import Costingform from "./orderManagement/Order_List/costing/Costingform";
import Samplelist from "./orderManagement/Order_List/sample/Samplelist";
import Addnewsample from "./orderManagement/Order_List/sample/Addnewsample";
import Addnewshipmentlist from "./orderManagement/Order_List/shipment_list/Addnewshipmentlist";
import ExpList from './components/LossAndProfit/Loss/ExpenseList';
import LossProfit from './components/LossAndProfit/Loss/LossProfit';
import IncomeList from './components/LossAndProfit/Loss/IncomeList';
import Incomelist from './Party_Due_list/Incomelist';
import Adddnewincomecategory from './Party_Due_list/Addnewincomecategory';
import Createcredit from './Party_Due_list/CreateCredit';
import SearchSamplelist from './orderManagement/Order_List/sample/SearchSamplelist';
import Buyerlist from './party_List/Buyer';
import Createaddsupplier from './Party_Due_list/CreateAddsupplier';
import Addnewbuyer from './party_List/AddBuyer'
import SupplierDue from './components/Report/SupplierDue';
import BankAccount from "./components/accountBankCommercial/BankAccount";

import CashInHand from "./components/accountBankCommercial/CashInHand";
import Cheques from "./components/accountBankCommercial/Cheques";
import AddExpense from "./components/LossAndProfit/Loss/AddExpense";
import AddIncome from "./components/LossAndProfit/Loss/AddIncome";
import Creditvoucher from "./Party_Due_list/Creditvoucher";
import Debitvoucher from "./Party_Due_list/Debitvoucher";
import Createdebit from "./Party_Due_list/CreateDebit";
import EditOrderlist from './orderManagement/Order_List/EdiOrderlist';
import EditBudgetlist from './orderManagement/Order_List/Budget_list/EditBudgetlist';
import Editshipmentlist from './orderManagement/Order_List/shipment_list/Editshipmentlist';
import Editincomecategory from './Party_Due_list/EditIncomelist';
import Createaddsupplierone from './party_List/AddnewSupplier'
import Editsupplierlist from "./party_List/Editsupplierlist";
import Editcurrency from "./components/Setting/Editcurrency";
import ExpenseList from "./Party_Due_list/ExpenseList";
import AddNewExpenseList from "./Party_Due_list/AddNewExpenseList";
import Addnewincomecategory from "./Party_Due_list/Addnewincomecategory";
import MonthalyTransaction from './Party_Due_list/MonthalyTransaction'
import Partyledger from "./Party_Due_list/PartyLedger";
import DailyCashbook from "./Party_Due_list/DailyCashbook";
import PartyledgerSupplier from "./Party_Due_list/PartyLedgersupplier";
import createcontext from '../src/store/CreateStore';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const context=useContext(createcontext)
  console.log('context',context.superadmin)
  console.log('context',context.admin)
  console.log('context',context.marchendiser)

  return (
    <div className='h-screen' >
      <BrowserRouter>
      <Layout>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={{backgroundColor:"white"}}>
     
        <Navbar  collapsed={collapsed} setCollapsed={setCollapsed} />
          
        </Header>
      <Content className='overflow-y-scroll overflow-hidden' style={{height:"100vh"}}>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Login/>} />
            {/* super admin login authentication   */}
         {context.superadmin &&   <Route path="/home" index element={<Home collapsed={collapsed} setCollapsed={setCollapsed} />} />}
         { context.superadmin &&  <Route path="/forgot" element={<Forgotpassword/>} />}
        
         {context.superadmin &&   <Route path="/manageInventory" element={<ManageInventory />} />}
          {context.superadmin &&  <Route path="/accessory" element={<AccessoryList />} />}
         {context.superadmin &&   <Route path="/createUnit/:id?" element={<CreateUnitt />} />}
         {context.superadmin &&   <Route path="/unit" element={<UnitList />} />}
        { context.superadmin &&   <Route path="/createAccess/:id?" element={<CreateAccessory />} />}
        {  context.superadmin &&  <Route path="/createAccorder/:id?" element={<CreateAccOrder />} />}
         { context.superadmin &&  <Route path="/accOrderlist" element={<AccorderList />} />}
      { context.superadmin &&     <Route path="/admin" element={<Admin />} />}
    {  context.superadmin &&      <Route path="/newAdmin/:id?" element={<AddNewAdmin />} />}
        { context.superadmin &&  <Route path="/buyer" element={<Buyer />} />}
          {context.superadmin &&  <Route path="/addBuyer/:id?" element={<AddBuyer />} />}
       { context.superadmin &&    <Route path="/merchandiser" element={<Merchandiser />} />}
      {   context.superadmin &&   <Route path="/addMerch/:id?" element={<AddMerchandiser />} />}
        { context.superadmin &&   <Route path="/commercial" element={<CommercialList />} />}
          {context.superadmin &&  <Route path="/addComm/:id?" element={<AddCommercial />} />}
         {context.superadmin &&   <Route path="/accountant" element={<Accountant />} />}
           {context.superadmin && <Route path="/addAcc/:id?" element={<AddAccountant />} />}
         { context.superadmin &&  <Route path="/designation" element={<Designations />} />}
      { context.superadmin &&     <Route path="/pays/:id?" element={<PayS />} /> }
         { context.superadmin &&  <Route path="/employee" element={<Employees />} />}
        {context.superadmin &&    <Route path="/addemp/:id?" element={<AddEmployee />} />}
        { context.superadmin &&   <Route path="/salarylist" element={<SalaryList />} />}
        { context.superadmin &&   <Route path="/buyerdue" element={<BuyerDue />} />}
          {context.superadmin &&  <Route path="/myprofile" element={<MyProfile />} />}
     { context.superadmin &&      <Route path="/order" element={<Order />} />}
    {   context.superadmin &&     <Route path="/production" element={<Production/>} />}
      { context.superadmin &&     <Route path="/purchasereport" element={<PurchaseReport/>} />}
     {  context.superadmin &&     <Route path="/salesreport" element={<SalesReport/>} />}
            {/* <Route path="/supplierDue" element={<SalesReport/>} /> */}
      { context.superadmin &&     <Route path="/transaction" element={<Transaction/>} />}
     {context.superadmin &&       <Route path="/permission" element={<Permission/>} />}
    { context.superadmin &&       <Route path="/role" element={<Role/>} />}
         { context.superadmin &&  <Route path="/companysetting" element={<CompanySetting/>} />}
           {context.superadmin && <Route path="/currency" element={<Currency/>} />}
        {context.superadmin &&    <Route path="/editcurrency" element={<Editcurrency/>} />}
     { context.superadmin &&      <Route path="/notification" element={<Notification/>} />}
        { context.superadmin &&   <Route path="/systemsetting" element={<SystemSetting/>} />}
  { context.superadmin &&         <Route path="/orderlist" element={<Ordersummary/>} />}
     {context.superadmin &&       <Route path="/addneworder/:id?" element={<AddNeworder/>} />}
      { context.superadmin &&     <Route path="/bookinglist" element={<Booklist/>} />}
       { context.superadmin &&    <Route path="/addNewbooklist/:id?" element={<AddNeworder/>} />}
    { context.superadmin &&      <Route path="/budgetlist" element={<Booklist/>} />}
        { context.superadmin &&   <Route path="/addnewbudget/:id?" element={<Addnewbudget/>} />}
   { context.superadmin &&        <Route path="/costing" element={<Costinglist/>} />}
    { context.superadmin &&       <Route path="/sample" element={<Orderlist/>} />}
       {context.superadmin &&     <Route path="/shipmentlist" element={<Shipmentslist/>} />}
{ context.superadmin &&           <Route path="/buyers" element={<Buyer/>} />}
        { context.superadmin &&   <Route path="/addbuyer/:id?" element={<Addbuyer/>} />}
    {  context.superadmin &&      <Route path="/suppliers" element={<Supplierlist/>} />}
       { context.superadmin &&    <Route path="/buyerduelist" element={<Allbuyerduelist/>} />}
          
      { context.superadmin &&     <Route path="/addnewshipment" element={<Addnewshipmentlist/>} />}

    {context.superadmin &&        <Route path="/productionlist" element={<ProductionList/>} />}
      {context.superadmin &&      <Route path="/addproduction/:id?" element={<AddProd/>} />}
      

            {/* update */}
        { context.superadmin &&   <Route path="/editbudgetlist" element={<EditBudgetlist/>}/>}
        {context.superadmin &&    <Route path="/add_new_booking" element={<Add_New_Booking/>}/>}
      { context.superadmin &&     <Route path="/budget_list" element={<Budget_list/>}/>}
         { context.superadmin &&  <Route path="/costingform" element={<Costingform/>}/>}
        { context.superadmin &&   <Route path="/samplelist" element={<Samplelist/>}/>}
      {  context.superadmin &&    <Route path="/search" element={<SearchSamplelist/>}/>}
            {/* <Route path="/search" element={<Samplelist/>}/> */}
        {context.superadmin &&    <Route path="/addnewsample" element={<Addnewsample/>}/>}
    {context.superadmin &&        <Route path="/expList" element={<ExpList/>}/>}
       {context.superadmin &&     <Route path="/lossprofit" element={<LossProfit/>}/>}
        { context.superadmin &&   <Route path="/incomeList" element={<IncomeList/>}/>}
      { context.superadmin &&     <Route path="/Income" element={<Incomelist/>}/>}
        {context.superadmin &&    <Route path="/addnewincome" element={<Adddnewincomecategory/>}/>}
     { context.superadmin &&      <Route path="/addcredit" element={<Createcredit/>}/>}
     { context.superadmin &&      <Route path="/creditlist" element={<Creditvoucher/>}/>}
     {  context.superadmin &&    <Route path="/debitlist" element={<Debitvoucher/>}/>}
         {context.superadmin &&   <Route path="/adddebit" element={<Createdebit />}/>}
        { context.superadmin &&   <Route path="/accExpList" element={<ExpenseList />}/>}
       {context.superadmin &&     <Route path="/accIncList" element={<Incomelist />}/>}
         {context.superadmin &&   <Route path="/accAddExpList" element={<AddNewExpenseList />}/>}
      { context.superadmin &&     <Route path="/accAddIncList" element={<Addnewincomecategory />}/>}

       { context.superadmin &&    <Route path="/addnewsupplier" element={<Createaddsupplier/>} />}

        { context.superadmin &&   <Route path="/addnewbuyer" element={<Addnewbuyer/>}/>}
      { context.superadmin &&     <Route path="/addexpense" element={<AddExpense/>}/>}
        { context.superadmin &&   <Route path="/addincome" element={<AddIncome/>}/>}

         {context.superadmin &&   <Route path="/buyerlist" element={<Buyerlist/>}/>}
       {context.superadmin &&     <Route path="/supplierdue" element={<SupplierDue/>}/>}
         {context.superadmin &&   <Route path="/bankAccount" element={<BankAccount/>}/>}
     {  context.superadmin &&     <Route path="/cashinhand" element={<CashInHand/>}/>}
          {context.superadmin &&  <Route path="/cheques" element={<Cheques/>}/>}


    {  context.superadmin &&      <Route path="/editorderlist" element={<EditOrderlist/>}/>}
{      context.superadmin &&      <Route path="/Editshipmentlist" element={<Editshipmentlist/>}/>}
   { context.superadmin &&        <Route path="/Editincomecategory" element={<Editincomecategory/>}/>}
        { context.superadmin &&   <Route path="/addnewsupplierone" element={<Createaddsupplierone/>}/>}
        {context.superadmin &&    <Route path="/editsupplierlist" element={<Editsupplierlist/>}/>}
     { context.superadmin &&      <Route path="/MonthalyTransaction" element={<MonthalyTransaction/>}/>}
      { context.superadmin &&     <Route path="/Partyledger" element={<Partyledger/>}/>}
    {context.superadmin &&        <Route path="/DailyCashbook" element={<DailyCashbook/>}/>}
   {  context.superadmin &&       <Route path="/partyledgersupplier" element={<PartyledgerSupplier/>}/>}

  {/* super admin login authentication   */}

  {/* admin login uthentication */}


 {   context.admin  &&  <Route path="/home" index element={<Home collapsed={collapsed} setCollapsed={setCollapsed} />} />}
         {      context.admin  &&  <Route path="/forgot" element={<Forgotpassword/>} />}
        
         {     context.admin  &&  <Route path="/manageInventory" element={<ManageInventory />} />}
          {     context.admin  &&  <Route path="/accessory" element={<AccessoryList />} />}
         {     context.admin  &&   <Route path="/createUnit/:id?" element={<CreateUnitt />} />}
         {     context.admin  &&   <Route path="/unit" element={<UnitList />} />}
        {     context.admin  &&  <Route path="/createAccess/:id?" element={<CreateAccessory />} />}
        {       context.admin  &&  <Route path="/createAccorder/:id?" element={<CreateAccOrder />} />}
         {      context.admin  &&  <Route path="/accOrderlist" element={<AccorderList />} />}
      {     context.admin  &&    <Route path="/admin" element={<Admin />} />}
    {       context.admin  &&     <Route path="/newAdmin/:id?" element={<AddNewAdmin />} />}
        {      context.admin  &&  <Route path="/buyer" element={<Buyer />} />}
          {     context.admin  &&  <Route path="/addBuyer/:id?" element={<AddBuyer />} />}
       {      context.admin  &&   <Route path="/merchandiser" element={<Merchandiser />} />}
      {        context.admin  &&   <Route path="/addMerch/:id?" element={<AddMerchandiser />} />}
        {      context.admin  &&   <Route path="/commercial" element={<CommercialList />} />}
          {     context.admin  && <Route path="/addComm/:id?" element={<AddCommercial />} />}
         {     context.admin  &&   <Route path="/accountant" element={<Accountant />} />}
           {     context.admin  && <Route path="/addAcc/:id?" element={<AddAccountant />} />}
         {      context.admin  &&  <Route path="/designation" element={<Designations />} />}
      {      context.admin  &&    <Route path="/pays/:id?" element={<PayS />} /> }
         {      context.admin  &&  <Route path="/employee" element={<Employees />} />}
        {     context.admin  &&    <Route path="/addemp/:id?" element={<AddEmployee />} />}
        {      context.admin  &&   <Route path="/salarylist" element={<SalaryList />} />}
        {      context.admin  &&  <Route path="/buyerdue" element={<BuyerDue />} />}
          {     context.admin  &&  <Route path="/myprofile" element={<MyProfile />} />}
     {     context.admin  &&     <Route path="/order" element={<Order />} />}
    {        context.admin  &&    <Route path="/production" element={<Production/>} />}
      {      context.admin  &&     <Route path="/purchasereport" element={<PurchaseReport/>} />}
     {       context.admin  &&    <Route path="/salesreport" element={<SalesReport/>} />}
            {/* <Route path="/supplierDue" element={<SalesReport/>} /> */}
      {      context.admin  &&    <Route path="/transaction" element={<Transaction/>} />}
     {     context.admin  &&       <Route path="/permission" element={<Permission/>} />}
    {      context.admin  &&       <Route path="/role" element={<Role/>} />}
         {      context.admin  && <Route path="/companysetting" element={<CompanySetting/>} />}
           {     context.admin  && <Route path="/currency" element={<Currency/>} />}
        {     context.admin  &&    <Route path="/editcurrency" element={<Editcurrency/>} />}
     {      context.admin  &&      <Route path="/notification" element={<Notification/>} />}
        {      context.admin  &&   <Route path="/systemsetting" element={<SystemSetting/>} />}
  {      context.admin  &&         <Route path="/orderlist" element={<Ordersummary/>} />}
     {     context.admin  &&       <Route path="/addneworder/:id?" element={<AddNeworder/>} />}
      {      context.admin  &&     <Route path="/bookinglist" element={<Booklist/>} />}
       {      context.admin  &&    <Route path="/addNewbooklist/:id?" element={<AddNeworder/>} />}
    { context.superadmin &&      <Route path="/budgetlist" element={<Booklist/>} />}
        {      context.admin  &&   <Route path="/addnewbudget/:id?" element={<Addnewbudget/>} />}
   {      context.admin  &&        <Route path="/costing" element={<Costinglist/>} />}
    {      context.admin  &&       <Route path="/sample" element={<Orderlist/>} />}
       {     context.admin  &&     <Route path="/shipmentlist" element={<Shipmentslist/>} />}
{      context.admin  &&           <Route path="/buyers" element={<Buyer/>} />}
        {      context.admin  &&   <Route path="/addbuyer/:id?" element={<Addbuyer/>} />}
    {       context.admin  &&      <Route path="/suppliers" element={<Supplierlist/>} />}
       {      context.admin  &&    <Route path="/buyerduelist" element={<Allbuyerduelist/>} />}
          
      {      context.admin  &&     <Route path="/addnewshipment" element={<Addnewshipmentlist/>} />}

    {     context.admin  &&        <Route path="/productionlist" element={<ProductionList/>} />}
      {     context.admin  &&      <Route path="/addproduction/:id?" element={<AddProd/>} />}
      

            {/* update */}
        {      context.admin  &&   <Route path="/editbudgetlist" element={<EditBudgetlist/>}/>}
        {     context.admin  &&    <Route path="/add_new_booking" element={<Add_New_Booking/>}/>}
      {      context.admin  &&     <Route path="/budget_list" element={<Budget_list/>}/>}
         {      context.admin  &&  <Route path="/costingform" element={<Costingform/>}/>}
        {      context.admin  &&   <Route path="/samplelist" element={<Samplelist/>}/>}
      {       context.admin  &&    <Route path="/search" element={<SearchSamplelist/>}/>}
            {/* <Route path="/search" element={<Samplelist/>}/> */}
        {     context.admin  &&    <Route path="/addnewsample" element={<Addnewsample/>}/>}
    {     context.admin  &&        <Route path="/expList" element={<ExpList/>}/>}
       {     context.admin  &&    <Route path="/lossprofit" element={<LossProfit/>}/>}
        {      context.admin  &&   <Route path="/incomeList" element={<IncomeList/>}/>}
      {      context.admin  &&     <Route path="/Income" element={<Incomelist/>}/>}
        {     context.admin  &&    <Route path="/addnewincome" element={<Adddnewincomecategory/>}/>}
     {      context.admin  &&      <Route path="/addcredit" element={<Createcredit/>}/>}
     {      context.admin  &&      <Route path="/creditlist" element={<Creditvoucher/>}/>}
     {       context.admin  &&    <Route path="/debitlist" element={<Debitvoucher/>}/>}
         {     context.admin  &&   <Route path="/adddebit" element={<Createdebit />}/>}
        {      context.admin  &&   <Route path="/accExpList" element={<ExpenseList />}/>}
       {     context.admin  &&     <Route path="/accIncList" element={<Incomelist />}/>}
         {     context.admin  &&   <Route path="/accAddExpList" element={<AddNewExpenseList />}/>}
      {      context.admin  &&     <Route path="/accAddIncList" element={<Addnewincomecategory />}/>}

       {      context.admin  &&    <Route path="/addnewsupplier" element={<Createaddsupplier/>} />}

        {      context.admin  &&   <Route path="/addnewbuyer" element={<Addnewbuyer/>}/>}
      {      context.admin  &&     <Route path="/addexpense" element={<AddExpense/>}/>}
        {      context.admin  &&   <Route path="/addincome" element={<AddIncome/>}/>}

         {     context.admin  &&   <Route path="/buyerlist" element={<Buyerlist/>}/>}
       {     context.admin  &&     <Route path="/supplierdue" element={<SupplierDue/>}/>}
         {     context.admin  &&   <Route path="/bankAccount" element={<BankAccount/>}/>}
     {       context.admin  &&     <Route path="/cashinhand" element={<CashInHand/>}/>}
          {     context.admin  &&  <Route path="/cheques" element={<Cheques/>}/>}


    {       context.admin  &&      <Route path="/editorderlist" element={<EditOrderlist/>}/>}
{           context.admin  &&      <Route path="/Editshipmentlist" element={<Editshipmentlist/>}/>}
   {      context.admin  &&        <Route path="/Editincomecategory" element={<Editincomecategory/>}/>}
        {      context.admin  &&   <Route path="/addnewsupplierone" element={<Createaddsupplierone/>}/>}
        {     context.admin  &&    <Route path="/editsupplierlist" element={<Editsupplierlist/>}/>}
     {      context.admin  &&      <Route path="/MonthalyTransaction" element={<MonthalyTransaction/>}/>}
      {      context.admin  &&     <Route path="/Partyledger" element={<Partyledger/>}/>}
    {     context.admin  &&        <Route path="/DailyCashbook" element={<DailyCashbook/>}/>}
   {       context.admin  &&       <Route path="/partyledgersupplier" element={<PartyledgerSupplier/>}/>}


  {/* admin login uthentication */}
{/* merchendiser authentication loginpage */}


{context.marchendiser          &&  <Route path="/home" index element={<Home collapsed={collapsed} setCollapsed={setCollapsed} />} />}
         {  context.marchendiser          &&  <Route path="/forgot" element={<Forgotpassword/>} />}
        
         { context.marchendiser          &&  <Route path="/manageInventory" element={<ManageInventory />} />}
          {  context.marchendiser         &&  <Route path="/accessory" element={<AccessoryList />} />}
         { context.marchendiser          &&   <Route path="/createUnit/:id?" element={<CreateUnitt />} />}
         { context.marchendiser          &&   <Route path="/unit" element={<UnitList />} />}
        { context.marchendiser          &&  <Route path="/createAccess/:id?" element={<CreateAccessory />} />}
        {   context.marchendiser          &&  <Route path="/createAccorder/:id?" element={<CreateAccOrder />} />}
         {  context.marchendiser          &&  <Route path="/accOrderlist" element={<AccorderList />} />}
      { context.marchendiser          &&    <Route path="/admin" element={<Admin />} />}
    {   context.marchendiser          &&     <Route path="/newAdmin/:id?" element={<AddNewAdmin />} />}
        {   context.marchendiser         &&  <Route path="/buyer" element={<Buyer />} />}
          { context.marchendiser          &&  <Route path="/addBuyer/:id?" element={<AddBuyer />} />}
       {  context.marchendiser          &&   <Route path="/merchandiser" element={<Merchandiser />} />}
      {     context.marchendiser         &&   <Route path="/addMerch/:id?" element={<AddMerchandiser />} />}
        {   context.marchendiser         &&   <Route path="/commercial" element={<CommercialList />} />}
          {  context.marchendiser         && <Route path="/addComm/:id?" element={<AddCommercial />} />}
         { context.marchendiser          &&   <Route path="/accountant" element={<Accountant />} />}
           { context.marchendiser          && <Route path="/addAcc/:id?" element={<AddAccountant />} />}
         {  context.marchendiser          &&  <Route path="/designation" element={<Designations />} />}
      {  context.marchendiser          &&    <Route path="/pays/:id?" element={<PayS />} /> }
         {  context.marchendiser          &&  <Route path="/employee" element={<Employees />} />}
        {  context.marchendiser         &&    <Route path="/addemp/:id?" element={<AddEmployee />} />}
        {  context.marchendiser          &&   <Route path="/salarylist" element={<SalaryList />} />}
        {  context.marchendiser          &&  <Route path="/buyerdue" element={<BuyerDue />} />}
          {  context.marchendiser         &&  <Route path="/myprofile" element={<MyProfile />} />}
     { context.marchendiser          &&     <Route path="/order" element={<Order />} />}
    {    context.marchendiser          &&    <Route path="/production" element={<Production/>} />}
      {   context.marchendiser         &&     <Route path="/purchasereport" element={<PurchaseReport/>} />}
     {   context.marchendiser          &&    <Route path="/salesreport" element={<SalesReport/>} />}
            {/* <Route path="/supplierDue" element={<SalesReport/>} /> */}
      {  context.marchendiser          &&    <Route path="/transaction" element={<Transaction/>} />}
     { context.marchendiser          &&       <Route path="/permission" element={<Permission/>} />}
    {  context.marchendiser          &&       <Route path="/role" element={<Role/>} />}
         {   context.marchendiser         && <Route path="/companysetting" element={<CompanySetting/>} />}
           { context.marchendiser          && <Route path="/currency" element={<Currency/>} />}
        { context.marchendiser          &&    <Route path="/editcurrency" element={<Editcurrency/>} />}
     {  context.marchendiser          &&      <Route path="/notification" element={<Notification/>} />}
        {  context.marchendiser          &&   <Route path="/systemsetting" element={<SystemSetting/>} />}
  {  context.marchendiser          &&         <Route path="/orderlist" element={<Ordersummary/>} />}
     { context.marchendiser          &&       <Route path="/addneworder/:id?" element={<AddNeworder/>} />}
      {  context.marchendiser          &&     <Route path="/bookinglist" element={<Booklist/>} />}
       {  context.marchendiser          &&    <Route path="/addNewbooklist/:id?" element={<AddNeworder/>} />}
    { context.marchendiser        &&      <Route path="/budgetlist" element={<Booklist/>} />}
        {  context.marchendiser          &&   <Route path="/addnewbudget/:id?" element={<Addnewbudget/>} />}
   {  context.marchendiser          &&        <Route path="/costing" element={<Costinglist/>} />}
    {  context.marchendiser          &&       <Route path="/sample" element={<Orderlist/>} />}
       { context.marchendiser          &&     <Route path="/shipmentlist" element={<Shipmentslist/>} />}
{  context.marchendiser          &&           <Route path="/buyers" element={<Buyer/>} />}
        {  context.marchendiser          &&   <Route path="/addbuyer/:id?" element={<Addbuyer/>} />}
    {   context.marchendiser          &&      <Route path="/suppliers" element={<Supplierlist/>} />}
       {  context.marchendiser          &&    <Route path="/buyerduelist" element={<Allbuyerduelist/>} />}
          
      {  context.marchendiser          &&     <Route path="/addnewshipment" element={<Addnewshipmentlist/>} />}

    { context.marchendiser          &&        <Route path="/productionlist" element={<ProductionList/>} />}
      {  context.marchendiser         &&      <Route path="/addproduction/:id?" element={<AddProd/>} />}
      

            {/* update */}
        {  context.marchendiser          &&   <Route path="/editbudgetlist" element={<EditBudgetlist/>}/>}
        { context.marchendiser          &&    <Route path="/add_new_booking" element={<Add_New_Booking/>}/>}
      {  context.marchendiser          &&     <Route path="/budget_list" element={<Budget_list/>}/>}
         {  context.marchendiser          &&  <Route path="/costingform" element={<Costingform/>}/>}
        {  context.marchendiser          &&   <Route path="/samplelist" element={<Samplelist/>}/>}
      {   context.marchendiser          &&    <Route path="/search" element={<SearchSamplelist/>}/>}
            {/* <Route path="/search" element={<Samplelist/>}/> */}
        { context.marchendiser          &&    <Route path="/addnewsample" element={<Addnewsample/>}/>}
    { context.marchendiser          &&        <Route path="/expList" element={<ExpList/>}/>}
       { context.marchendiser          &&    <Route path="/lossprofit" element={<LossProfit/>}/>}
        {  context.marchendiser          &&   <Route path="/incomeList" element={<IncomeList/>}/>}
      {  context.marchendiser          &&     <Route path="/Income" element={<Incomelist/>}/>}
        { context.marchendiser          &&    <Route path="/addnewincome" element={<Adddnewincomecategory/>}/>}
     {  context.marchendiser          &&      <Route path="/addcredit" element={<Createcredit/>}/>}
     {  context.marchendiser          &&      <Route path="/creditlist" element={<Creditvoucher/>}/>}
     {   context.marchendiser          &&    <Route path="/debitlist" element={<Debitvoucher/>}/>}
         { context.marchendiser          &&   <Route path="/adddebit" element={<Createdebit />}/>}
        {  context.marchendiser          &&   <Route path="/accExpList" element={<ExpenseList />}/>}
       { context.marchendiser          &&     <Route path="/accIncList" element={<Incomelist />}/>}
         { context.marchendiser          &&   <Route path="/accAddExpList" element={<AddNewExpenseList />}/>}
      {  context.marchendiser          &&     <Route path="/accAddIncList" element={<Addnewincomecategory />}/>}

       {  context.marchendiser          &&    <Route path="/addnewsupplier" element={<Createaddsupplier/>} />}

        {  context.marchendiser          &&   <Route path="/addnewbuyer" element={<Addnewbuyer/>}/>}
      {  context.marchendiser          &&     <Route path="/addexpense" element={<AddExpense/>}/>}
        {  context.marchendiser          &&   <Route path="/addincome" element={<AddIncome/>}/>}

         { context.marchendiser          &&   <Route path="/buyerlist" element={<Buyerlist/>}/>}
       { context.marchendiser          &&     <Route path="/supplierdue" element={<SupplierDue/>}/>}
         { context.marchendiser          &&   <Route path="/bankAccount" element={<BankAccount/>}/>}
     {   context.marchendiser          &&     <Route path="/cashinhand" element={<CashInHand/>}/>}
          { context.marchendiser          &&  <Route path="/cheques" element={<Cheques/>}/>}


    {   context.marchendiser          &&      <Route path="/editorderlist" element={<EditOrderlist/>}/>}
{        context.marchendiser         &&      <Route path="/Editshipmentlist" element={<Editshipmentlist/>}/>}
   {  context.marchendiser          &&        <Route path="/Editincomecategory" element={<Editincomecategory/>}/>}
        {  context.marchendiser          &&   <Route path="/addnewsupplierone" element={<Createaddsupplierone/>}/>}
        { context.marchendiser          &&    <Route path="/editsupplierlist" element={<Editsupplierlist/>}/>}
     {  context.marchendiser          &&      <Route path="/MonthalyTransaction" element={<MonthalyTransaction/>}/>}
      {  context.marchendiser          &&     <Route path="/Partyledger" element={<Partyledger/>}/>}
    { context.marchendiser          &&        <Route path="/DailyCashbook" element={<DailyCashbook/>}/>}
   {   context.marchendiser          &&       <Route path="/partyledgersupplier" element={<PartyledgerSupplier/>}/>}


{/* merchendiser authentication loginpage */}
         
            
           
          </Route>
        </Routes>
        </Content>
        </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
