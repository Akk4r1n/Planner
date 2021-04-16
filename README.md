# Planner

## Build the image with docker
* Check if Docker is installed with `docker version`.
* Go into the project root folder.
* Use `docker build -t planner-image . ` to build the image. I choosed the name `planner-image` for the image It might take a few minutes.
* You can use `docker images` to check if the image with the provided name exists.
* Create and run a docker-container with `docker run -d --rm -p 80:80 --name planner-container planner-image`. I choosed `planner-container` as the container name and used
the image with the name `planner-image`.
* Go into your browser and point it to `http://localhost:80`.
* You should now have a running angular application behind a dockerized nginx-server.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
