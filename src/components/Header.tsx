import { type FC } from "react";
import { Button } from "antd";
import { Settings } from "lucide-react";
import { Logo } from "./Logo";
import "./Header.css";

export const Header: FC = () => {
  return (
    <div className="Header">
      <Logo />
      <Button className="Admin-btn" icon={<Settings />} />
    </div>
  );
};
