SHELL = /bin/sh

MODULE = word-count

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
