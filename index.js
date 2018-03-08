const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

app.use(async ctx => {
    const path = /\.js$/.test(ctx.request.path) ? `./dist${ctx.request.path}` : './index.html';
    const body = await readFile(path);
    ctx.body = body.toString();
});

app.listen(3000);