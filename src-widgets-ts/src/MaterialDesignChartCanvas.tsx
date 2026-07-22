import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Default all chart text (axis ticks + axis titles) to the Material Design
// blue instead of chart.js' grey #666, matching the widget theme. Per-axis
// color fields still override this. Datalabels/legend set their own colors.
Chart.defaults.global.defaultFontColor = "#44739e";

type Props = { type: string; data: Chart.ChartData; options: Chart.ChartOptions };

export function MaterialDesignChartCanvas({ type, data, options }: Props): React.JSX.Element {
  const canvas = useRef<HTMLCanvasElement>(null);
  const chart = useRef<Chart | null>(null);
  useEffect(() => {
    if (!canvas.current) return;
    chart.current?.destroy();
    chart.current = new Chart(canvas.current, { type, data, options, plugins: [ChartDataLabels] });
    return () => chart.current?.destroy();
  }, [type, data, options]);
  return <canvas className="materialdesign-chart-container" style={{ height: "100%", width: "100%" }} ref={canvas} />;
}
