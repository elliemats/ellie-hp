
(function($) {

  Poller = function() {
    this.defaults = {
      type: 'veggies',
      limit: 5
    };

    this.items = {
      veggies: [
        'Adzuki Beans',
        'Asparagus',
        'Black-eyed Peas',
        'Brussels Sprouts',
        'Carrots',
        'Collard Greens',
        'Parsnips',
        'Rhubarb',
        'Yams',
        'Watercress'
      ],
      fruits: [
        'Apricots',
        'Blackcurrants',
        'Cherimoya',
        'Dates',
        'Elderberry',
        'Guava',
        'Kumquat',
        'Miracle Fruit',
        'Purple Mangosteen',
        'Satsuma'
      ]
    };
  };

/* * 
   * Decription: Generates random number between two points
   * @method - _getRandomNumber
   * @param {Number} - min - min val to get num from 
   * @param {Number} - max - max val to get num from 
   * @return {Number} - randomly selected num between two points
 */
  Poller.prototype._getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

/* * 
   * Decription: Generates random number between two points
   * @method - _getData 
   * @param {Array} - items - Array of all fruits and vegs
   * @return {Array} - results - Array of objects
      * object ex = { name: 'carrot', count: 43626 };
 */
  Poller.prototype._getData = function(items) {
    var len = items.length,
    results = [],
    context = this;

    _.each(items, function (name) {
      results.push({
        name: name,
        count: context._getRandomNumber(0, 200000)
      });      
    })
    return results;
  };

  /* * 
   * Decription: Sort (ascending), slice out last 5 (highest), reverse their order (descending)
   * @method - _processData
   * @param {Array} - data - Array of objects
   * @param {Number} - limit - Number of objects to display
   * @return {Array} - sortedData - Array of objects (final data needed for display)
 */
  Poller.prototype._processData = function(data, limit) {
    var i = data.length - limit;
    sortedData = _.sortBy(data, 'count').slice(i).reverse();
    return sortedData;
  };

/* * 
   * Decription: Main function, calls other methods to prep data for script
   * @method - poll
   * @param {Array} - options - Array of all fruits and vegs
   * @return {Object} - dfd - $Deferred, general jQuery
 */
  Poller.prototype.poll = function(options, cb) {
    var context = this;
    var config = $.extend({}, this.defaults, options);
    var dfd = $.Deferred();

    setTimeout(function() {
      var payload = context._processData(context._getData(options), config.limit);
      cb && cb(payload);
      dfd.resolve(payload);
    }, this._getRandomNumber(400, 2000));
    return dfd;
  };



  if (window.spredfast == null) {
    window.spredfast = {
      Poller: Poller
    };
  }


}(jQuery));

module.exports.Poller = Poller;
