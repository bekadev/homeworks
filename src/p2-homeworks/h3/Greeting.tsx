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
        <div className={s.input}>
            <div>
                <span className={s.span_people}>Людей добавили: {totalUsers}</span>
            </div>

            <input
                value={name}
                onChange={setNameCallback}
                className={s.error}
                onKeyDown={onEnter}
                onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button disabled={!name.trim()} className={`${s.button} ${!name.trim() ? s.disabledButton : ''}`}  onClick={addUser}>add</button>

        </div>
    )
}

export default Greeting
