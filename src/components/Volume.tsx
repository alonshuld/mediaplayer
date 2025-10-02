import { type FC } from "react";
import { Slider } from "antd";
import { Volume2, VolumeX } from "lucide-react";
import "./Volume.css";

export interface VolumeProps {
  volume: number;
  setVolume: (volume: number) => void;
}

export const Volume: FC<VolumeProps> = ({ volume, setVolume }) => {
  return (
    <div className="Volume">
      {volume === 0 ? <VolumeX /> : <Volume2 />}
      <Slider
        value={volume}
        onChange={(value) => setVolume(value)}
        style={{ width: 100 }}
      />
    </div>
  );
};
