// Code your solution here
// Sample array of driver data
const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Jane', hometown: 'Los Angeles' },
    { name: 'Doe', hometown: 'Chicago' },
    { name: 'Alice', hometown: 'Miami' },
    { name: 'Bob', hometown: 'New York' }
  ];
  
  // Function to find matching drivers by name (case insensitive)
  function findMatching(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  // Function to find drivers whose names start with a given string
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function to find drivers by exact name match
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  
  // Example usage:
  console.log(findMatching(drivers, 'jane')); 
  console.log(fuzzyMatch(drivers, 'b'));      
  console.log(matchName(drivers, 'John')); 