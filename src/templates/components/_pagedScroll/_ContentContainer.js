import * as styles from 'sass/components/_pagedScroll/_ContentContainer.scss';


const template = (props) => {
    props = {
        ref: props.ref,
        visible: (props.visible === true) ? 1 : 0,
        children: props.children
    };

    return (
        <div ref={props.ref} className="tam-sign_paged-scroll_content-cntr" data-visible={props.visible}>
            {props.children}
        </div>
    );
};


export default template;