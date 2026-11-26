# Sakina, Hajj and Umrah website

Bilingual (Arabic RTL and English) multi-page static website: home, packages with filter, five package detail pages, hotels, visa guide, guides, about, FAQ and a booking request form with validation.

All prices, hotel names, reviews and people are demo data. The WhatsApp number in `build.mjs` (`WA`) is a placeholder.

## Build
    node build.mjs   # writes the site to dist/

Pages are generated from the data at the top of `build.mjs`. No dependencies.
