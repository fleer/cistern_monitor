export const generateYAxis = () => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];

  const topLabel = 5000;
  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`${i} Liter`);
  }

  return { yAxisLabels, topLabel };
};
