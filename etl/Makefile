SHELL = /bin/sh

MODULE = etl

NPM  = npm
GULP = gulp

all: test

check:
	$(NPM) install
	$(GULP) check

test: check
	$(GULP) coverage

clean:
	$(GULP) clean
