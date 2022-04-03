import { useEffect, useState } from "react"

//chart data custom hook
const useCharts = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, []);

    return [chart, setChart];
}

export default useCharts;