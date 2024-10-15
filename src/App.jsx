import { Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  // State to track the userName input
  const [userName, setUserName] = useState("");

  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      {/* Input field to collect userName */}
      <div>
        <label htmlFor="username">Enter your name: </label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <nav>
        <ul>
          <Link to={`profile/${userName}`}>Profile page of {userName}</Link>
        </ul>
      </nav>
    </div>
  );
};

export default App;
