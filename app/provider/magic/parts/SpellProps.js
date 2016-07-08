'use strict';

var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory');

var is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.

  if (is(element, 'bpmn:Task')) {

   group.entries.push(entryFactory.selectBox({
      id : 'type',
      description : 'Task Type',
      label : 'Task Type',
      selectOptions : [ { name: '-', value: 'EmptyTask' },
                        { name: 'FillInputTask', value: 'FillInputTask' },
                        { name: 'TextTask', value: 'TextTask' },
                        { name: 'ClickInputTask', value: 'ClickInputTask' },
                        { name: 'SelectOptionTask', value: 'SelectOptionTask' },
                        { name: 'ComposedTask', value: 'ComposedTask' },
                        { name: 'TableManagerTask', value: 'TableManagerTask' },
                        { name: 'IteratorTask', value: 'IteratorTask' }],
      modelProperty : 'type'
   }));



    group.entries.push(entryFactory.textField({
      id : 'spell',
      description : 'Apply a black magic spell',
      label : 'Spell',
      modelProperty : 'spell'
    }));
  
  group.entries.push(entryFactory.textField({
      id : 'task',
      description : 'asa',
      label : 'Task',
      modelProperty : 'task'
    }));
  




  }
};
