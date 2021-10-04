# KSU SIGWEB Website

 Our personal landing page

## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/ksu-web-dev/acm-sigweb-site.git
cd acm-sigweb-site
npm install

# Compile Sass
npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses sirv-cli)
npm run server

# Watches Sass for changes and starts a local server
npm start
```

For the most straightforward development, open two Terminal tabs to execute `npm run server` and `npm run watch` at the same time.

Open <http://localhost:3000> to see the page in action.

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.
**Remember to Prefix each command with with `npm run`. ie. `npm run server`**

| Script | Description |
| --- | --- |
| `server` | Starts a local server (<http://localhost:3000>) for development |
| `watch` | Automatically recompiles CSS as it watches the `scss` directory for changes |
| `css` | Runs `css-compile` and `css-prefix` |
| `css-compile` | Compiles source Sass into CSS |
| `css-lint` | Runs [Stylelint](https://stylelint.io) against source Sass for code quality |
| `css-prefix` | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) on the compiled CSS |
| `css-purge` | Runs [PurgeCSS](https://purgecss.com) to remove CSS that is unused by `index.html` |
| `test` | Runs `css-lint` and `css`, in sequential order |

## Useful Resources

The following resources can help you to learn about what the code in this Repo means.

- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
  *Bootstrap 5.1 Documentation*
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  *Mozilla Developer Network's Guide to HTML*
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  *Mozilla Developer Network's Guide to CSS*
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  *Mozilla Developer Network's Guide to JS*
- [Devdocs](https://devdocs.io/)
  *An aggreggator of every Documentation resource for web developers*

### Install Bootlint

This will lint the website you are on and notify you of any Bootstrap styling errors in your html:

1. Create a new bookmark in your browser
2. Set the name/title equal to something that is easy to remember. Ex: Run Bootlint
3. Set the URL equal to:
   > javascript:(function(){var s=document.createElement("script");s.onload=function(){bootlint.showLintReportForCurrentDocument([]);};s.src="https://stackpath.bootstrapcdn.com/bootlint/latest/bootlint.min.js";document.body.appendChild(s)})();
4. Click the button on the website and check the console after you click okay on the prompt and it will tell you about all the errors that were made.

### Check Install

Use this website to check if the HTML in your website is valid:

[W3C HTML Checker](https://validator.w3.org/)

## Useful VS-Code Extensions

These Extensions have the ability to greatly improve your workflow!

- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
  *Completes your html classes for you using intellisense and lints your code as you type*
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  *Run the website as a local server that refreshes as soon as you save a file*
- [CSS peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
  *Right click a class to see what the css looks like behind it*
- [jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)
  *Completes your javascript and lints your code as you type*
