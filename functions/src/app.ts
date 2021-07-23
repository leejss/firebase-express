import * as express from "express";

export class ExpressConfig {
  public app: express.Express;
  constructor() {
    this.app = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private router() {
    this.app.get("/time", (req, res) => {
      res.send(`${Date.now()}`);
    });
    this.app.get("/hello", (req, res) => {
      res.send("Hello World");
    });
  }
}
