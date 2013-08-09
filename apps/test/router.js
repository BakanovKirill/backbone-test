// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'models/condition',
    'views/conditionView'
], function ($, _, Backbone, Condition, ConditionView) {

    var TestAppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'aneurysm': 'showCondition',

            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function () {
        var app_router = new TestAppRouter;
        app_router.defaultView = $('.click_me');
        var title = document.title;
        app_router.on('route:showCondition', function () {
            app_router.defaultView.hide();

            app_router.conditionView = new ConditionView({ model: new Condition() });
            document.title = "Treatments: " + app_router.conditionView.model.get('name')

        });

        app_router.on('route:defaultAction', function (actions) {
            app_router.defaultView.show();
            document.title = title;
            if (app_router.conditionView)
                app_router.conditionView.$el.hide()
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
