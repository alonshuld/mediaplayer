import { type FC, type RefObject, useEffect } from "react";
import { Button } from "antd";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import "./Player.css";

export interface PlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export const Player: FC<PlayerProps> = ({
  audioRef,
  isPlaying,
  setIsPlaying: setPlaying,
}) => {
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Set initial state based on current audio state
    setPlaying(!audio.paused);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, setPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
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
