(() => {
  const fullName = (
    firstName: string,
    lastName?: string, // the ? it means that the parameter is optional
    upper: boolean = false // here a default parameter is beign initialized to false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "----"}`.toLowerCase();
    } else {
      return `${firstName} ${lastName || "----"}`;
    }
  };

  const nameHero = fullName("Tony", "Stark", true);
  console.log({ nameHero });
})();
