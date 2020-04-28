const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("twitter-scroll-test", async () => {
  await page.goto("http://twitter.com/");
  await qawolf.scroll(page, "html", { x: 0, y: 538 });
});
