
import express from 'express';
import cors from 'cors';

export function makeApp() {
    const app = express();
    app.use(express.json({ limit: '150mb' }));
    app.use(cors());
    // Rutas
    // app.use("/orders", ordersRoute);
    // app.use("/order/:id", ordersIdRoute);
    // app.use("/orders/:id/cancel", cancelRouote);
    // app.use("/orders?status", statusRoute);
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