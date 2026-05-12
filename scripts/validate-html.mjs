import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../video/supple-hack-60sec.html', import.meta.url), 'utf8');
const svg = readFileSync(new URL('../video/supple-hack-60sec.svg', import.meta.url), 'utf8');
const required = [
  'サプリくん',
  '--duration: 60s',
  'クレアチン',
  'リンゴ酸マグネシウム',
  'ビタミンB群',
  'supple-hack.com/?p=5'
];

const missing = required.filter((token) => !html.includes(token) || !svg.includes(token));
if (missing.length > 0) {
  throw new Error(`Missing required tokens: ${missing.join(', ')}`);
}

console.log('HTML and SVG video assets include the required 60-second timeline, character, source, and supplement sections.');
