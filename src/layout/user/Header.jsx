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
import Navigate from "../../components/user/Navigate";

const Header = () => {
  return (
    <>
      <div className="max-w-[90%] mx-auto h-[60px] flex items-center justify-between relative">
        <Link to="/" className="font-bold text-3xl">
          Masteriseland
        </Link>
        <div className="flex items-center gap-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Navigate navigate={"/"} icon={<CrownOutlined />} text={"Home"} />
          <Navigate
            navigate={"/explore"}
            icon={<SearchOutlined />}
            text={"Explore"}
          />
          <Navigate
            navigate={"/posts"}
            icon={<ProfileOutlined />}
            text={"Posts"}
          />
          <Navigate
            navigate={"/likes"}
            icon={<HeartOutlined />}
            text={"Likes"}
          />
          <Navigate
            navigate={"/contact"}
            icon={<TabletOutlined />}
            text={"Contact"}
          />
          <Navigate navigate={"/mail"} icon={<MailOutlined />} text={"Mail"} />
        </div>
        <div className="flex items-center gap-3 max-w-[200px]">
          <Navigate
            navigate={"/notification"}
            icon={<BellOutlined />}
            text={"Notification"}
          />
          <Navigate
            navigate={"/register"}
            icon={<UserOutlined />}
            text={"Register"}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
