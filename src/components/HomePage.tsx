import { type FC, useState, useRef } from "react";
import { Layout } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SongList } from "./SongList";
import songCover1 from "../assets/songs/1.png";
import songFile1 from "../assets/songs/1.mp3";
import songCover2 from "../assets/songs/2.png";
import songFile2 from "../assets/songs/2.mp3";
import songCover3 from "../assets/songs/3.png";
import songFile3 from "../assets/songs/3.mp3";
import songCover4 from "../assets/songs/4.png";
import songFile4 from "../assets/songs/4.mp3";
import "./HomePage.css";

export const HomePage: FC = () => {
  const [collapsedSider, setCollapsedSider] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isShuffle, setShuffle] = useState(false);
  const [isRepeat, setRepeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
            songsCardProps={[
              {
                id: "1",
                title: "הספר הכחול",
                artist: "פאר טסי",
                songPath: songFile1,
                coverPath: songCover1,
                audioRef: audioRef,
              },
              {
                id: "2",
                title: "תסמינים של פרידה",
                artist: "עומר אדם",
                songPath: songFile2,
                coverPath: songCover2,
                audioRef: audioRef,
              },
              {
                id: "3",
                title: "עד אחרי הנצח",
                artist: "פאר טסי",
                songPath: songFile3,
                coverPath: songCover3,
                audioRef: audioRef,
              },
              {
                id: "4",
                title: "מה יהיה מחר",
                artist: "פאר טסי",
                songPath: songFile4,
                coverPath: songCover4,
                audioRef: audioRef,
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
