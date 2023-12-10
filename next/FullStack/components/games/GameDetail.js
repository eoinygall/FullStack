import classes from './gameDetail.module.css'

function GameDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <console>{props.console}</console>
            <p>{props.description}</p>
        </section>
    )
}

export default MeetupDetail