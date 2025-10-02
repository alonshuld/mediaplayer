import { type FC } from "react";
import { Button } from "antd";
import { ListMusic } from "lucide-react";
import { Player, type PlayerProps } from "./Player";
import { Volume, type VolumeProps } from "./Volume";
import "./Footer.css";
import { QueueSettings, type QueueSettingsProps } from "./QueueSettings";

export interface FooterProps {
  showQueue: boolean;
  setShowQueue: (collapsed: boolean) => void;
  playerProps: PlayerProps;
  volumeProps: VolumeProps;
  queueSettingsProps: QueueSettingsProps;
}

export const Footer: FC<FooterProps> = ({
  showQueue,
  setShowQueue,
  playerProps,
  volumeProps,
  queueSettingsProps,
}) => {
  return (
    <div className="Footer">
      <div className="Footer-left">
        <Button
          icon={<ListMusic />}
          onClick={() => setShowQueue(!showQueue)}
          type={showQueue ? "default" : "primary"}
        />
      </div>
      <div className="Footer-center">
        <Player {...playerProps} />
      </div>
      <div className="Footer-right">
        <Volume {...volumeProps} />
        <QueueSettings {...queueSettingsProps} />
      </div>
    </div>
  );
};
