// Modules
import asyncComponent from './asyncComponent';

// Home
const Home = asyncComponent(() => import('../containers/Home/Home'));
const Register = asyncComponent(() => import('../containers/Register/Register'));

const routerComponents = {
    'Home': Home,
    'Register': Register
}

export default routerComponents;