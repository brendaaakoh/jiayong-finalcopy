'use strict';

angular.module('jiayongApp')
  .factory('Tasks', function () {
    
    //data here
    var tasks = [
    {   id: 1,
        title: 'Wash the Balcony',
        status: 'Completed',
        desc: 'Wash the balcony floor',
        exp: 'A clean floor with no watermarks!',
        min: 8,
        max: 15,
        earnings: 15,
        prereq: '',
        remarks:''},

    {   id: 2,
        title: 'Do laundry!',
        status: 'In Progress',
        desc: 'Wash the clothes in the laundry basket, then take it out to hang',
        exp: 'Clothes to be hung on the rack!',
        min: 10,
        max: 15,
        earnings: 0,
        prereq: '',
        remarks:''},

    {   id: 3,
        title: 'Walk Lucy',
        status: 'Available', 
        desc: 'Lucy needs some exercise!',
        exp: 'Walk from our block to the playground at least!',
        min: 20,
        max: 25,
        earnings: 0,
        prereq: '',
        remarks:''},

    {   id: 4,
        title: 'Bathe Lucy',
        status: 'Available',
        desc: 'Shampoo and blow dry the dog. She stinks!',
        exp: 'A neater and cleaner Lucy please!',
        min: 20,
        max: 28,
        earnings:  0,
        prereq: 'Walk Lucy',
        remarks:''},

    {   id: 5,
        title: 'Clean out the Fridge!',
        status: 'Available',
        desc: 'Something smells bad in the fridge! Can someone help clean it out?',
        exp: 'Remove the source of the smell and stack up everything else nicely and neatly.',
        min: 20,
        max: 30,
        earnings:  0,
        prereq: '',
        remarks:''},

    {   id: 6,
        title: 'Change the Bedsheets',
        status: 'Pending Completion', 
        desc: 'No one has changed the bedsheets since we came back from Japan!',
        exp: 'Just change it to a fresh set, any design will do.',
        min: 15,
        max: 20,
        earnings: 0,
        prereq: '',
        remarks:''},
        
    {   id: 7,
        title: 'Buying Vegetables!',
        status: 'Available',
        desc: 'Need some vege to cook this weekend! Carrots and peas sound good!',
        exp: '2 packets of each inside the fridge vegetable compartment',
        min: 15,
        max: 20,
        earnings:  0,
        prereq: 'Clean out the Fridge!',
        remarks:''},
    
    {   id: 8,
        title: 'Packing the bookshelf',
        status: 'Available',
        desc: 'The bookshelf in the study seems to be overloaded, some clearing is needed',
        exp: 'Clear away some old books so everything can be arranged on it nicely.',
        min: 18,
        max: 25,
        earnings:  0,
        prereq: '',
        remarks:''},

    {   id: 9,
        title: 'Mop your own bedroom floor!',
        status: 'Available',
        desc: 'Your bedroom has not been mopped in a week!',
        exp: 'A clean floor with no watermarks!',
        min: 20,
        max: 30,
        earnings:  0,
        prereq: '',
        remarks:''},
    
    {   id: 10,
        title: 'Ironing of clothes',
        status: 'Pending Approval',
        desc: 'There is a pile of clothing in the room which needs ironing',
        exp: 'Ironed and folded clothes nicely stacked up on the bed',
        min: 30,
        max: 50,
        earnings:  0,
        prereq: '',
        remarks:''},

    {   id: 11,
        title: 'Sweeping of Floor',
        status: 'Rejected Proposal',
        desc: 'The floor is kind of dusty, can I sweep it?',
        exp: 'A dust free bedroom floor!',
        min: 10,
        max: 15,
        earnings:  0,
        prereq: '',
        remarks:'This is not needed'}
    ];

    // Public API here
    return {
      getAll: function () {
        return tasks;
      },

      getPending: function(){
        var arr = [];
        var i;
        for(i = 0; i < tasks.length; i++){
            if(tasks[i].status == 'Pending Completion' || tasks[i].status == 'Pending Approval'){
                arr.push(tasks[i])
            }
        } return arr;
      },

      getProgress: function(){
        var arr = [];
        var i;
        for(i = 0; i < tasks.length; i++){
            if(tasks[i].status == 'In Progress'){
                arr.push(tasks[i])
            }
        } return arr;
      },

      getCompleted: function(){
        var arr = [];
        var i;
        for(i = 0; i < tasks.length; i++){
            if(tasks[i].status == 'Completed'){
                arr.push(tasks[i])
            }
        } return arr;
      },

      getAvailable: function(){
        var arr = [];
        var i;
        for(i = 0; i < tasks.length; i++){
            if(tasks[i].status == 'Available'){
                arr.push(tasks[i])
            }
        } return arr;
       },

       getRejected: function(){
        var arr = [];
        var i;
        for(i = 0; i < tasks.length; i++){
            if(tasks[i].status == 'Rejected Proposal' || tasks[i].status == 'Rejected Completion'){
                arr.push(tasks[i])
            }
        } return arr;
       },

        getTask: function(number){
            for (var i = tasks.length - 1; i >= 0; i--) {
                if(tasks[i].id == number){
                    return tasks[i];
                }
            
        }
    },
         takeupTask: function(id){
            for (var i = tasks.length - 1; i >= 0; i--) {
                if(tasks[i].id == id){
                    tasks[i].status = 'In Progress';
                }
            }  

        },
        removeTask: function(id){
           for (var i = tasks.length - 1; i >= 0; i--) {
                if(tasks[i].id == id){
                    tasks[i].status = 'Available';
                }
            } 
        },

        createTask: function(name, desc, exp, min, max){
            tasks.push({
                id: tasks.length + 1,
                title: name,
                status: 'Pending Approval',
                desc: desc,
                exp: exp,
                min: min,
                max: max,
                earnings: 0
            });
        }, 
        editTask: function(id,name, desc, exp, min, max){
            for (var i = tasks.length - 1; i >= 0; i--) {
                if(tasks[i].id == id){
                    tasks[i].title = name,
                    tasks[i].desc = desc,
                    tasks[i].exp = exp,
                    tasks[i].min = min,
                    tasks[i].max = max,
                    tasks[i].status = 'Pending Approval';
                }
            } 
        },

        addTask: function(name, desc, exp, min, max, prereq){
            tasks.push({
                id: tasks.length + 1,
                title: name,
                status: 'Available',
                desc: desc,
                exp: exp,
                min: min,
                max: max,
                earnings: 0,
                prereq: prereq
            });
        },

        completeTask: function(id){
            for (var i = tasks.length - 1; i >= 0; i--) {
                if(tasks[i].id == id){
                    tasks[i].status = 'Pending Completion';
                }
            } 
        },

        approveTask: function(id, earn){
            for(var i = tasks.length - 1; i >= 0; i--){
                if(tasks[i].id == id){
                    tasks[i].status = 'Completed',
                    tasks[i].earnings = earn;
                }
            }
        },

        getByTitle: function(name){
            for(var i = tasks.length - 1; i >= 0; i--){
                if(tasks[i].title == name){
                    return tasks[i];
                }
            }
        }

    };
  }). run(function($rootScope, Tasks){
    $rootScope.Tasks = Tasks;
  });
