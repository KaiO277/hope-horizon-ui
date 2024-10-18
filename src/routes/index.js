import Home from '~/pages/Home';
import Post from '~/pages/Post';
import Podcast from '~/pages/Podcast';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/post', component: Post },
    { path: '/podcast', component: Podcast },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
