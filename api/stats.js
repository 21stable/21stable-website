export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  // For now return a placeholder - real stats need Vercel KV or external DB
  // We can use the local server via a webhook
  res.status(200).json({
    message: 'Analytics endpoint - use dashboard at http://192.168.2.50:3001',
    note: 'Self-hosted analytics running locally'
  });
}
