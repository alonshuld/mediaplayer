import { type FC, useState } from "react";
import { Card, Image, Typography, Button } from "antd";
import { PlayCircle } from "lucide-react";
import "./SongCard.css";

const { Title } = Typography;

export interface Song {
  id: string;
  title: string;
  artist: string;
  songPath: string;
  coverPath: string;
}

export interface SongCardProps extends Song {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
}

export const SongCard: FC<SongCardProps> = ({
  title,
  artist,
  songPath,
  coverPath,
  audioRef,
  setPlaying,
}) => {
  const [hovered, setHovered] = useState(false);

  const handlePlay = (setPlaying: (playing: boolean) => void) => {
    let volume = -1;
    if (audioRef.current) {
      setPlaying(false);
      volume = audioRef.current.volume;
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    audioRef.current = new Audio(songPath);
    audioRef.current.play();
    if (volume !== -1) audioRef.current.volume = volume;
    setPlaying(true);
  };

  return (
    <Card
      className="SongCard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      hoverable
      variant="borderless"
      cover={
        <div className="SongCard-coverWrapper">
          <Image
            preview={false}
            alt={`${title} cover`}
            src={coverPath}
            className="SongCard-cover"
          />
          {hovered && (
            <Button
              className="SongCard-playBtn"
              type="default"
              icon={<PlayCircle size={64} />}
              shape="circle"
              size="large"
              onClick={() => handlePlay(setPlaying)}
            />
          )}
        </div>
      }
    >
      <Card.Meta
        title={<Title level={2}>{title}</Title>}
        description={<Title level={3}>{artist}</Title>}
      />
    </Card>
  );
};
