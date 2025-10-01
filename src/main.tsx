import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontSizeHeading1: 42,
          colorText: "white",
          colorBgBase: "#212121",
          colorBgContainer: "#303030",
          colorPrimary: "#303030",
        },
        components: {
          Layout: {
            headerBg: "#424242",
            headerPadding: 16,
            footerBg: "#424242",
            footerPadding: 16,
            siderBg: "#303030",
          },
          Button: {
            controlOutline: "none",
            colorPrimary: "#212121",
            colorPrimaryHover: "black",
            defaultBg: "transparent",
            defaultActiveBg: "#212121",
            defaultHoverBg: "#212121",
            defaultBorderColor: "transparent",
            defaultActiveBorderColor: "transparent",
            defaultHoverBorderColor: "transparent",
            defaultColor: "white",
            defaultActiveColor: "white",
            defaultHoverColor: "white",
            primaryColor: "white",
          },
          Slider: {
            trackBg: "white",
            trackHoverBg: "white",
            railBg: "#212121",
            railHoverBg: "#212121",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
