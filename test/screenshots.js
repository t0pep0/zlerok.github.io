var START_SERVER = 'nohup ./node_modules/.bin/hs &',
    START_DRIVER = 'nohup ./node_modules/.bin/phantomjs --webdriver=4444 &',
    START_GEMINI_TESTS = './node_modules/.bin/gemini test --reporter html --reporter flat ./test/gemini';

var SERVER_PID,
    DRIVER_PID;

var cp = require('child_process');

try {
    SERVER_PID = cp.exec(START_SERVER).pid;
    DRIVER_PID = cp.exec(START_DRIVER).pid;

    cp.execSync(START_GEMINI_TESTS);
} catch(e) {
    console.log(e);
}

console.log(SERVER_PID);
console.log(DRIVER_PID);

SERVER_PID && cp.execSync('kill -9 ' + SERVER_PID);
DRIVER_PID && cp.execSync('kill -9 ' + DRIVER_PID);
