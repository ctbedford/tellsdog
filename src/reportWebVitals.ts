import * as WebVitals from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: WebVitals.Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    WebVitals.onCLS(onPerfEntry);
    WebVitals.onINP(onPerfEntry);
    WebVitals.onFCP(onPerfEntry);
    WebVitals.onLCP(onPerfEntry);
    WebVitals.onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
