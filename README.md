# My Sample Project Name

My Sample Project is a static website using just HTML, javascript and CSS, hosted on AWS. The site is primarily intended to be used in a tradeshow setting and users interact with it by using a touchscreen TV.


# Requirements

  - Deployment to stage and prod requires AWS credentials
  - Project can be built on OSX or Windows
  - Required hardware: this project is intended for a touchscreen TV at 1920x1080 resolution


# Installation

This is a node project. You'll need node v6.x or later.

```bash
$ npm install
```


# Setup / Configuration

Authentication credentials are stored in `config/deploy-stage.json` and `config/deploy-prod.json`.

Make sure you enter the appropriate environment username and password in these files. The application will not deploy to the stage or prod environments if the credentials are missing or incorrect.

There are no other issues/watchouts to consider in setting up and configuring this project.


# Build

To build the project, run the Grunt script:

```bash
$ grunt build
```

This will build the files for testing and deployment. You'll find the built version of the project in the `/dist` folder.


# Deployment

## Locally

Simply point a web server to the `/dist` folder created during the build process. If you have a global installation of the `http-server` node package, you could do the following:

```bash
$ http-server dist/
```

... and then visit `http://localhost:8080` in your browser.


## Staging

To deploy to the staging environment, run the deployment script:

```bash
$ sh scripts/deploy-stage.sh
```

This depends on authentication credentials defined in `config/deploy-stage.json`.


## Production

To deploy to the production environment, run the deployment script:

```bash
$ sh scripts/deploy-prod.sh
```

This depends on authentication credentials defined in `config/deploy-prod.json`.


# Getting Started / Contributing 

## Style / CSS

SASS source files are stored in `app/styles/`. Refer to the styleguide for existing styles. New pages should use existing styles from the styleguide and not invent anything new. You can find the styleguide at the path `/styleguide` in the locally-deployed version of the site. (This path will not exist in the `staging` or `production` environments.)

Generally, class names should follow a BEM approach.


## Javascript

Javascript should be ES5-compliant. (There is no transpiling process as part of the build step.)


## QA Supported Devices/Browsers

  - [Supported browsers/devices for this client](#todo-add-link-to-client-qa-browser-list)


# Links / Resources

  - [Current Genome project page](https://genome.klick.com)
  - [Initial build Genome project page (May 2018)](https://genome.klick.com)
  - [QA Test Plan document](#link-to-klick-visible-test-plan-doc)


# Known Issues / Bugs

  - None at this time

The website production issues tracking sheet can be found [here](#link-to-production-issues-sheet-for-this-website).


# Changelog

  - Feb 2019
    - Added new savings card functionality
  - May 2018
    - Initial site build

