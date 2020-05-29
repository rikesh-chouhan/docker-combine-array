FROM node:14.3.0-alpine

# Create app directory
WORKDIR /docker-combiner

# Bundle the script
COPY ./bin/input_args.js /docker-combiner/
COPY package.json /docker-combiner/

# COPY --from=builder /docker-combiner/input_args.js /input_args.js
ENTRYPOINT ["node", "/docker-combiner/input_args.js"]