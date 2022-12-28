let studentRecords = [ {name: 'John', id: 123, marks : 98 }, 
{name: 'Baba', id: 101, marks : 23 }, 
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ] 
console.log(studentRecords);

// Question 1
let names =studentRecords.map(student=>student.name.toUpperCase());
  console.log(names);

// Question 2

  for(let m = 0; m < studentRecords.length;m++)
  {
      let scores = studentRecords[m].marks;
      if(scores > 50)
      {
          console.log(studentRecords[m]);
      }   
  }

// Question 3

  for (let m = 0; m < studentRecords.length; m++) {
    let marks = studentRecords[m].marks;
    let ids = studentRecords[m].id;
    if (marks > 50 && ids > 120) {
        console.log(studentRecords[m]);
    }
}

// Question 4

let sum1 = 0;
  for (let m = 0; m < studentRecords.length;m++){
    let marks = studentRecords[m].marks;
      sum1 = sum1 + marks;
  }
  console.log(sum1);

// Question 5

for (let m = 0; m < studentRecords.length; m++) {
    let marks = studentRecords[m].marks;
    let names= studentRecords[m].name;
    if(marks>50)
    {
        console.log(names);
    }
}

// Question 6

let sum2 = 0;
for (let m = 0; m < studentRecords.length; m++) {
    let marks = studentRecords[m].marks;
    let ids = studentRecords[m].id;
    if (ids > 120) {
        sum2 = sum2 + marks;
        
    } 
}
console.log(sum);

// Question 7

let sum = 0;
  for (let m = 0; m < studentRecords.length; m++) {
      let marks = studentRecords[m].marks;
      if (marks < 50) {
          sum = marks + 15;
          if(sum>50)
          {
              console.log(sum);
          }
      }
  }

// Question 8

  let obj = {
    name: "Kuldeep",
    class: "MCA",
    rollNo: 21,
}
const entries = Object.entries(obj);
console.log(entries);