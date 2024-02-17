import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import TemplateLiterals from "./string/TemplateLiterals";

function JavaScript() {
    console.log('Hello World');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <TemplateLiterals />
        </div>
    );
}

export default JavaScript;