
import express from 'express';
import cors from 'cors';

export function makeApp() {
    const app = express();
    app.use(express.json({ limit: '150mb' }));
    app.use(cors());
    // Rutas
    // app.use("/users", userRoute);
    // app.use("/categories", categoryRoute);
    // app.use("/products", productRouote);
    // app.use("/restart", restartRoute);
    return app;
}

// Para compatibilidad con el código existente:
class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = makeApp();
    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}
export default Server;