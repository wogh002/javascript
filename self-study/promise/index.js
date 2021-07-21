function promise(ms, n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error();
      error.name = "삐이이이이이익 n이 5보다 크거나 같음 삐이이익";
      n < 5 ? resolve(n) : reject(error);
    }, ms);
  });
}
async function awesome(n) {
  try {
    const data = await promise(1000, n + 1);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
async function main() {
  const [data] = await awesome(0);
  console.log(data);
  const [data2] = await awesome(data);
  console.log(data2);
  const [data3] = await awesome(data2);
  console.log(data3);
  const [data4] = await awesome(data3);
  console.log(data4);
  const [data5, error] = await awesome(data4);
  console.log(error);
}
main();
console.log("찍찎");
