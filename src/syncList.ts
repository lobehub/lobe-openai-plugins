interface PluginItem {
  manifest: string;
  overrides?: {
    manifest?: { [key: string]: any };
    openapi?: { [key: string]: any };
  };
  path: string;
  tags?: string[];
}
const PluginList: PluginItem[] = [
  {
    manifest: 'https://seo-plugin.orrenprunckun.com/.well-known/ai-plugin.json',
    path: 'seo',
    tags: ['seo'],
  },
  {
    manifest: 'https://savvytrader.com/.well-known/ai-plugin.json',
    path: 'savvy-trader',
    tags: ['stock', 'analyze'],
  },
  {
    manifest: 'https://plugin.askyourpdf.com/.well-known/ai-plugin.json',
    overrides: {
      openapi: {
        servers: [
          {
            url: 'https://plugin.askyourpdf.com',
          },
        ],
      },
    },
    path: 'ask-your-pdf',
    tags: ['pdf', 'document', 'web'],
  },
  {
    manifest: 'https://assetovi.com/.well-known/ai-plugin.json',
    path: 'asset-ovi',
    tags: ['3-d', 'assets', 'search'],
  },
  {
    manifest: 'https://chat-plugin-giphy.efficiency.tools/.well-known/ai-plugin.json',
    path: 'gif-search',
    tags: ['gif', 'image', 'search'],
  },
  {
    manifest: 'https://twitter.say-apps.com/.well-known/ai-plugin.json',
    path: 'social-search',
    tags: ['social', 'twitter', 'x', 'search'],
  },
  {
    manifest: 'https://stack-overflow-search.onrender.com/.well-known/ai-plugin.json',
    path: 'stackoverflow',
    tags: ['stack-overflow', 'q-a'],
  },
  {
    manifest: 'https://api.getchange.io/.well-known/ai-plugin.json',
    path: 'getchange',
    tags: ['charity'],
  },
  {
    manifest: 'https://cryptoplugin.feednews.com/.well-known/ai-plugin.json',
    path: 'token-insights',
    tags: ['crypto', 'BTC', 'ETH', 'BNB'],
  },
  {
    manifest: 'https://app.swap.net/.well-known/ai-plugin.json',
    path: 'nftguru',
    tags: ['crypto', 'NFT'],
  },
  {
    manifest: 'https://llamawrapper-prod.onrender.com/.well-known/ai-plugin.json',
    path: 'defillama',
    tags: ['crypto', 'DeFi'],
  },
  {
    manifest: 'https://search-ai.mintbase.xyz/.well-known/ai-plugin.json',
    path: 'mintbasesearch',
    tags: ['crypto', 'NFT'],
  },
  {
    manifest: 'https://speak.com/.well-known/ai-plugin.json',
    path: 'speak',
    tags: ['education', 'language'],
  },
  {
    manifest: 'https://openai.tapapis.com/.well-known/ai-plugin.json',
    path: 'game-sight',
    tags: ['game', 'search'],
  },
  {
    manifest: 'https://websearch.plugsugar.com/.well-known/ai-plugin.json',
    path: 'web-search',
    tags: ['search', 'plugsugar'],
  },
  {
    manifest: 'https://sheet-generator.brandzzy.com/.well-known/ai-plugin.json',
    path: 'make-a-sheet',
    tags: ['csv', 'excel', 'sheet'],
  },
  {
    manifest: 'https://showme.redstarplugin.com/.well-known/ai-plugin.json',
    path: 'diagrams-show-me',
    tags: ['diagrams'],
  },
  {
    manifest: 'https://chatgpt.boolio.co.kr/.well-known/ai-plugin.json',
    path: 'boolio',
    tags: ['stock', 'analyze'],
  },
  {
    manifest: 'https://api.360macky.com/.well-known/ai-plugin.json',
    path: 'astrodaily',
    tags: ['nasa', 'search', 'image'],
  },
  {
    manifest: 'https://weathergpt.vercel.app/.well-known/ai-plugin.json',
    path: 'weather-gpt',
    tags: ['weather'],
  },
  {
    manifest: 'https://chat-gpt-github-stat-plugin.vercel.app/.well-known/ai-plugin.json',
    path: 'github-stats',
    tags: ['github', 'oss'],
  },
  {
    manifest: 'https://chatgpt-plugin.questmate.com/.well-known/ai-plugin.json',
    path: 'questmate',
    tags: ['forms', 'checklists', 'productivity'],
  },
  {
    manifest: 'https://scholarly.maila.ai/.well-known/ai-plugin.json',
    path: 'scholarly',
    tags: ['scientific-literature', 'search'],
  },
  {
    manifest: 'https://api.litmaps.com/.well-known/ai-plugin.json',
    path: 'litmaps',
    tags: ['scientific-literature', 'search'],
  },
  {
    manifest: 'https://txyz.ai/.well-known/ai-plugin.json',
    path: 'txyz',
    tags: ['research-paper', 'search'],
  },
  {
    manifest: 'https://www.guruwalk.com/.well-known/ai-plugin.json',
    path: 'guru-walk',
    tags: ['travel', 'guides'],
  },
  {
    manifest: 'https://www.travelmyth.com/.well-known/ai-plugin.json',
    path: 'travelmyth',
    tags: ['travel', 'hotel', 'search'],
  },
  {
    manifest: 'https://earthquake.beta3.dev/.well-known/ai-plugin.json',
    path: 'earthquake',
    tags: ['earthquake', 'utilities'],
  },
  {
    manifest: 'https://gpt.domatron.com/.well-known/ai-plugin.json',
    path: 'domatron',
    tags: ['domain', 'search'],
  },
  {
    manifest: 'https://nba-gpt-prod.onrender.com/.well-known/ai-plugin.json',
    path: 'nba-stats',
    tags: ['sports', 'basketball', 'nba'],
  },
  {
    manifest: 'https://vcaption.maila.ai/.well-known/ai-plugin.json',
    path: 'video-captions',
    tags: ['video-to-text', 'youtube'],
  },
  {
    manifest: 'https://glarity.app/.well-known/ai-plugin.json',
    path: 'video-summary',
    tags: ['video-to-text', 'youtube'],
  },
];

export default PluginList;
