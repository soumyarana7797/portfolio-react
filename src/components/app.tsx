// import store from "../state";
import { Provider } from "react-redux";
import RepositoriesList  from "./RepositoriesList"
import store from '../state/store'


const App = () => {
    return (
    <Provider store={store}>
        <div>
            <RepositoriesList />
        </div>
    </Provider>
    )
};

export default App;