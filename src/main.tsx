import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

export const primaryColor: string = "#202020";
export const secondaryColor: string = "black";
export const accentColor: string = "#121212";
export const contentColor: string = "white";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontSizeHeading1: 42,
          colorText: contentColor,
          colorBgBase: secondaryColor,
          colorBgContainer: accentColor,
          colorPrimary: accentColor,
        },
        components: {
          Layout: {
            headerBg: primaryColor,
            headerPadding: 16,
            footerBg: primaryColor,
            footerPadding: 16,
            siderBg: accentColor,
          },
          Button: {
            controlOutline: "none",
            colorPrimary: secondaryColor,
            colorPrimaryHover: "black",
            defaultBg: "transparent",
            defaultActiveBg: secondaryColor,
            defaultHoverBg: secondaryColor,
            defaultBorderColor: "transparent",
            defaultActiveBorderColor: "transparent",
            defaultHoverBorderColor: "transparent",
            defaultColor: contentColor,
            defaultActiveColor: contentColor,
            defaultHoverColor: contentColor,
            primaryColor: contentColor,
          },
          Slider: {
            trackBg: contentColor,
            trackHoverBg: contentColor,
            railBg: secondaryColor,
            railHoverBg: secondaryColor,
            handleColor: accentColor,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
