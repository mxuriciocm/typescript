(() => {
  const fullName = (firstName: string, lastName?: string): string => { // ? it means that the parameter is optional
    return `${firstName} ${lastName || "-------"}`; 
  };

  const name = fullName("Tony");
  console.log({ name });
})();
