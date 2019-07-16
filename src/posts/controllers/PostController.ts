import * as express from 'express'; 
import Post from '../interfaces/posts';

export default class PostsController {
    public path = '/posts'; 
    public router = express.Router(); 

    private posts: Post[] = [
        { 
            author: 'Marcin', 
            content: 'Dolor sit amet', 
            title: 'Lorem Ipsum'
        }
    ];

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes() { 
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.addPost);
    }

    getAllPosts = (request: express.Request, response: express.Response) => { 
        response.send(this.posts);
    }

    addPost = (request: express.Request, response: express.Response) => { 
        const post: Post = request.body; 
        this.posts.push(post); 
        response.send(post);
    }
}