(() => {
  const fullName = (firstName: string, ...rest: string[]): string => { // rest operator is used to store all the optional parameters you require 
    return `${firstName} ${rest.join(' ')}`;
  };

  const superman = fullName('Clark')
})();
