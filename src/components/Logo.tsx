import { type FC } from 'react';
import { Typography } from 'antd';
import { Disc3 } from 'lucide-react';
import './Logo.css';

const { Title } = Typography;

export const Logo: FC = () => {
    return (
        <div className="Logo">
            <Disc3 size={44}/>
            <Title level={1}>din</Title>
        </div>
    );
};