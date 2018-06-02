#!/bin/bash

gulp default
git add --all
git commit -m 'quick commit'
git push heroku master



# Then go check https://vulc-test.herokuapp.com/