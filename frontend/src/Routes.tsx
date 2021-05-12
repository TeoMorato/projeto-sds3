import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </switch>
        </BrowserRouter>
    );
}

export default Router;
