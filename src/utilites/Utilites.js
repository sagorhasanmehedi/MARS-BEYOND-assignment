// set localStorage

const setlocal = (data) => {
  const { name } = data;
  const localstor = localStorage.getItem("cart");
  let stor = {};
  if (!localstor) {
    stor[name] = 1;
  } else {
    stor = JSON.parse(localstor);
    if (stor[name]) {
      const newset = stor[name] + 1;
      stor[name] = newset;
    } else {
      stor[name] = 1;
    }
  }
  localStorage.setItem("cart", JSON.stringify(stor));
};

export { setlocal };
