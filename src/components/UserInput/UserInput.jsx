import s from "./UserInput.module.scss";


export const UserInput = (props) => {

    return (
        <input style={props.style} className={s.Input} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    )
}

export default UserInput