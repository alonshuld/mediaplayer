import { type FC, useState } from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./HomePage.css";

export const HomePage: FC = () => {
  const [collapsedSider, setCollapsedSider] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isShuffle, setShuffle] = useState(false);
  const [isRepeat, setRepeat] = useState(false);

  return (
    <Layout className="HomePage">
      <Layout.Header
        style={{ borderRadius: 16, overflow: "hidden", margin: 8 }}
      >
        <Header />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          collapsed={collapsedSider}
          collapsedWidth={0}
          style={{ borderRadius: 16, overflow: "hidden", marginLeft: 8 }}
        >
          Sider
        </Layout.Sider>
        <Layout.Content
          style={{ borderRadius: 16, overflow: "hidden", margin: 8 }}
        >
          Content
        </Layout.Content>
      </Layout>
      <Layout.Footer
        style={{ borderRadius: 16, overflow: "hidden", margin: 8 }}
      >
        <Footer
          collapsedSider={collapsedSider}
          setCollapsedSider={setCollapsedSider}
          playerProps={{ isPlaying, setPlaying }}
          volumeProps={{ volume, setVolume }}
          queueSettingsProps={{ isRepeat, setRepeat, isShuffle, setShuffle }}
        />
      </Layout.Footer>
    </Layout>
  );
};
