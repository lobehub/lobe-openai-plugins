import { writeFileSync } from 'node:fs';

export const writeJSON = (filePath, data) => {
  const jsonStr = JSON.stringify(data, null, 2);
  writeFileSync(filePath, jsonStr, 'utf8');
};

export const writeYAML = (filePath, data) => {
  writeFileSync(filePath, data, 'utf8');
};

export const getDomainFromUrl = (url) => {
  const withoutProtocol = url.replace(/^https?:\/\//, '');
  const domain = withoutProtocol.split('/')[0];
  return 'https://' + domain.split(':')[0];
};

export const getAuthor = (url) => {
  const withoutProtocol = url.replace(/^https?:\/\//, '');
  const domain = withoutProtocol.split('/')[0];
  const domains = domain.split(':')[0].split('.');
  return domains.length > 2 ? domains[1] : domains[0];
};
