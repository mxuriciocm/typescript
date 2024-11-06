namespace validations { // its like a mini class where you group all the logic into a function
  export const validateText = (text: string) => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return (isNaN(myDate.valueOf())) ? true : false;
  };
}


