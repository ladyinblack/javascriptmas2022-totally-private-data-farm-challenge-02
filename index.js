// Import stylesheets
import './style.css';
import userData from './data.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascriptmas 2022</h1>`;
appDiv.innerHTML += `<h2>Totally Private Data Farm</h2>`;

/**
 * Good news, reknown advertising firm Evil Corp. wants to purchase our private user data!
 *
 * We'd never do this in real life of course, but just for practice let's pretend we're unethical web hackers and transform the data in the way Evil Corp. has requested.  They're quite particular and just want an array of users with a fullname and human readable birthday.
 *
 * Write a function that maps through the current data and returns a new array of objects with only two properties:
 * fullName and birthday.  Each result in your array should
 * look like this when you're done:
 *
 * {
 *      fullName: "Levent Busser",
 *      birthday: "Fri Aug 20 1971"
 * }
 *
 * Read about toDateString() for info on formatting a readable date.
 */

function transformData(data) {
  const objEvilFarm = [];
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name.first + ' ' + data[i].name.last);
    // console.log(birthdate.toDateString());
    const datafarm = {
      fullName: data[i].name.first + ' ' + data[i].name.last,
      birthday: new Date(data[i].dob.date).toDateString(),
    };
    objEvilFarm.push(datafarm);
  }
  return objEvilFarm;
}

console.log(transformData(userData));
