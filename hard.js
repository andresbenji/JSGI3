const newPerson = (name, ssn) => {
  let pii = {
    name: name,
    ssn: ssn,
  };

  function getName() {
    return pii.name;
  }

  return {
    getName: getName,
  };
};

const person1 = newPerson("Andres", "123-45-6789");

console.log(person1.getName()); // Outputs: "John Doe"
console.log(person1.ssn); // Outputs: undefined
