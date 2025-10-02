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
}

export const SongCard: FC<SongCardProps> = ({
  title,
  artist,
  songPath,
  coverPath,
  audioRef,
}) => {
  const [hovered, setHovered] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    audioRef.current = new Audio(songPath);
    audioRef.current.play();
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
              onClick={handlePlay}
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
