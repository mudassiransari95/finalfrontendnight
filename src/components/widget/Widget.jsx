import "./widget.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SavingsIcon from '@mui/icons-material/Savings';
import PaymentsIcon from '@mui/icons-material/Payments';
import MoneyIcon from '@mui/icons-material/Money';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useEffect, useState } from "react";

const Widget = ({ type }) => {
  let data;
  const [order, setorder] = useState();
const totalorder=async()=>{
  const res=await fetch('http://localhost:8080/order/countorderdata')
  const resdata=await res.json()
console.log(resdata)
  setorder(resdata.data)
} 
useEffect(()=>{
  totalorder()
},[])
  //temporary
  const amount = [
    {
      label:'total order',
      total:order
    }
  ];
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Total order",
        isMoney: false,
        link: "See all users",
        icon: (
          <AddShoppingCartIcon 
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              height:"2rem",
              width:"2rem",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Running order",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              height:"2rem",
              width:"2rem",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Pending order",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <ProductionQuantityLimitsIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",height:"2rem",
              width:"2rem", }}
          />
        ),
      };
      break;
    case "weekly":
      data = {
        title: "Weekly value",
        isMoney: true,
        link: "See details",
        icon: (
          <AttachMoneyIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              height:"2rem",
              width:"2rem",
            }}
          />
        ),
      };
      break;
      case "monthly":
        data = {
          title: "Monthly value",
          isMoney: true,
          link: "View net earnings",
          icon: (
            <AccountBalanceWalletIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",height:"2rem",
                width:"2rem", }}
            />
          ),
        };
        break;
        case "yearly":
          data = {
            title: "Order",
            isMoney: true,
            link: "View net earnings",
            icon: (
              <LocalAtmIcon
                className="icon"
                style={{ backgroundColor: "rgba(213, 184, 255)", color: "purple",height:"2rem",
                  width:"2rem"}}
              />
            ),
          };
          break;
          case "cash":
            data = {
              title: "Cash Balance",
              isMoney: true,
              link: "View net earnings",
              icon: (
                <MoneyIcon
                  className="icon"
                  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",height:"2rem",
                    width:"2rem", }}
                />
              ),
            };
            break;
            case "bank":
              data = {
                title: "Bank Balance",
                isMoney: true,
                link: "View net earnings",
                icon: (
                  <SavingsIcon
                    className="icon"
                    style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",height:"2rem",
                      width:"2rem", }}
                  />
                ),
              };
              break;
              case "supplier":
                data = {
                  title: "Supplier Due",
                  isMoney: true,
                  link: "View net earnings",
                  icon: (
                    <PaymentsIcon
                      className="icon"
                      style={{  backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",height:"2rem",
                        width:"2rem", }}
                    />
                  ),
                };
                break;
                case "monthly exp":
                  data = {
                    title: "Monthly expense",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                      <SavingsIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",height:"2rem",
                          width:"2rem", }}
                      />
                    ),
                  };
                  break;
                  case "debit":
                    data = {
                      title: "Debit Transaction",
                      isMoney: true,
                      link: "View net earnings",
                      icon: (
                        <CreditScoreIcon
                          className="icon"
                          style={{ backgroundColor: "rgba(251, 192, 147)", color: "brown",height:"2rem",
                            width:"2rem", }}
                        />
                      ),
                    };
                    break;
                    case "credit":
                      data = {
                        title: "Credit Transaction",
                        isMoney: true,
                        link: "View net earnings",
                        icon: (
                          <CreditCardIcon
                            className="icon"
                            style={{  backgroundColor: "rgba(128, 0, 128, 0.2)",
                              color: "purple",height:"2rem",
                              width:"2rem", }}
                          />
                        ),
                      };
                      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney } {amount.map((ele)=>{
            return ele.total
          })}
        </span>
      </div>
      <div  className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
