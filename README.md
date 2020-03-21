A simple docker based web application to get the counts of visitors running on localhost.
This application uses express js on node and redis cache.
The application listens to incoming request coming on localhost port 4001.

Useful commands for reference:

To build the image:
	docker build -t noderedis<tag of the image> . 

To start the container on docker and build automatically:
	docker-compose up --build

To bring down the container
	docker-compose down

Endpoint: http:/localhost:4001/getCount/
