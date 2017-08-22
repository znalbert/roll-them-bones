# MOBB - My Opinionated Basic Boilerplate
This is an opinionated boilerplate for newbs looking to get into the world of HTML, CSS, and JavaScript development.

## Editor - VS Code
I was loathe to admit it that Microsoft came out with a product that I really, truly like. That being said, when I look at all the trade-offs for an editor, I do not know of another free editor that is as well-supported, full-featured, and active in plugin development. If you're some Vim wizard or Emacs god, fine. Otherwise, use VS Code to get up and running as painlessly as possible.

### Plugins
There are a bunch that I'd recommend, but depending on the project you'll want to enable/disable some via your Workspace Settings.

#### Favorites
- Beautify
- Document This
- EditorConfig for VS Code
- ESLint
- TSLint
- vscode-icons
- Path Intellisense

#### Others Worth Maybe Getting
- Auto Rename Tag
- Bracket Pair Colorizer
- Code Runner
- Color Highlight
- Color Picker
- CSS Peek
- Debugger for Chrome
- Git Blame
- Git History (git log)
- IntelliSense for CSS class names
- npm
- npm Intellisense
- Sass

### Configuration: User Settings
One thing to note about User Settings in VS Code is that at the time of writing this you can't enable an extension just by Workspace. Instead, you must have it installed and enabled "Always," but then in user settings you can set the enabled flag to 'false'. After this you can switch the enabled flag to 'true' in individual Workspace Settings. This is particularly relevent when having both ESLint and TSLint installed, like below:
```
{
    "workbench.iconTheme": "vscode-icons",
    "editor.tabSize": 2,
    "editor.renderWhitespace": "boundary",
    "editor.rulers": [
        80
    ],
    "editor.minimap.enabled": true,
    "terminal.integrated.shellArgs.osx": [
        "-l"
    ],
    "[markdown]": {
        "editor.wordWrap": "wordWrapColumn",
        "editor.wordWrapColumn": 80,
        "editor.quickSuggestions": false,
        "editor.wrappingIndent": "same"
    },
    "eslint.enable": false,
    "tslint.enable": false,
    "editor.wrappingIndent": "indent",
    "editor.renderIndentGuides": true,
    "workbench.editor.tabCloseButton": "left",
    "workbench.quickOpen.closeOnFocusLost": false,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "window.zoomLevel": 0,
    "editor.fontSize": 12,
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    }
}
```

### Configuration: Workspace Settings

## Package Manager - npm
With npm implementing a package-lock.json file I, personally, no longer see a need to use Yarn or some other solution.

## Bundling, Minification, Sourcemaps, Transpiling - webpack

## Development Webserver - webpack-dev-server

## Linting - TSLint

## To Do's
- [ ] Editor & Configuration
  - [x] Editor
  - [x] Plugins
  - [x] User Settings
  - [ ] Workspace Settings
- [x] Package Management
- [ ] Bundling
- [ ] Minification
- [ ] Sourcemaps
- [ ] Transpiling
- [ ] Dynamic HTML Generation
- [ ] Centralized HTTP
- [ ] Mock API framework
- [ ] Component Libraries
- [ ] Development Webserver
- [ ] Linting
- [ ] Automated Testing
- [ ] Continuous Integration
- [ ] Automated Build
- [ ] Automated Deployment
- [ ] Working Example App
