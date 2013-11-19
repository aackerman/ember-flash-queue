App.flashQueueController = Ember.ArrayController.extend({
  destroyTimeout: 15 * 1e3, // 15s
  flash: function(type, message){
    var flash = App.FlashMessage.create({
      type: type,
      message: message,
      scheduledToDestroy: true
    });
    this.pushObject(flash);

    if (flash.get('scheduledToDestroy')) {
      Ember.run.later(this, function(){
        this.removeObject(flash);
      }, this.destroyTimeout);
    }
  }
}).create();
