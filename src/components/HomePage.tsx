import { type FC, useState } from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SongList } from "./SongList";
import songCover from "../assets/songs/1.png";
import songFile from "../assets/songs/1.mp3";
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
      <Layout style={{ marginInline: 8 }}>
        <Layout.Sider
          collapsed={collapsedSider}
          collapsedWidth={0}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            marginRight: collapsedSider ? 0 : 8,
          }}
        >
          Sider
        </Layout.Sider>
        <Layout.Content
          style={{
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#121212",
          }}
        >
          <SongList
            songs={[
              {
                id: "1",
                title: "הספר הכחול",
                artist: "פאר טסי",
                songPath: songFile,
                coverPath: songCover,
              },
              {
                id: "2",
                title: "תסמינים של פרידה",
                artist: "עומר אדם",
                songPath: songFile,
                coverPath: songCover,
              },
              {
                id: "3",
                title: "עד אחרי הנצח",
                artist: "פאר טסי",
                songPath: songFile,
                coverPath: songCover,
              },
            ]}
          />
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
