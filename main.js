// Function that calculate how old you were / you will be

const howOld = (age, year) => {
  const bornYear = (2023 - age);
  const previousYears = (bornYear - year);
  const ageInFuture = (year - 2023 + age);
  const ageInPast = (year - bornYear)
  if (year > 2023) {
    return 'You will be ' + ageInFuture + ' in the year ' + year + '.'
  } else if (year < bornYear){
    return 'The year ' + year + ' was ' + previousYears + ' years before you were born.'
  } else if (year > bornYear && year < 2023) {
    return 'You were ' + ageInPast + ' in the year ' + year + '.'
  }
};




// Function call to test the code! Try it changhing the first number inside parenthesis with your age and second one with the year you want

console.log(howOld(30,1970));