import { FormEvent, useState } from "react"
interface data {
    obj : string;
}

const ListView: React.FC<data> = ({ obj }) => {
    return (
    <div>
        <p>{ obj }</p>

    </div>
    )

}

export default ListView