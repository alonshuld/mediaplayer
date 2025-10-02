import { type FC } from "react";
import { Space } from "antd";
import { SongCard, type SongCardProps } from "./SongCard";

export interface SongListProps {
  songsCardProps: SongCardProps[];
}

export const SongList: FC<SongListProps> = ({ songsCardProps }) => {
  return (
    <Space wrap>
      {songsCardProps.map((songCardProps) => (
        <SongCard key={songCardProps.id} {...songCardProps} />
      ))}
    </Space>
  );
};
