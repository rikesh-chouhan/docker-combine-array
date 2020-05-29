#### An array combiner application.
#### Building locally
* Pull this repo.
* Install Nodejs:
  * Download - https://nodejs.org/en/download/
  * Package Manager - https://nodejs.org/en/download/package-manager/

#### Running locally
* Using node
  * `node bin/input_args.js` **Follow usage instructions**
  * `node bin/input_args.js`
  * `node bin/input_args.js [50, 51, 54, 67, 98] [ 1, 4, 52, 60, 100 ]`
* Shell script
  * `./run_command.sh` **Follow usage instructions**
  * `./run_command.sh --help`
  * `./run_command.sh [50, 51, 54, 67, 98] [ 1, 4, 52, 60, 100 ]`

#### Docker Image

There is a ready made docker image available here: <https://hub.docker.com/r/20200401rikesh/node-combine-array> for this application.
This image can be used similar to the instructions noted for running locally once you pull the image.
1. `docker run 20200401rikesh/node-combine-array`
2. `docker run 20200401rikesh/node-combine-array --help`
2. `docker run 20200401rikesh/node-combine-array [1, 2, 3, 9, 14, 22] [5, 6, 10, 15]`

