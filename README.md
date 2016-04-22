#Hi! My name is Valeriia and this is my site

How to test:

    Screenshots:
        0. (Optional) Add screenshots of new features in screens storage:
            gemini update test/gemini/<new-feature-test-suit>
        1. Run local web-server and web-driver.
            //TODO Добавить штуку, которая будет поднимать веб-сервер для скрин-тестов: https://github.com/indexzero/http-server
            
            `phantomjs --webdriver=4444`
        2. Then run tests  
            `gemini test test/gemini`
