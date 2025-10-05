import { makeApp } from "./app";

const app = makeApp();
const PORT = 3000;
app.listen(PORT, () => {
    console.log("on port 3000");
});