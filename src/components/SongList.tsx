import { type FC } from "react";
import { Space } from "antd";
import { SongCard, type Song } from "./SongCard";

export interface SongListProps {
  songs: Song[];
}

export const SongList: FC<SongListProps> = ({ songs }) => {
  return (
    <Space wrap>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} onClick={() => {}} />
      ))}
    </Space>
  );
};
