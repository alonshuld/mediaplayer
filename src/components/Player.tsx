import { type FC, type RefObject, useState, useEffect } from "react";
import { Button } from "antd";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./Player.css";

export interface PlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export const Player: FC<PlayerProps> = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Set initial state based on current audio state
    setIsPlaying(!audio.paused);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="Player">
      <Button icon={<SkipBack />} />
      <Button
        icon={isPlaying ? <Pause /> : <Play />}
        onClick={handlePlayPause}
      />
      <Button icon={<SkipForward />} />
    </div>
  );
};
