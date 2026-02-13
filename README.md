# [espi.me][espi.me]

My personal website and blog, powered by Jekyll.

## Development

- For development, ensure you have Ruby and Bundler >=4 installed and in your path.
    1. Install depdencies by running `bundle install`.
    2. To build, run `bundle exec jekyll build`.
    3. To cleanup previous builds, run `bundle exec jekyll clean`.
    4. To serve a development server, run `bundle exec jekyll serve`.
- For formatting, ensure you have Node.js >=24 and npm >=11 installed and in your path.
    1. Install dependencies by running `npm i`.
    2. To format, run `npm run format`.
    3. To format in VSCodium, install `Shopify.theme-check-vscode`.

## Deployment

This website is deployed via GitHub Pages using actions. If you fork this repository and wish to deploy it yourself, you will need to edit [\_config.yml][config] to match your information.

## License

- [Source code][src-code] is licensed under the [zlib][license-zlib] license.
- [Blog posts][src-posts] are licensed under [CC BY 4.0][license-cc].
- Assets and images belong to their original creators.

[config]: _config.yml "A link to the Jekyll configuration file."
[espi.me]: https://espi.me "A link to espi (dot) me."
[license-cc]: LICENSE-CC.txt "A link to the CC BY 4.0 license."
[license-zlib]: LICENSE.txt "A link to the zlib license."
[src-code]: ./src "A link to the site's source code."
[src-posts]: ./src/_posts "A link to the blog posts."
