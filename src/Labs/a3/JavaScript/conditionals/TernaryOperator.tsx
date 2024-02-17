function TernaryOperator() {
    let loggedIn = true;

    return (
        <div>
            <h2>Ternary Operator</h2>
            {loggedIn ? <p>Welcome User</p> : <p>Please Login</p>}
        </div>
    );
}

export default TernaryOperator;