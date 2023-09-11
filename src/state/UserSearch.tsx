import { useEffect, useRef, useState } from "react"
interface Foo {
    name: string;
    age: number;
}

const users = [
    {name: "raj", age: 22 },
    {name: "roni", age: 20 },
    {name: "riya", age: 24 },
    {name: "riya", age: 24 },
]
const UserSearch: React.FC = () => {
    const inputRef =  useRef<HTMLInputElement | null >(null)
    const [name, setName] = useState('')
    const [user, setUser] = useState<Foo[]> ([])
    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    }, [])
    const onClick = () => {
        setName('')
        const searchedUsers = users.filter(user => user.name === name)
        setUser(searchedUsers)

    }
    return <div>
                <h3> Guest List </h3>
        <ul>
            {user.map((user, index) => <div key ={index}>
                name: {user && user.name} <br />
                age: {user && user.age}
                </div>)}
            
        </ul>
        
        <input
         type="text" 
         ref={inputRef} 
         value={name} 
         onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick} >Search</button>
    </div>
}

export default UserSearch