import { Line } from 'react-chartjs-2'
import { dataSets } from '../../interfaces/school'
import { dates } from '../../helperFuns/myFuns'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Chart: React.FC = (): JSX.Element => {
    const datasets: dataSets = useSelector((state: RootState) => state.filteredSchoolsReducer.datasets)

    return (
        <div className="col-lg-9">
            <Line
                data={{
                    labels: dates,
                    datasets
                }}
            />
        </div>
    )
}

export default Chart
