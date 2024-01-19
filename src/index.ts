import { consola } from 'consola';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';
import urlJoin from 'url-join';

import { BASE_URL, pluginDir } from './const';
import data from './syncList';
import { getAuthor, getDomainFromUrl, writeJSON, writeYAML } from './utils';

interface PluginMainifest {
  api: {
    url: string;
  };
  description_for_human: string;
  logo_url: string;
  name_for_human: string;
  name_for_model: string;
}

const run = async () => {
  const list = await pMap(
    data,
    async ({ manifest, path, tags }) => {
      const dirPath = resolve(pluginDir, path);
      try {
        if (!existsSync(dirPath)) {
          mkdirSync(dirPath, { recursive: true });
        }
        const manifestRes = await fetch(manifest);
        const manifestJson: PluginMainifest = await manifestRes.json();
        if (!manifestJson) return;

        const apiRes = await fetch(manifestJson.api.url);
        const isJSON = manifestJson.api.url.includes('.json');
        const apiFilename = isJSON ? 'openapi.json' : 'openapi.yaml';
        if (isJSON) {
          const apiJson = await apiRes.json();
          writeJSON(resolve(dirPath, apiFilename), apiJson);
        } else {
          const apiYaml = await apiRes.text();
          writeYAML(resolve(dirPath, apiFilename), apiYaml);
        }
        manifestJson.api.url = urlJoin(BASE_URL, path, apiFilename);
        writeJSON(resolve(dirPath, 'manifest.json'), manifestJson);
        consola.success(`Synced ${path}`);

        return {
          author: getAuthor(manifest),
          homepage: getDomainFromUrl(manifest),
          identifier: manifestJson.name_for_model,
          manifest: urlJoin(BASE_URL, path, 'manifest.json'),
          meta: {
            avatar: manifestJson.logo_url,
            description: manifestJson.description_for_human,
            tags: tags,
            title: manifestJson.name_for_human,
          },
          schemaVersion: 1,
        };
      } catch (error) {
        console.error(`Failed to sync ${path}`, error);
        rmSync(dirPath, { force: true, recursive: true });
        console.warn(`Remove ${path}`);
      }
    },
    { concurrency: 5 },
  );

  writeJSON(resolve(pluginDir, 'index.json'), list);
};

run();
