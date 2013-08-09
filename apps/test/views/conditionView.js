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
        template: _.template(conditionTpl),

        initialize: function (options) {
            var that = this;
            this.listenTo(this.model,'reset', this.render);
        },

        render: function (e) {
            tpl = this.template({
                treatments: this.model.get('treatments'),
                name: this.model.get('name')
            });
            document.title=this.model.get('name');
            this.$el.html(tpl);
            this.$el.show();
        }
    });
});