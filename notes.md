# this is the child process example with typescript

- the system can connect with each child process

* ts-node-dev doesnt work clear on this project so I switch the ts-node-dev system to pm2-dev system. to change the dev-system, first of all we need to change vs code run build task.
* press ctrl+shift+p and open vs code commandplate ==> Tasks:Run Build Task ==> tsc:watch

* in main process file, we need to add childProcess as js file cuz if we add ts file it cause some errors
