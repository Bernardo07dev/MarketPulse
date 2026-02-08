import { useEffect, useRef, useState } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';
import axios from 'axios';

const Chart = ({ ticker }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

  const [candles, setCandles] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://brapi.dev/api/quote/${ticker}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            token: API_KEY,
            range: '1mo',
            interval: '1d',
          },
        });

        const data = response.data?.results?.[0]?.historicalDataPrice || [];

        const formatted = data.map(item => ({
          time: item.date,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
        }));

        setCandles(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [ticker]);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    chartRef.current = createChart(chartContainerRef.current, {
      layout: {
        textColor: 'white',
        background: { type: 'solid', color: '#161E2E' },
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    seriesRef.current = chartRef.current.addSeries(CandlestickSeries, {
      upColor: '#6469F2',
      downColor: '#FFFFFF1A',
      borderVisible: false,
      wickUpColor: '#6469F2',
      wickDownColor: '#FFFFFF1A',
    });

    return () => chartRef.current?.remove();
  }, []);

  useEffect(() => {
    if (seriesRef.current && candles.length > 0) {
      seriesRef.current.setData(candles);
      chartRef.current.timeScale().fitContent();
    }
  }, [candles]);

  return <div ref={chartContainerRef} style={{ width: '100%' }} />;
};

export default Chart;
