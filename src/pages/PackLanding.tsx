// src/components/PackLanding.tsx
import BreakTheSpire from "./Intros/BreakTheSpire.tsx";
import CyberHeart from "./Intros/CyberHeart.tsx";
import FaceTheMusic from "./Intros/FaceTheMusic.tsx";

interface PackLandingProps {
    packName: string;
}

const PackLanding: React.FC<PackLandingProps> = ({ packName }) => {
    if (packName.toLowerCase() === 'breaking the spire') {
        return <BreakTheSpire />;
    }
    if (packName.toLowerCase() === 'cyberheart') {
        return <CyberHeart />;
    }
    if (packName.toLowerCase() === 'face the music') {
        return <FaceTheMusic />;
    }
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>{packName}</h2>
            <p>Choose a domain to view cards from this pack.</p>
        </div>
    );
};

export default PackLanding;