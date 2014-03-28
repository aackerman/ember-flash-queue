App.FlashMessageView = Ember.View.extend({
  classNames: ['flash-message'],
  classNameBindings: ['isAlert', 'isWarning', 'isNotice', 'isInfo'],
  isAlertBinding: 'context.isAlert',
  isWarningBinding: 'context.isWarning',
  isNoticeBinding: 'context.isNotice',
  isInfoBinding: 'context.isInfo',
  template: Ember.Handlebars.compile('{{message}}{{#if dismissable}}<i class="flash-delete" {{action "close" target="view"}} >&times;</i>{{/if}}'),
  didInsertElement: function(){
    this.$().fadeIn(300);
  },
  actions: {
    close: function(){
      this.$().fadeOut(300);
    }
  }
});
