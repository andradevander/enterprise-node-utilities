const classNames = (arg1, arg2) => {
  const classes = [];
  if (typeof arg1 === "string") {
    classes.push(arg1);

    if (arg2 && typeof arg2 === "object") {
      Object.keys(arg2).forEach((key) => {
        if (arg2[key]) classes.push(key);
      });
    }

    return classes.join(" ");
  }

  Object.keys(arg1).forEach((key) => {
    if (arg1[key]) classes.push(key);
  });

  return classes.join(" ");
};

module.exports = classNames;
