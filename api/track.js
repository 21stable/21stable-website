export default function handler(req, res) {
  // Set CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  
  // Log the visit (Vercel stores in edge logs)
  const { path, referrer } = req.query;
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || '';
  const ua = req.headers['user-agent'] || '';
  
  // Store in Vercel KV or just log
  console.log(JSON.stringify({ 
    type: 'pageview', 
    path: path || '/', 
    referrer: referrer || '', 
    ip: ip.slice(0, 50), 
    ua: ua.slice(0, 200),
    ts: new Date().toISOString()
  }));
  
  // Return 1x1 transparent GIF
  res.setHeader('Content-Type', 'image/gif');
  res.status(200).send(Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64'));
}
