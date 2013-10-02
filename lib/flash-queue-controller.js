App.flashQueueController = Ember.ArrayController.extend({
  // 15s
  destroyTimeout: 15 * 1e3,
  flash: function(type, message){
    var flash = App.FlashMessage.create({
      type: type,
      message: message,
      scheduledToDestroy: true
    });

    this.pushObject(flash);
    if (flash.get('scheduledToDestroy')) {
      this.scheduleDestroy(flash);
    }
  },
  scheduleDestroy: function(flash){
    var self = this;
    setTimeout(function(){
      self.removeObject(flash);
    }, this.destroyTimeout);
  }
}).create();
