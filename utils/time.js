var watches = [];

module.exports = {
  start: function (title) {
    watches.push({
      time: process.hrtime(),
      title: title,
    });
  },
  end: function () {
    var end = process.hrtime();
    var start = watches.pop();
    var seconds = end[0] - start.time[0];
    var nanoseconds = end[1] - start.time[1];
    if (nanoseconds < 0) {
      nanoseconds += 1000 * 1000 * 1000;
      seconds -= 1;
    }

    var ns = nanoseconds % 1000;
    var μs = Math.ceil(nanoseconds / 1000) % 1000;
    var ms = Math.ceil(nanoseconds / 1000000) % 1000;

    console.log(
      (start.title ? '[' + start.title + '] ' : '')
      + 'Execution time: '
      + (seconds > 0 ? seconds + 's ' : '')
      + (ms > 0 ? ms + 'ms ' : '')
      + (μs > 0 ? μs + 'μs ' : '')
      + (ns > 0 ? ns + 'ns ' : '')
    );
  }
}