import { FormEvent, useState } from "react"
import { actionCreators , useAppDispatch} from "../state";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import ListView from "./ListView";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    // const dispatch = useAppDispatch();
    const { searchRepositories } = useActions()
    const { data, error, loading } = useSelector( (state: any) => state.repositories)
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term)
        // dispatch(actionCreators.searchRepositories(term)); // Old

    }
    return (
    <div>
        <h2>Search Packages</h2>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error &&  <h3>{error}</h3>}
        {loading && <h3>{loading}</h3>}
        {!error && !loading && 
        <tbody>
            {data.map((object: string, i: number) => <ListView obj={object} key={i} />)}
        </tbody>
        
        }
    </div>
    )

}

export default RepositoriesList