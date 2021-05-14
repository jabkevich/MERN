import 'materialize-css'
import {useRouters} from "./routers";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const routes = useRouters(false)
  return (
      <Router>
        <div className="container">
            {routes}
        </div>
      </Router>
  );
}

export default App;
