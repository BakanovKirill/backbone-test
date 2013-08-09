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
            '*actions': 'index'
        },

        initialize: function () {
            this.title = document.title;
            this.currentViewElement = $('.click_me');
        },

        index: function(){
            document.title = this.title;
            this.currentViewElement.hide();
            this.currentViewElement = $('.click_me');
            this.currentViewElement.show()
        },

        showCondition: function () {
            this.currentViewElement.hide();
            var conditionView = new ConditionView({ model: new Condition() });
            this.currentViewElement=conditionView.$el;
            conditionView.model.fetch();

        }
    });
    return new TestAppRouter()
});

