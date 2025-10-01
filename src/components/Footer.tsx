import { type FC } from "react";
import { Button } from "antd";
import { ListMusic } from "lucide-react";
import { Player, type PlayerProps } from "./Player";
import { Volume, type VolumeProps } from "./Volume";
import "./Footer.css";
import { QueueSettings, type QueueSettingsProps } from "./QueueSettings";

export interface FooterProps {
  collapsedSider: boolean;
  setCollapsedSider: (collapsed: boolean) => void;
  playerProps: PlayerProps;
  volumeProps: VolumeProps;
  queueSettingsProps: QueueSettingsProps;
}

export const Footer: FC<FooterProps> = ({
  collapsedSider,
  setCollapsedSider,
  playerProps,
  volumeProps,
  queueSettingsProps,
}) => {
  return (
    <div className="Footer">
      <div className="Footer-left">
        <Button
          icon={<ListMusic />}
          onClick={() => setCollapsedSider(!collapsedSider)}
          type={collapsedSider ? "default" : "primary"}
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
