const wrapper = (f) => {
  return (arg) => {
    const result = f(arg);
    console.log('Converted', arg, 'to boolean -', result);
  }
}

wrapper(Boolean)(true);
wrapper(Boolean)(false);
wrapper(Boolean)(5);
wrapper(Boolean)(0);
wrapper(Boolean)("Hello, World!");
wrapper(Boolean)("");
