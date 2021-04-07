import ContentContainer from 'components/_pagedScroll/_ContentContainer';
import * as styles from 'sass/components/PagedScroll.scss';


const template = (props) => {
    props = {
        ref: props.ref,
        itemsRef: props.itemsRef,
        items: (Array.isArray(props.items)) ? props.items : [],
        children: props.children
    };

    return (
        <div ref={props.ref} className="tam-sign_paged-scroll">
            <div ref={props.itemsRef} className="tam-sign_paged-scroll_items">
                {
                    props.items.map((item, i) => {
                        return <ContentContainer ref={item.ref} key={i}>{item.component}</ContentContainer>;
                    })
                }
            </div>
        </div>
    );
};


export default template;