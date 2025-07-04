import ads from '../ads.json' assert { type: 'json' }

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/random") {
      const ad = ads[Math.floor(Math.random() * ads.length)];
      return Response.json(ad);
    }

    return new Response("🧠 Fake Hentai Ads API – Usa /api/random", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
