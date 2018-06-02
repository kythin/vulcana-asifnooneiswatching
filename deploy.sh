#!/bin/bash

HOST="fry.ausgeek.com"
USER='btcmetrics'
PASS="A7[sN(J{p*v$"

FTPURL="ftp://$USER:$PASS@$HOST"
LCD="./"
RCD="/public_html"  # check this remote before running.
DELETE="--delete" # '--delete' if you want to delete files on remote that are not on local.


lftp -c "set ftp:list-options -a;
set ftp:ssl-allow off;
open '$FTPURL';
lcd $LCD;
cd $RCD;
mirror --reverse \
       $DELETE \
       --verbose \
       --exclude-glob .sass-cache/ \
       --exclude-glob bower_components/ \
       --exclude-glob node_modules/ \
       --exclude-glob db/ \
       --exclude-glob vendor/ \
       --exclude-glob .git/ \
       --exclude-glob deploy.sh \
       --exclude-glob TODO.txt \
       --exclude-glob other-files-to-exclude"