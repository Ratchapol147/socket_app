echo "wait db server"
app_socket -wait tcp://db:3306 -timeout 20s

echo "start node server"
nodemon index.js