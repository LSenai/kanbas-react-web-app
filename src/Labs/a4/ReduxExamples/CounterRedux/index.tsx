import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement, reset } from "./counterReducer";

function CounterRedux() {
    const { count } = useSelector((state: LabState) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
            <button className="btn btn-danger mx-2" style={{}} onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="btn btn-warning" onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}
export default CounterRedux;