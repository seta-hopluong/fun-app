 var _ = require('lodash');

 // Compare arrays or objects
 let object = { name: 'Hop' };
 let other = { name: 'Hops' };

 console.info('Compare 2 objects');
 console.log('object', object);
 console.log('other', other);

 console.log('the result is', _.isEqual(object, other));

 // array helper

 let user = [
     { 'name': 'Luong', age: 25, address: 'Ha Noi'},
     { 'name': 'Tung', age: 25, address: 'Ha Noi'},
     { 'name': 'Hop', age: 25, address: 'Ha Noi'},
     { 'name': 'Long', age: 25, address: 'Ha Noi'},
 ];

 console.log('user', user);
 console.log('result filter', _.filter(user, 'name', 'Long'));
 let search = _.filter(user, 'name', 'Long');
 console.log(search);

 // join, change array to string
 console.log('join', _.join(['today', 'is', 'very', 'beautiful'],'='));

 // last, get the last element in an array

 let last = _.last(['Monday', 'Tuesday', 'Wedneday','Thurday','Friday']);
console.log('last', last);

let findindex = _.findIndex(user, (item => item.name === 'Hop'));
console.log('findindex', findindex);
