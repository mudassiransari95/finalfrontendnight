import "./navbar.scss";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = (props) => {
  const {collapsed,setCollapsed} = props;

  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="search">
      <ListOutlinedIcon className="icon" onClick={() => setCollapsed(!collapsed)} />

        </div>
      
        <div className="items">

<div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
