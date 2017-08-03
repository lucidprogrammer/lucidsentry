# Overview

This is a sample project which shows how to integrate a meteor project with sourcemaps (in production mode) and integrate into [sentry](sentry.io). This setup can be altered for most of the javascript error tracking solutions.


# How to replicate the steps in your meteor application

-   [ ] Tweak the Dockerfile & docker-compose.yml as per your need
-   [ ] Tweak the build.sh as per your need
-   [ ] Create an account in sentry.io (if you are using any other error tracker, do their steps accordingly) and update main.js
-   [ ] This example uses nginx docker container, review its [README.md](https://github.com/lucidprogrammer/nginx) to tweak for your domain, so as to change the docker-compose.yml file.

# TASKS Done in this project

-   [X] Create a new meteor project using meteor version 1.4.4.1
-   [X] Make sure it has both es6 and coffeescript, so that we can see the debug of both types of files.
-   [X] Have some error paths in it
-   [X] Integrate Sentry
-   [X] Create the appropriate docker-compose and Dockerfile
-   [X] Nginx configuration to allow only sentry to access sourcemaps so that the outside world sees only minified source.


# Notes

```
//create a project in a specific release
meteor create --release 1.4.4.1 lucidsentry
meteor remove standard-minifier-js
meteor add zodern:standard-minifier-js
```
Source maps - hands on try on a simple js file. [Example](https://stackoverflow.com/questions/34755999/url-scheme-meteor-app-in-meteorjs)
