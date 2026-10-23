# Westbridge College (demo static site)
Plain HTML/CSS/JS. No build step.
## Edit
- Homepage banner: edit `heroBannerUrl` at the top of `js/script.js` (nothing else). `heroFallbackUrl` is the local backup image.
- College name/contact: search for `Westbridge` and `example` in each .html file (header, footer, contact.html).
- Courses, faculty, notices: edit the cards directly in courses.html, faculty.html, notices.html.
- Images: replace the sample `.svg` placeholders in `images/` with real photos (keep the same filenames, or update the `src`). Convert photos to WebP/JPG at about 1600px (hero) and 800px (others).
- Fonts: uses system fallbacks. Add Poppins/Inter files later if wanted.
## GitHub
Create a repo, upload the contents of this folder to the `main` branch.
## Cloudflare Pages
Workers & Pages > Create > Pages > Connect to Git > pick repo. Framework preset: None. Build command: blank. Output directory: `/`. Production branch: `main`.
## Not done yet
canonical URLs and sitemap.xml (need your domain); real map embed; Lighthouse and device testing.

## Extras
- Dark mode: header toggle, remembered per visitor.
- WhatsApp/call buttons: edit the dummy number `10000000000` in the `FLOAT` links on every page (search `10000000000`).
- Numbers strip and testimonials: sample data in index.html; replace with verified figures.
- SEO: sitemap.xml uses `www.example.com`; replace with your domain, add canonical tags (see comment in each page head), add the Sitemap line to robots.txt. Add an absolute og:image once you have a JPG/PNG.
