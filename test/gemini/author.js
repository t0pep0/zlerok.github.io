var gemini = require('gemini');

gemini
    .suite('author', function(suite) {
        suite
            .setUrl('/')
            .setCaptureElements('.author')
            .capture('plain', function(actions, find) {
                actions.waitForElementToShow('.photo', 1000);
            });
    });
