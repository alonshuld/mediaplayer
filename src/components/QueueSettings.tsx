import { type FC } from "react";
import { Button } from "antd";
import { Repeat, Shuffle } from "lucide-react";
import "./QueueSettings.css";

export interface QueueSettingsProps {
  isRepeat: boolean;
  setRepeat: (repeat: boolean) => void;
  isShuffle: boolean;
  setShuffle: (shuffle: boolean) => void;
}

export const QueueSettings: FC<QueueSettingsProps> = ({
  isRepeat,
  setRepeat,
  isShuffle,
  setShuffle,
}) => {
  return (
    <div className="QueueSettings">
      <Button
        icon={<Repeat />}
        onClick={() => setRepeat(!isRepeat)}
        type={isRepeat ? "primary" : "default"}
      />
      <Button
        icon={<Shuffle />}
        onClick={() => setShuffle(!isShuffle)}
        type={isShuffle ? "primary" : "default"}
      />
    </div>
  );
};
