const InputElement = (props) => {
    return (
        <input type={props.children} placeholder={props.children} />
    )
}

export default InputElement