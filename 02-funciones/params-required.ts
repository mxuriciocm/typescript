(() => {
  const fullName = (firstName: string, lastName: string) => { // when putting ':' means that the parameter is required
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");
  console.log({ name });
})();
