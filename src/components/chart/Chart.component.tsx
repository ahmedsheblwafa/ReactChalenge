import { Line } from 'react-chartjs-2'
import { dataSets } from '../../interfaces/school'
import { dates } from '../../helperFuns/myFuns'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)

const Chart: React.FC = (): JSX.Element => {
    const datasets: dataSets = useSelector((state: RootState) => state.filteredSchoolsReducer.datasets)

    return (
        <div className="col-lg-9">
            <Line
                data={{
                    labels: dates,
                    datasets:
                        datasets.length > 0
                            ? datasets
                            : [
                                  {
                                      data: [10, 20, 30],
                                      backgroundColor: 'transparent',
                                      borderColor: 'transparent',
                                      pointBackgroundColor: 'transparent',
                                      pointRadius: 0
                                  }
                              ]
                }}
            />
        </div>
    )
}

export default Chart
