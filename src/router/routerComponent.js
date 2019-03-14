// Modules
import asyncComponent from './asyncComponent';

// Home
const Home = asyncComponent(() => import('../containers/Home/Home'));

const routerComponents = {
    'Home': Home
}

export default routerComponents;