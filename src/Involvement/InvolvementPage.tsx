import InvolvementCard from './InvolvementCard';
import { Involvements } from './MyInvolvement';
import './InvolvementPage.css';

function involvement() {
    return (
        <>
            <div className="header"><h1>Involvement</h1></div>
            <div className="involvementCont">
                <div className="involvementGutter"></div>
                {Involvements.map((item, i) =>
                    <InvolvementCard key={i} involvement={item} />
                )}
                <div className="involvementGutter"></div>
            </div>
        </>
    );
}

export default involvement;