import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import 'dotenv/config';

export default class App { 
    public app: express.Application; 
    public port: number;

    constructor(controllers, port) { 
        this.app = express(); 
        this.port = port;

        this.dbConnect();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private dbConnect(){
        const {
            MONGO_USER, 
            MONGO_PASSWORD, 
            MONGO_PATH
        } = process.env;

        mongoose.connect(`mongodb+srv://walterd04:MountiePride123@express-typescript-example-3ao9v.mongodb.net/test?retryWrites=true&w=majority
        `, { useNewUrlParser: true })
            .then(() => { console.log("Connected Successfully") })
            .catch((err) => { console.log("Error connecting: " + err) });
    }

    private initializeMiddlewares() { 
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => { 
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        });
    }
}