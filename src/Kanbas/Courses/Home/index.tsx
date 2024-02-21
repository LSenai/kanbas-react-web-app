import ModuleList from "../Modules/List";
import Status from "./Status";
import './index.css';

function Home() {
    return (
        <div className="row">
            <div className="col-md-8"><ModuleList /></div>
            <div className="col-md-2"><Status /></div>
        </div>
    );
}
export default Home;