const names = [
  "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack",
  "Karen", "Leo", "Mona", "Nancy", "Oscar", "Paul", "Quinn", "Rachel", "Sam", "Tina",
  "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane", "Aaron", "Bella", "Cody", "Diana",
  "Ethan", "Fiona", "George", "Holly", "Isaac", "Jasmine", "Kyle", "Laura", "Matt", "Nina",
  "Oliver", "Penny", "Quincy", "Rebecca", "Steve", "Tracy", "Ursula", "Vince", "Will", "Xena"
];

const getRandomName = () => names[Math.floor(Math.random() * names.length)];
const getRandomAge = () => Math.floor(Math.random() * 60) + 18; // Age between 18 and 77
const getRandomID = () => Math.floor(Math.random() * 10000) + 18; // Age between 18 and 77

const people = Array.from({ length: 100 }, () => ({

  id:getRandomID(),
  name: getRandomName(),
  age: getRandomAge()
}));

export default people;
