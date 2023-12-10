# FutureSports React app

This is the FutureSports app, created using Vite to manage the build process and to
bundle files for release.

It contains a basic testsuite as well as the FutureSports app.

A deployment is available at [futuresports.larasoftsolutions.com](https://futuresports.larasoftsolutions.com).

### Install and setup

To prepare the application, install packages. Navigate to the project directory,
and in a command line:

``npm install``

This installs required packages. The testsuite can be run with:

``npm run test``

Next, start a development server to check the
application runs as expected.

``npm run dev``

The app can be built with:

``npm run build``

This creates a dist/ directory with the required files and bundled code. It can
then be uploaded in a web root directory, with the web server configuration file
pointing to dist/ in the web root, e.g. _/var/www/futuresports/dist_.
