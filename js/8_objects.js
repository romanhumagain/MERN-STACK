// creating a objects to represent a person

const person = {
  fname :"Roman Humagain", 
  age :21,
  hobbies : ["coding", "playing"],
  courseName : function getCourse(course){
    return course;
  }
}

console.log(person.fname)
console.log(person.courseName("Software Engineering"))