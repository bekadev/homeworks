import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any

        const user = {
           _id: v1(),
            name
        }
        // 1 - создать новый объект юзера (используя uuid) и засетать новый объект в стейт учитывая момент что там уже могут быть созданы объекты с юзерами
        setUsers([...users, user]) // need to fix
    }

    return (
        <div>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
