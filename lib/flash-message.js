App.FlashMessage = Ember.Object.extend({
  type:        'notice',
  message:     null,
  dismissable: true,
  isInfo:      Ember.computed.equal('type', 'info'),
  isAlert:     Ember.computed.equal('type', 'alert'),
  isNotice:    Ember.computed.equal('type', 'notice'),
  isWarning:   Ember.computed.equal('type', 'warning')
});
