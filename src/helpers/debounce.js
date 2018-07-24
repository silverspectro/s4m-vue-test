export class DebounceHelper {
  static debounceThrottle(fn, duration = 100) {
    let timerId;
    let lastArgs;

    let lastCall = 0;
    return function (...args) {
      const now = getTime();
      if (now - lastCall < duration) return planNextCall(args);
      clearTimer();
      lastCall = now;
      return fn(...args);
    };

    function getTime() {
      return (new Date()).getTime();
    }

    function planNextCall(args) {
      lastArgs = args;
      clearTimer();
      timerId = setTimeout(() => {
        fn(...lastArgs);
        timerId = null;
      }, duration);
      return false;
    }

    function clearTimer() {
      if (timerId) clearTimeout(timerId);
      timerId = null;
    }
  }

  static debounce(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}
