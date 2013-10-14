App.FlashMessage = Ember.Object.extend({
  type: 'notice',
  dismissable: true,
  message: null,

  isNotice: function(){
    return this.get('type') == 'notice';
  }.property('type'),

  isWarning: function(){
    return this.get('type') == 'warning';
  }.property('type'),

  isAlert: function(){
    return this.get('type') == 'alert';
  }.property('type'),

  isInfo: function(){
    return this.get('type') == 'info';
  }.property('type')
});
