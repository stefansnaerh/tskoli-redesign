const cx = (...classes) => {
  if (!Array.isArray(classes)) {
    throw "cx: input was not an array";
  }

  return classes
    .map((item) => {
      if (typeof item === "string") return item;

      try {
        const [value, condition] = Object.entries(item)[0];
        return !!condition ? value : "";
      } catch (err) {
        throw err;
      }
    })
    .join(" ");
};

export default cx;
