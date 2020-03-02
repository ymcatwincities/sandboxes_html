# Open Y Sandboxes landing page

## Source

### Design wireframes

https://xd.adobe.com/view/4c680fc3-feba-4ad1-409f-09efedcd66ac-3a59/

There are 3 variations:
- Mobile Phone (MIN)
- Mobile Tablet
- Desktop (Fixed MAX)

### Images

https://drive.google.com/drive/folders/1j40bjO1l7fD7M6w3QEEcgkkLHZB7N8hn?usp=sharing

### Page text

```
Sandbox

Welcome to the Open Y demo site! Compare the three themes currently offered on Open Y and discover the range of
capabilities across different installation levels of the platform. 
```

### Sandbox Domain Names

- sandboxes.openy.org

- sandbox-carnation-cus.openy.org
- sandbox-carnation-ext.openy.org
- sandbox-carnation-std.openy.org

- sandbox-lily-cus.openy.org
- sandbox-lily-ext.openy.org
- sandbox-lily-std.openy.org

- sandbox-rose-cus.openy.org
- sandbox-rose-ext.openy.org
- sandbox-rose-std.openy.org

### Header

The logo and "back to OpenY.org" point to openy.org.

The logo is to be taken from openy.org. 

The header is sticky for desktops.

### Fonts

The used fonts:

- Quicksand, regular
- Quicksand, bold
- Roboto, regular
- Roboto, medium

The fonts are to be taken from Google fonts.

### Theme palette

- black #000000
- white #FFFFFF
- red #F41938 (+ #D0343A for contrast with white)
- light-grey #F2F2F2

# Development

## Approach

The responsive layout.

The mobile first approach is to be used.

The page is to be built with Bootstrap 4.

Webpack is to be used to provide development environment and build production artifacts.

## Usage

Project installation:

`npm install`

To start local environment:

`npm start`

To build production artifacts:

`npm run build`

## Project structure

- `webpack.*.js` - webpack configuration files
- `src/` - contain all the source files for the project
   - `index.handlebars` - the root Handlebars file for building `index.html`
   - `main.scss` - the root SCSS file for `main.css`
   - `data.json` - contains the page content 
   - `assets/` - all the images for the project
   - `partials/` - contain Handlebars component templates
   - `scss/` - contains SCSS modules

### data.json

The file describes all the content needed to build the static page.

Structure:

- `title` - the page title, used in meta tags;
- `description` - the page description, used in meta tags, must not be longer 155 characters;
- `url` - the URL where this page is gonna be hosted, used in meta tags;
- `header` - the content header (see the wireframes);
- `intro` - the intro text (see the wireframes), non-sanitized, can contain HTML markup;
- `cards` - the array of card objects, used to build the markup for cards:
  - `id` - the card id, used as a HTML `id` attribute, used in CSS;
  - `link` - a link to the sandbox website, used in the "Preview" link;
  - `title` - a title for a card, e.g "Rose: Standard install";
  - `description` - a card body content, non-sanitized, can contain HTML markup.

## TODOs

- [MAJOR] update `src/data.json` with the actual content;
- [MINOR] update `src/external.png` with the actual external link icon;
- [MINOR] automate removing of `main.js` from the build artifact `dist/index.html`;

