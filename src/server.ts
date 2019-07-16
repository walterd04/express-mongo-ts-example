import App from './app'; 
import PostsController from './posts/controllers/PostController';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(
    [
        new PostsController()
    ], 
    5000
);

app.listen();