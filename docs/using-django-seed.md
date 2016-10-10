# Using Django Seed

## Getting Django Seed
* Add the django seed repo as a remote for your repo: `git remote add seed https://github.com/bootcamp-f16/django-seed`
* Pull the contents of Django Seed: `git pull seed master`

## Initial Setup
* Update `README.md` with a details for your project
* Update `package.json` with name description and repository for your project
* You need a `SECRET_KEY` env variable set on your machine. See `conf/settings/base.py` for the usage
* Create a virtualenv with virtualenvwrapper: `mkvirtualenv -p PATH_TO_PYTHON_3 VIRTUALENV_NAME`
* Install Python dependencies: `pip install -r requirements/local.txt`
* Install Node dependecies: `npm install`
* Migrate to create the initial database: `./manage.py migrate`

## Running the site locally
* Run the Django dev server: `./manage.py runserver`
* Build and watch JavaScript files for changes: `npm start`
  * Note: Build process for JavaScript files will not pick up new files. Please stop and restart with `npm start` whenever new .js files or Angular templates are added

## Directory Structure Breakdown
* `conf/` folder is similar to the folder `django-admin startproject` creates that is named after the project. It contains the project's urls, the wsgi.py file and settings files.
* `conf/settings/` contains a base settings file and overrides for each environment that will run the site (local and production files are distributed with the seed).
* `client/` contains all the javascript files and templates to be bundled by webpack. Webpack will transpile ES6 and concatenate all files that are imported somewhere off `client/main.js` into one file, `bundle.js` that is placed in `static/`.
* `client/main.js` the entry point for all built javascript files.
* `client/app.js` root component for an Angular app and a sample for using Angular.
* `core/` a Django app to contain items that don't fit well into an app you will create. The sites `index` view and url is part of this app
* `docs/` a folder to contain documentation for your project.
* `requirements/` contains a base requirements.txt and a requirements file for each environement for the site (seed includes `local.txt` and `production.txt`).
* `static/` a location for static files for the site. This is used instead of creating a static folder in each Django application to centralize all static files.
* `static/styles.css` an empty css file that is used by `templates/core/base.html`.
* `templates/` contains all Django templates for this project. Used in place of creating a `templates` folder in each Django application to centralize all Django templates.
* `.babelrc` configuration file for Babel to transpile ES6 into ES5.
* `.eslintrc` configuration file used to lint the javascript files.
* `.gitignore` initial files to ignore from the repo
* `README.md` stub file with content that should be replaced for your project.
* `gulpfile.js` task runner configuration for watching the javascript files.
* `package.json` contains Javascript dependencies for the project. Should be updated with repo specific name, description, and repo URL.
* `requirements.txt` loads production's dependecies. Included because platforms such as Heroku look for a requirements.txt in the project root.
* `webpack.config.js` configuration file for Webpack to find and bundle the JavaScript files and Angular templates.
