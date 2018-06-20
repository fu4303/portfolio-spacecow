# seeyouspacecow-node
node version of my portfolio website

[seeyouspacecow.com](http://seeyouspacecow.com)

es6 js, sass, nodejs, express, handlebars, grunt, bower

### To use:

`npm install`

`bower install`

`grunt`

`npm start`

#### Notes:

site will be accessible at `http://localhost:8000` 

the server runs on port 8000

node files are all inside `/app`, and so are all asset source files

all public-facing files are inside `/public` and are generated by grunt during development

development is compiled with grunt tasks, which are defined inside the `/grunt` folder

vendor packages managed with bower

this is a test migration to node (from php) as my primary backend language, see how it goes

routes for each page are defined inside `/app/includes/config/` and executed inside `/app/includes/routes.js`

each page has its own respective js and css files, apart from globals

#### TODO:

integrate database calls to generate content server-side

