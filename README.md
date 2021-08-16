
# Horse-Race-Status-Long-Polling
Application gives an experience of horse race which starts every minute. It shows the finish time for every horse participated in race.

## Clone Repository
Clone the Horse-Race-Status-Long-Polling repository by running 

**git clone https://github.com/6991vaibhav/Horse-Race-Status-Long-Polling.git**

## Available Scripts
## Install Node packages and run app
**Point to horseraceapi folder in terminal and run following commands to install all the dependencies required and run the app.\
**1. npm install**\
**2. npm run dev**

**Point to horserace folder in terminal and run following commands to install all the dependencies required and run the app.\
**1. npm install**\
**2. npm start**\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Credentials to use app
Email can be user's personal email.\
Password is fixed which is **lTgAYaLP9jRs**

## Steps to run React App Using Docker

Docker Desktop should be installed in the machine.\
Point to horserace folder in terminal and Run following commands.\

**1. docker build . -t horseraceimage**(user can give any image name)\
**2. docker image ls** (This will list you all the images present)\
**3. docker run horseraceimage** (use whatever image name you created)\

Open another terminal and run below commands.\
**4. docker ps** (This will give you container Id for your image)\
**5. docker exec -it __containerId from the above command result__ sh**\
for example : docker exec -it cfef6147e1d6 sh
**6. Folder will be shown which is created in Dockerfile in Project** (To see the content of folder run ls command)\
** Run command __npm start__ ** (This will start the server and now Application will be up and running on the given url)\


### `npm test`

 Point to horserace folder in terminal and run following command to run the test\
**npm test src/__test__/components/Race.test.js**
