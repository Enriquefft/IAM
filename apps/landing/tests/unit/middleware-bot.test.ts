import { describe, it, expect } from "vitest";
import { isCrawler, CRAWLER_UA_REGEX } from "../../src/lib/crawler";

describe("isCrawler — search engines", () => {
  it.each([
    [
      "Googlebot",
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    ],
    ["Bingbot", "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"],
    ["DuckDuckBot", "DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)"],
    ["YandexBot", "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)"],
    ["Baiduspider", "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)"],
    ["Applebot", "Mozilla/5.0 (compatible; Applebot/0.1; +http://www.apple.com/go/applebot)"],
    ["AdsBot-Google", "AdsBot-Google (+http://www.google.com/adsbot.html)"],
    ["Google-Extended", "Mozilla/5.0 (compatible; Google-Extended)"],
  ])("identifies %s", (_name, ua) => {
    expect(isCrawler(ua)).toBe(true);
  });
});

describe("isCrawler — social card unfurlers", () => {
  it.each([
    ["facebookexternalhit", "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"],
    ["meta-externalagent", "meta-externalagent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)"],
    ["Twitterbot", "Twitterbot/1.0"],
    ["Slackbot", "Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)"],
    ["LinkedInBot", "LinkedInBot/1.0 (compatible; Mozilla/5.0; +http://www.linkedin.com)"],
    ["WhatsApp", "WhatsApp/2.23.5.78 A"],
    ["TelegramBot", "TelegramBot (like TwitterBot)"],
    ["Discordbot", "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)"],
    ["Pinterestbot", "Mozilla/5.0 (compatible; Pinterestbot/1.0; +http://www.pinterest.com/bot.html)"],
    ["Embedly", "Embedly/0.2 (https://embed.ly)"],
  ])("identifies %s", (_name, ua) => {
    expect(isCrawler(ua)).toBe(true);
  });
});

describe("isCrawler — AI crawlers (matches public/robots.txt allowlist)", () => {
  it.each([
    ["GPTBot", "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.0; +https://openai.com/gptbot"],
    ["ClaudeBot", "Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)"],
    ["PerplexityBot", "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)"],
    ["Bytespider", "Mozilla/5.0 (compatible; Bytespider; spider-feedback@bytedance.com)"],
    ["CCBot", "CCBot/2.0 (https://commoncrawl.org/faq/)"],
    ["Amazonbot", "Mozilla/5.0 (compatible; Amazonbot/0.1; +https://developer.amazon.com/support/amazonbot)"],
    ["ChatGPT-User", "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ChatGPT-User/1.0; +https://openai.com/bot)"],
  ])("identifies %s", (_name, ua) => {
    expect(isCrawler(ua)).toBe(true);
  });
});

describe("isCrawler — auditors", () => {
  it.each([
    ["Lighthouse", "Mozilla/5.0 (Linux; Android) AppleWebKit/537.36 Chrome/119.0.0.0 Mobile Safari/537.36 Chrome-Lighthouse"],
    ["PageSpeed", "Mozilla/5.0 PageSpeed/1.0"],
  ])("identifies %s", (_name, ua) => {
    expect(isCrawler(ua)).toBe(true);
  });
});

describe("isCrawler — humans", () => {
  it.each([
    ["Chrome desktop", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"],
    ["Safari iOS", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"],
    ["Firefox", "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0"],
    ["Edge", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"],
    ["Samsung Browser", "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/22.0 Chrome/115.0.0.0 Mobile Safari/537.36"],
  ])("does NOT match %s", (_name, ua) => {
    expect(isCrawler(ua)).toBe(false);
  });
});

describe("isCrawler — test runners (intentionally treated as humans)", () => {
  it.each([
    ["HeadlessChrome (Playwright default)", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/120.0.0.0 Safari/537.36"],
    ["Puppeteer", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/119.0.6045.105 Safari/537.36 Puppeteer/21.0"],
  ])("does NOT match %s — e2e suites validate the human redirect path", (_name, ua) => {
    expect(isCrawler(ua)).toBe(false);
  });
});

describe("isCrawler — edge cases", () => {
  it("returns false for null UA", () => {
    expect(isCrawler(null)).toBe(false);
  });

  it("returns false for empty UA", () => {
    expect(isCrawler("")).toBe(false);
  });

  it("returns false for unknown bot", () => {
    expect(isCrawler("MyCustomBot/1.0")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isCrawler("GOOGLEBOT/2.1")).toBe(true);
    expect(isCrawler("googlebot/2.1")).toBe(true);
    expect(isCrawler("GoogleBot/2.1")).toBe(true);
  });

  it("regex is exported for direct introspection", () => {
    expect(CRAWLER_UA_REGEX.flags).toContain("i");
  });
});
