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

export interface SongCardProps {
  song: Song;
}

export const SongCard: FC<SongCardProps> = ({ song }) => {
  const [hovered, setHovered] = useState(false);

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
            alt={`${song.title} cover`}
            src={song.coverPath}
            className="SongCard-cover"
          />
          {hovered && (
            <Button
              className="SongCard-playBtn"
              type="default"
              icon={<PlayCircle size={64} />}
              shape="circle"
              size="large"
            />
          )}
        </div>
      }
    >
      <Card.Meta
        title={<Title level={2}>{song.title}</Title>}
        description={<Title level={3}>{song.artist}</Title>}
      />
    </Card>
  );
};
