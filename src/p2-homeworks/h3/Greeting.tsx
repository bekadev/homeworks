import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({addUser, error,name,setNameCallback,totalUsers, onEnter})=> {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={error ? inputClass : ''}
                onKeyDown={onEnter}
                onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button className={s.button}  onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
