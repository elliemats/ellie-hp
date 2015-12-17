/* Testing script.js Functions, Pseudo-Code: 

- sample data: 
  var itemA = {name: "Apricots", count: 197041},
      itemB = {name: "Banana", count: 28571},
       data = [itemA, itemB], // shortened for outline
          i = 0,
      listA = [1,2,3],
      listB = [4,5];

describe('_updateData')
  - ex. function call: _updateData(itemA, i)
  - should be a function 
  - Arguments: 
    - arg #1: should be an object
    - arg #2: should be a number 
  - Output:
  - should output an array 
    - output should have 3 values [td.name, td.count, td.mentions]

describe('_appendData')
  - ex. function call: _appendData(itemA.name, itemB.name)
  - should be a function 
  - Arguments: 
    - arg #1: should be a string
    - arg #2: should be a string

describe('_addCommasToNum')
  - ex. function call: _addCommasToNum(itemA.count)
  - should be a function 
  - Arguments: 
    - arg #1: should be a number 
  - Output:
  - should output a string 
    - output should be '197,041'

describe('_drawTable')
  - ex. function call: _drawTable(data)
  - should be a function 
  - Arguments: 
    - arg #1: should be an array
      - array should contain objects 

describe('_combineLists')
  - ex. function call: _combineLists(listA, listB)
  - should be a function 
  - Arguments: 
    - arg #1: should be an array 
    - arg #2: should be an array 
  - Output:
  - should output an array 
    - output should be [1,2,3,4,5]
  - should have a length of the two arguments length 
    - listA.length + listB.length === output length

describe('_getNewData')
  - ex. function call: poller = _getNewData()
  - should be a function 
  - Output:
  - should be an object 
  - should have a 'defaults' property 
    - poller.defaults should be an object 
      - poller.defaults should have both a 'limit' and 'type' property
        - poller.defaults.limit should be a number 
        - poller.defaults.type should be a string   
  - should have an 'items' property
    - poller.items should be an object 
      - poller.items should have both a 'fruits' and 'veggies' property
        - poller.items.fruits should be an array 
        - poller.items.veggies should be an array 

*/