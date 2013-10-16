# ember-flash-queue

A client side flash queue similar to the Rails flash queue. For use with Ember. Completely ready to drop into an application, styling included. Or you can roll your own styling to better fit your application.

You can view a complete demo [here on jsbin](http://emberjs.jsbin.com/OGesizA/16/edit).

Assumes `App` namespace by default. With options for scheduling 'destruction' of flashes. Allowing flashes to be dismissable by the user. And four different color schemes for alerts, info, notices, and warnings.

The main interface.

```js
App.flashQueueController.flash('notice', 'Hello World!');
```

Or even easier alias `flash` to the top level namespace.
```js
// for ES5 environments
App.flash = App.flashQueueController.flash.bind(App.flashQueueController)

// for ES3 environments
App.flash = function(type, message) {
  App.flashQueueController.flash(type, message);
}
```

And now you can flash to your :heart:'s content

```js
App.flash('notice', '<3 EmberJS');
```

## Author

| [![twitter/_aaronackerman_](http://gravatar.com/avatar/c73ff9c7e654647b2b339d9e08b52143?s=70)](http://twitter.com/_aaronackerman_ "Follow @_aaronackerman_ on Twitter") |
|---|
| [Aaron Ackerman](https://twitter.com/_aaronackerman_) |
