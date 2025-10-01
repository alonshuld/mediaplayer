import { type FC } from "react";
import { Button } from "antd";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./Player.css";

export interface PlayerProps {
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
}

export const Player: FC<PlayerProps> = ({ isPlaying, setPlaying }) => {
  return (
    <div className="Player">
      <Button icon={<SkipBack />} />
      <Button
        icon={isPlaying ? <Pause /> : <Play />}
        onClick={() => setPlaying(!isPlaying)}
      />
      <Button icon={<SkipForward />} />
    </div>
  );
};
