var api = require("./api.js");

$(document).on('ready', function() {

/* * 
   * Decription: Updates name and count HTML
   * @method - _updateData
   * @param {Object} - item - Object with name and count property 
   * @param {Number} - i - index; indicates which row to modify in tbody
   * @return {Array} - row - Contains children of that row (w/updated values) 
 */
  var _updateData = function(item, i) {
    var count = _addCommasToNum(item.count),
         $row = $('tr')[i].children;

    _appendData($row[0], item.name);  // updates name
    _appendData($row[1], count);      // updates count 
    return $row;
  };

  /* * 
     * Decription: Fades out old text, updates with new text
     * @method - _appendData
     * @param {String} - old - text to be changed 
     * @param {String} - newText - newText html text
   */
  var _appendData = function(old, newText) {
    $(old).fadeOut('slow',function () { 
      $(this).html(newText).fadeIn();
    });
  }  

/* * 
   * Decription: Adds commas for user interface (display purposes only)
   * @method - _addCommasToNum
   * @param {Number} - num - integer (without commas)
   * @return {String} - withCommas - String contains proper formatted number 
 */
  var _addCommasToNum = function(num) {
    var withCommas = Number(num).toLocaleString();
    return withCommas;
  };

/* * 
   * Decription: Iterate through each data in array
   * @method - _drawTable
   * @param {Array} - data - Array containing five objects
      * object ex = { name: 'carrot', count: 43626 };
 */
  var _drawTable = function(data) {
    for (var i = 0; i < data.length; i++) {
      _updateData(data[i], i);
    }
  };

/* * 
   * Decription: Concats two arrays
   * @method - _combineLists
   * @param {Array} - a - single array with values
   * @param {Array} - b - single array with values
   * @return {Array} - combined - single array with all vals from a and b
 */
  var _combineLists = function(a, b) {
    var combined = (a).concat(b)
    return combined;
  };

/* * 
   * Decription: Updates name and count HTML
   * @method - _getNewData
 */
  var getNewData = function() {
    var poller = new api.Poller();
             f = poller.items.fruits,
             v = poller.items.veggies,
       produce = _combineLists(f, v);
    
    poller.poll(produce, _drawTable);
  };

/* * 
   * Decription: Updates list every 15 seconds
 */
  setInterval(function() {
    getNewData();
  }, 15000);

/* * 
   * Decription: Initiate
 */
  getNewData();

});