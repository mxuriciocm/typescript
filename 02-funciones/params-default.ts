(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
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
