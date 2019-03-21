install:
	npm install

start:
	npx babel-node src/bin/brain-multiply.js

publish:
	npm publish

lint:
	npx eslint .
