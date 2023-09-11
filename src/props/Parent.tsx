import { Child } from './Child';

const Parent  = () => {
    return <Child color ="Green" 
    onClick = {
        () => console.log("Babu...")
    }
    />;
}

export default Parent;