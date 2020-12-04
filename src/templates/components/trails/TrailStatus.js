import Trail from 'components/trails/_trailStatus/Trail';
import * as styles from 'sass/components/trails/TrailStatus.scss';


const template = (props) => {
    props = {
        trails: (props.trails && Array.isArray(props.trails)) ? props.trails.map((t) => t) : []
    };

    return (
        <div className="tam-sign_trail-status">
            <div className="tam-sign_trail-status_trails">
            {
                props.trails.map((t, i) => (
                    <Trail key={i} model={t} />
                ))
            }   
            </div>
        </div>
    );
};


export default template;