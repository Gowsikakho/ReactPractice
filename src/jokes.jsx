export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
        </div>
    )
}
