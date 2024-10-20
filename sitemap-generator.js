// Ensure this file extension is .js (with "type": "module" in package.json)
import { mkdirSync } from 'node:fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path'

// URLs you want to include, ideally these should be dynamic based on your routes
const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.3 },
  // Add more paths as needed
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://wenchuanlilizhao.netlify.app/' });
  const writeStream = createWriteStream(resolve(process.cwd(), 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap has been generated!');
})();

try {
  mkdirSync(resolve(process.cwd(), 'public'), { recursive: true });
} catch (err) {
  console.error('Error creating directory:', err);
}