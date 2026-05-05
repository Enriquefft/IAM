/**
 * User-agent detection for crawlers and social-card unfurlers.
 *
 * Bots get content at `/` instead of a 302 redirect — link previews and
 * brand-query indexing depend on the root URL serving real HTML. Test runners
 * (playwright/puppeteer/headlesschrome) are intentionally omitted so e2e
 * suites validate the human redirect path; tests that exercise the bot path
 * set the UA explicitly.
 */

export const CRAWLER_UA_REGEX =
  /(?:googlebot|google-extended|bingbot|adsbot-google|mediapartners-google|duckduckbot|yandex(?:bot|images|metrika)|baiduspider|sogou|exabot|applebot|facebookexternalhit|facebookbot|meta-externalagent|slackbot|twitterbot|x-bot|linkedinbot|whatsapp|telegrambot|discordbot|pinterest(?:bot)?|redditbot|embedly|skypeuripreview|vkshare|w3c_validator|gptbot|chatgpt-user|oai-searchbot|claudebot|claude-web|perplexitybot|youbot|bytespider|amazonbot|ccbot|cohere-ai|anthropic-ai|diffbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|seekportbot|ia_archiver|archive\.org_bot|wayback|lighthouse|chrome-lighthouse|pagespeed|gtmetrix)/i;

export function isCrawler(userAgent: string | null): boolean {
  if (userAgent === null || userAgent.length === 0) return false;
  return CRAWLER_UA_REGEX.test(userAgent);
}
