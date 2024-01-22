interface PluginItem {
  manifest: string;
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
    tags: ['crypto','BTC','ETH','BNB'],
  },
  {
    manifest: 'https://app.swap.net/.well-known/ai-plugin.json',
    path: 'nftguru',
    tags: ['crypto','NFT'],
  },
  {
    manifest: 'https://llamawrapper-prod.onrender.com/.well-known/ai-plugin.json',
    path: 'defillama',
    tags: ['crypto','DeFi'],
  },
  {
    manifest: 'https://search-ai.mintbase.xyz/.well-known/ai-plugin.json',
    path: 'mintbasesearch',
    tags: ['crypto','NFT'],
  },
  {
    manifest: 'https://speak.com/.well-known/ai-plugin.json',
    path: 'speak',
    tags: ['education','language'],
  },
];

export default PluginList;
