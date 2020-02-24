# react-revealjs
reveal-js component for React based on lerna 3, webpack 4 and babel 7.

## Setup
1. Install dependencies
    ```
    npm run bootstrap
    ```
1. Build libraries and bundle js
    ```
    npm run develop  # For development mode

    npm run build    # For production mode
    ```
1. Start development server
    ```
    npm run start
    ```

## Demo presentation structure
The directories `public` and `src` contain the sources of the demo presentation.
```
.
+-- public
|   +-- index.html
|   +-- plugin
|   +-- dist
|   |   +-- demoBundle.js
+-- src
|   +-- demo.js
|   +-- less
|   |   +-- black.less
|   |   +-- main.less
|   |   +-- reveal.less
|   +-- presentation.json
```

The `dist` directory in `public` is created as a result of the build process. `demo.js` in `src` contains the main configuration of
the demo presentation. `presentation.json` contains the content of the presentation.

Changes to the demo presentation can be made in the `src` directory. `public` directory is just the bare minimum needed
to bootstrap the bundled react app.

## Contributors
The initial work for this repository was done by @nascherman
