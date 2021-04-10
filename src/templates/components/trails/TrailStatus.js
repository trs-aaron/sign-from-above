import ContentContainer from 'components/_pagedScroll/_ContentContainer';
import PagedScroll from 'components/PagedScroll';
import Trail from 'components/trails/_trailStatus/Trail';
import * as styles from 'sass/components/trails/TrailStatus.scss';


const template = (props) => {
    props = {
        trails: (props.trails && Array.isArray(props.trails)) ? props.trails.map((t) => t) : []
    };

    return (
        <div className="sign_trail-status">
            <div className="sign_trail-status_trails">
                <PagedScroll autoScroll={true}>
                    {
                        props.trails.map((t, i) => (
                            <Trail key={i} model={t} />
                        ))
                    }
                </PagedScroll>
            </div>
        </div>
    );
};


export default template;