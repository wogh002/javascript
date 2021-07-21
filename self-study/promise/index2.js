const increaseAndPrint = (n, callback) => {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    callback && callback(increased);
  }, 1000);
};
increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        console.log("작업끝");
      });
    });
  });
});
