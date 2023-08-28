import './Container.css';

const Container = (props) => {
    return (
        <div 
            className={`container-fluid text-center container-personalizado ${props.className}`}
            id={props.id} 
            style={{backgroundColor: props.bg}}>
            {props.children}
        </div>
    )
}

export default Container;