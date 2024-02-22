import React from "react";
import {
  BellOutlined,
  CrownOutlined,
  HeartOutlined,
  MailOutlined,
  ProfileOutlined,
  SearchOutlined,
  TabletOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="max-w-[90%] mx-auto h-[60px] flex items-center justify-between relative">
        <Link to="/" className="font-bold text-3xl">
          Masteriseland
        </Link>
        <div className="flex items-center gap-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <NavLink to="/" className="group flex items-center gap-2 p-3 pb-2">
            <CrownOutlined />
            <span className="group-hover:block hidden">Home</span>
          </NavLink>
          <NavLink
            to="/explore"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <SearchOutlined />
            <span className="group-hover:block hidden">Explore</span>
          </NavLink>
          <NavLink
            to="/posts"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <ProfileOutlined />
            <span className="group-hover:block hidden">Posts</span>
          </NavLink>
          <NavLink
            to="/likes"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <HeartOutlined />
            <span className="group-hover:block hidden">Likes</span>
          </NavLink>
          <NavLink
            to="/contact"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <TabletOutlined />
            <span className="group-hover:block hidden">Contact</span>
          </NavLink>
          <NavLink
            to="/mail"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <MailOutlined />
            <span className="group-hover:block hidden">Mail</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-3 max-w-[200px]">
          <NavLink
            to="/notification"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <BellOutlined />
            <span className="group-hover:block hidden">Notification</span>
          </NavLink>
          <NavLink
            to="/register"
            className="group flex items-center gap-2 p-3 pb-2"
          >
            <UserOutlined />
            <span className="group-hover:block hidden">Register</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
