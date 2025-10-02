import { type FC } from "react";
import { Card, Image, Typography } from "antd";
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
  onClick: (song: Song) => void;
}

export const SongCard: FC<SongCardProps> = ({ song, onClick }) => {
  return (
    <Card
      className="SongCard"
      hoverable
      variant="borderless"
      cover={
        <Image
          preview={false}
          alt={`${song.title} cover`}
          src={song.coverPath}
          className="SongCard-cover"
          style={{ borderRadius: 8 }}
        />
      }
      onClick={() => onClick(song)}
    >
      <Card.Meta
        title={<Title level={2}>{song.title}</Title>}
        description={<Title level={3}>{song.artist}</Title>}
      />
    </Card>
  );
};
