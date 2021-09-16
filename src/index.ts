import bodyParser from "body-parser";
import express from "express";
import { Telegraf } from "telegraf";

/*
  TELEGRAM_BOT_TOKEN is an environment variable
  that should be configured on Railway
*/
if (!process.env.TELEGRAM_BOT_TOKEN) throw new Error("Please add a bot token");
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(ctx => ctx.reply("Bruh, did you just started?"));
bot.hears("hello", ctx => {
  ctx.reply("oh hey");
});
bot.hears("hi", ctx => {
  ctx.reply("hemlo!");
});
bot.hears("sus", ctx => {
  ctx.reply("holy f Amogus 😳");
});

bot.launch();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
