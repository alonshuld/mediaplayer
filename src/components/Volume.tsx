import { type FC } from "react";
import { Slider } from "antd";
import { Volume2, VolumeX } from "lucide-react";
import "./Volume.css";

export interface VolumeProps {
  volume: number;
  setVolume: (volume: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const changeVolume = (
  value: number,
  setVolume: (volume: number) => void,
  audioRef: React.RefObject<HTMLAudioElement | null>
) => {
  setVolume(value);
  if (audioRef.current) {
    audioRef.current.volume = value / 100;
  }
};

export const Volume: FC<VolumeProps> = ({ volume, setVolume, audioRef }) => {
  return (
    <div className="Volume">
      {volume === 0 ? <VolumeX /> : <Volume2 />}
      <Slider
        value={volume}
        onChange={(value) => changeVolume(value, setVolume, audioRef)}
        style={{ width: 100 }}
      />
    </div>
  );
};
