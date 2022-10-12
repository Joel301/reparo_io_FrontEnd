// import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./auth/loginButton";
import Profile from "./auth/Profile";

function App() {
    return (
        <div className="App">
            <h1>reparo.io</h1>
            <p>init page</p>
            <LoginButton />
            <Profile />
        </div>
    );
}

export default App;
