export default async function handler(req, res) {
  // Set CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  
  const { path: pagePath, referrer, session } = req.query;
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].slice(0, 50);
  const ua = (req.headers['user-agent'] || '').slice(0, 200);
  
  // Forward to self-hosted analytics via Cloudflare tunnel
  const tunnelUrl = 'https://hobbies-bone-cgi-karma.trycloudflare.com';
  try {
    await fetch(`${tunnelUrl}/track?path=${encodeURIComponent(pagePath || '/')}&referrer=${encodeURIComponent(referrer || '')}&session=${encodeURIComponent(session || ip)}&site=21stable`, {
      signal: AbortSignal.timeout(3000)
    }).catch(() => {}); // Don't block the response
  } catch (e) { /* ignore */ }
  
  // Return 1x1 transparent GIF
  res.setHeader('Content-Type', 'image/gif');
  res.status(200).send(Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'));
}