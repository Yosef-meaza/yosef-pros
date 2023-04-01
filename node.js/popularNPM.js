const child_process = require('child_process');
var obj = ['loadash', 'react', 'axios', 'tslib', 'chalk', 'react-dom', 'commander', 'express', 'vue', 'moment'];
obj.forEach((val) => child_process.exec('npm', ['install', `${val}`, '--save'], (err, data) => {
   if (err) {
      throw (err);
   } else {
      console.log(data);
      console.log('finished');
   }
}));