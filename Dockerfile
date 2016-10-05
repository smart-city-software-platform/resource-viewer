FROM node:4.2.3

# Note: npm is v2.14.7
RUN \
  npm install -g ember-cli@2.7.0 &&\
  npm install -g bower@1.7.9 &&\
  npm install -g phantomjs@2.1.7

# install watchman
# Note: See the README.md to find out how to increase the
# fs.inotify.max_user_watches value so that watchman will 
# work better with ember projects.
RUN \
  git clone https://github.com/facebook/watchman.git &&\
  cd watchman &&\
  git checkout v3.5.0 &&\
  ./autogen.sh &&\
  ./configure &&\
  make &&\
  make install

RUN mkdir -p /resource-viewer/
ADD . /resource-viewer/
WORKDIR /resource-viewer/

RUN npm install
# Rebuild node-sass to prevent errors
RUN npm rebuild node-sass
RUN bower install --allow-root

# run ember server on container start
CMD ["ember", "server"]