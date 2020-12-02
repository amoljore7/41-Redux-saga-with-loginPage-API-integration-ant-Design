import React, { useState } from "react";
import "./navbar.scss";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Dropdown, Drawer } from "antd";
import {
  UserOutlined,
  DownOutlined,
  MenuOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import acme from "../../../images/acme.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../../../actions/auth/authActions";
const { Header } = Layout;

const Navbar = (props) => {
  const menuList = [
    {
      name: "Home",
      icon: <PieChartOutlined />,
      link: "/home",
    },
    {
      name: "Dashboard",
      icon: <PieChartOutlined />,
      link: "/dashboard",
    },
    {
      name: "Patients",
      icon: <PieChartOutlined />,
      link: "/patients",
    },
    {
      name: "Resources",
      icon: <PieChartOutlined />,
      link: "/resources",
    },
    {
      name: "Analytics",
      icon: <PieChartOutlined />,
      link: "/analytics",
    },
  ];
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(!visible);
  };
  const logout = () => {
    props.userLogout();
    props.history.push("/");
  };

  const { auth } = props;
  const menu = (
    <Menu>
      {/* <Menu.Item>
        <span>Profile</span>
      </Menu.Item> */}
      <Menu.Item id="user-logout">
        <span onClick={logout}>Log out</span>
      </Menu.Item>
    </Menu>
  );
  return (
    auth.isAuthenticated && (
      <Layout>
        <Header className="header" style={{ height: "65px" }}>
          <MenuOutlined className="menu-icon" onClick={onClose} />
          <div style={{ padding: "6px 0 0 0", marginLeft: "20px" }}>
            <img width="80" height="50" src={acme} />
          </div>

          <Dropdown overlay={menu} className="login-user">
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <UserOutlined className="user-logo" /> {auth.user.user}{" "}
              <DownOutlined />
            </a>
          </Dropdown>
        </Header>
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={onClose}
          visible={visible}
          mask={true}
        >
          <Menu mode="inline" defaultSelectedKeys={["0"]}>
            {menuList.map((menu, index) => (
              <Menu.Item key={index}>
                <Link to={menu.link} onClick={onClose}>
                  {menu.icon} {menu.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Layout>
    )
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  userLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userLogout })(withRouter(Navbar));
