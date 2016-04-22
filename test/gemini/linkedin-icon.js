var gemini = require('gemini');

gemini
    .suite('linkedin', function(suite) {
        suite
            .setUrl('/')
            .setCaptureElements('.linkedin .icon')
            .before(function(actions, find) {
                this.linkedin = find('.linkedin .icon');
            })
            .capture('plain')
            .capture('hovered', function(actions, find) {
                actions.mouseMove(this.linkedin);
            });
    });
