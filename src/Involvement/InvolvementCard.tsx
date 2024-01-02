import { useState } from 'react';
import { Involvement } from './Involvement';
import './InvolvementCard.css'

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface InvolvementCardProps {
    involvement: Involvement;
}

function InvolvementCard(props: InvolvementCardProps) {

    const involvement = props.involvement;
    const imageBg: React.CSSProperties = {
        backgroundImage: "url(/assets/" + involvement.images[0] + ")",
    };

    const [isTextbox2Visible, setTextbox2Visible] = useState(false);
    const handleMouseEnter = () => {
        setTextbox2Visible(true);
    };

    return (
        <div className="involveCardWrap" onMouseEnter={handleMouseEnter}>
            <div className="transBG"></div>
            <div className="involveBG" style={imageBg}></div>
            <div className="involveCard">
                <div className="cardTitle"><h1>{involvement.name}</h1></div>
                {isTextbox2Visible && <div className="cardBio"><p>{involvement.description}</p></div>}
            </div>
        </div>
    );
}

export default InvolvementCard;