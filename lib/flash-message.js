App.FlashMessage = Ember.Object.extend({
  type: 'notice',
  dismissable: true,
  message: null,

  isNotice: function(){
    return this.get('type') == 'notice';
  }.property('type').cacheable(),

  isWarning: function(){
    return this.get('type') == 'warning';
  }.property('type').cacheable(),

  isAlert: function(){
    return this.get('type') == 'alert';
  }.property('type').cacheable(),

  isInfo: function(){
    return this.get('type') == 'info';
  }.property('type').cacheable()
});
