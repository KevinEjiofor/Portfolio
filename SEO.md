# Deployment & search setup

The canonical domain is **https://www.kevinejiofor.com**, set in `lib/site.ts` and
overridable with `NEXT_PUBLIC_SITE_URL`. Everything below is already wired up in code.
What remains needs access you have and I don't.

## 1. DNS — point both hosts at the site

Serve the bare apex as a redirect, not as a second copy of the site. If both
`kevinejiofor.com` and `www.kevinejiofor.com` return pages, Google indexes both and
splits the ranking between them.

| Host | Record | Behaviour |
|---|---|---|
| `www.kevinejiofor.com` | CNAME to your host | serves the site |
| `kevinejiofor.com` | A / ALIAS to your host | **301 redirect** to the www host |

Vercel, Netlify and Amplify all do this from the dashboard: add both domains and mark
the apex as redirecting to www.

## 2. Contact form — connect a mail service

The form posts to `/api/contact`. Until these two variables are set it stays honest and
tells visitors to email you directly instead of pretending the message sent.

1. Create an API key at resend.com/api-keys.
2. Verify `kevinejiofor.com` as a sending domain in Resend (it gives you DNS records).
3. Set both variables on your host:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_FROM_EMAIL=contact@kevinejiofor.com
   ```
   `CONTACT_FROM_EMAIL` must be on the domain you verified. Mail is delivered to the
   address in `lib/site.ts`, with the sender set as reply-to so you can reply directly.

The route already validates input, caps field lengths, rate limits to 5 messages per
hour per IP, and silently absorbs bots via a honeypot field.

## 3. Google Search Console

1. Add `https://www.kevinejiofor.com` as a property.
2. Choose the HTML tag method, copy the token, set it and redeploy:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-token-here
   ```
3. Click **Verify**, then submit `https://www.kevinejiofor.com/sitemap.xml` under Sitemaps.
4. Run **URL Inspection** on the homepage and click **Request indexing**.

Indexing is not instant. Expect days to a few weeks before a name search finds the site.

## Already in place

- `app/sitemap.ts` and `app/robots.ts` — all seven public pages, `/api/` and `/customize` blocked.
- `app/layout.tsx` — title template, description, keywords, canonical, Open Graph, Twitter card.
- `components/structured-data.tsx` — schema.org `Person`, `WebSite` and `ProfilePage`
  linking the name to the GitHub and LinkedIn profiles.
- One `<h1>` per page, each with its own title, description and canonical URL.
- `public/og.png` — the 1200x630 link preview card.

## Worth doing yourself

- Add the site link to your GitHub profile README and the LinkedIn "Website" field.
  Those two are the strongest signal that the site belongs to you.
