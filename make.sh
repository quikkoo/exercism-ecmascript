#!/bin/sh -e

MODULES="      \
  anagram      \
  bob          \
  etl          \
  hello-world  \
  word-count   \
"

TASK=${1:-"all"}

task_check() {
  npm install
  gulp check
}

task_test() {
  task_check

  gulp test
  gulp coverage
}

task_all() {
  task_test
}

task_clean() {
  gulp clean
}

for MODULE in $MODULES
do
  cd $MODULE
  case $TASK in
    check)
      task_check
      ;;
    test)
      task_test
      ;;
    all)
      task_all
      ;;
    clean)
      task_clean
      ;;
  esac
  cd ../
done
