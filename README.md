# Cape Breeze Boutique Hotel Landing Page

A production-ready, responsive hotel landing page created for the fictional **Cape Breeze Boutique Hotel** in Cape Coast, Ghana.

The project demonstrates the complete delivery of a modern business website—from planning and frontend development to deployment, form integration, analytics, monitoring, accessibility, and performance optimization.

## Live website

[Visit the deployed website](https://hotel-landing-page.patrickankomah4.workers.dev/)

## Project objective

Cape Breeze needed a professional online presence that would allow potential guests to:

- Explore available rooms
- Discover hotel amenities
- Learn about Cape Coast
- View hotel photography
- Submit booking enquiries
- Access the website comfortably on mobile and desktop devices

## Features

- Responsive mobile-first design
- Accessible mobile navigation
- Hotel room and amenity sections
- Cape Coast destination information
- Responsive image gallery
- Testimonial section
- Working booking enquiry form
- Client-side form and date validation
- Formspree submission integration
- Success and error feedback
- Custom 404 page
- Search-engine metadata
- Open Graph metadata
- `robots.txt` and XML sitemap
- Optimized WebP images
- Cloudflare Web Analytics
- UptimeRobot availability monitoring
- Automatic deployment from GitHub

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub
- Cloudflare Workers Static Assets
- Formspree
- Cloudflare Web Analytics
- UptimeRobot
- Google PageSpeed Insights

## Production audit results

The deployed website was tested using Google PageSpeed Insights.

| Audit | Mobile | Desktop |
|---|---:|---:|
| Performance | 90 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

PageSpeed results can vary slightly between individual tests.

## Project structure

```text
hotel-landing-page/
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       ├── guest-room.webp
│       ├── hotel-exterior.webp
│       └── pool-courtyard.webp
├── css/
│   └── style.css
├── js/
│   └── main.js
├── .gitignore
├── 404.html
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
└── wrangler.jsonc
```

## Running the project locally

No package installation or local backend is required.

1. Clone the repository:

```bash
git clone https://github.com/kojoankomah/hotel-landing-page.git
```

2. Open the project folder:

```bash
cd hotel-landing-page
code .
```

3. Open `index.html` using the Visual Studio Code Live Server extension.

## Booking enquiry workflow

When a visitor submits the booking form:

1. The browser validates the required fields.
2. JavaScript confirms that check-out is later than check-in.
3. The information is submitted securely to Formspree.
4. The visitor receives a success or error message.
5. The enquiry becomes available in the configured Formspree account.

## Deployment

The website is connected to GitHub and automatically deployed through Cloudflare.

```text
Local development
        ↓
GitHub repository
        ↓
Cloudflare deployment
        ↓
Live HTTPS website
```

New commits pushed to the `main` branch trigger a new production deployment.

## Monitoring and analytics

- **Cloudflare Web Analytics** measures page views and website activity.
- **UptimeRobot** checks the deployed website every five minutes and reports availability problems.
- **Google PageSpeed Insights** is used to audit performance, accessibility, best practices, and SEO.

## Demonstration notice

Cape Breeze Boutique Hotel is a fictional business created for this portfolio project. Room prices, testimonials, contact details, images, and business information are demonstration content and do not represent a real hotel.

## Author

Developed by [Kojo Ankomah](https://github.com/kojoankomah).