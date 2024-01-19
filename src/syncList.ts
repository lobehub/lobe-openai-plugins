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
];

export default PluginList;
