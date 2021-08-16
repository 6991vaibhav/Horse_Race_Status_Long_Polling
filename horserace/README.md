# Horse Race

## Clone Repository
Clone the HorseRace repository by running 

**git clone 

## Install Node packages
run following command to install all the dependencies required.

**npm install**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Steps to run React App Using Docker

Docker Desktop should be installed in the machine.\
Run following command in your command prompt in your project folder.\
**1. docker build . -t horseraceimage**(user can give any image name)
**2. docker image ls** (This will list you all the images present)
**3. docker run horseraceimage** (use whatever image name you created)

Open another terminal and run below commands.\
**4. docker ps** (This will give you container Id for your image)
**5. docker exec -it __containerId from the above command result__ sh**
for example : docker exec -it cfef6147e1d6 sh
**6. Folder will be shown which is created in Dockerfile in Project** (To see the content of folder run ls command)
** Run command __npm start__ ** (This will start the server and now Application will be up and running on the given url)


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.