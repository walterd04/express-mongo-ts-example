import App from './app'; 
import PostsController from './posts/controllers/PostController';

const app = new App(
    [
        new PostsController()
    ], 
    5000
);

app.listen();