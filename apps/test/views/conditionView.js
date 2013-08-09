/**
 * Created with PyCharm.
 * User: feanor
 * Date: 8/9/13
 * Time: 2:10 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/condition',
    'text!templates/condition.html'

], function ($, _, Backbone, Condition, conditionTpl) {

    return ConditionView = Backbone.View.extend({
        el: $("#container"),

        initialize: function (options) {
            var that = this;
            this.model.fetch({success: function () {
                that.render();
                window.model = that.model
            }});
        },

        render: function () {
            var compiledTemplate = _.template(conditionTpl, {treatments: this.model.get('treatments'),
                name: this.model.get('name')});
            this.$el.html(compiledTemplate);
            this.$el.show()
        }
    });
});