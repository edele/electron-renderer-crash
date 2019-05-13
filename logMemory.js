exports.logMemory = () => {
  const memory = window.performance.memory;
  const { jsHeapSizeLimit, usedJSHeapSize, totalJSHeapSize } = memory;

  document.body.innerHTML = `<pre> ${JSON.stringify(
    {
      jsHeapSizeLimit,
      usedJSHeapSize,
      totalJSHeapSize,
      ratio: usedJSHeapSize / jsHeapSizeLimit
    },
    null,
    2
  )}`;
};
