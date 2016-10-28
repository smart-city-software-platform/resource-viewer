FROM danlynn/ember-cli:2.8.0

RUN mkdir -p /resource-viewer/
COPY package.json bower.json /resource-viewer/
WORKDIR /resource-viewer/

RUN npm install
RUN bower install --allow-root

ADD . /resource-viewer/

# run ember server on container start
CMD ["ember", "server"]
