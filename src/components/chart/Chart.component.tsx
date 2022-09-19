import { Line, getElementAtEvent } from 'react-chartjs-2'
import { MouseEventHandler, useRef } from 'react'
import { dataSets } from '../../interfaces/school'
import { dates } from '../../helperFuns/myFuns'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip } from 'chart.js'
import { passDataToSecondpage } from '../../Redux/reducers/filteredSchoolsReducer'
import { useNavigate } from 'react-router-dom'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)

const Chart: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const datasets: dataSets = useSelector((state: RootState) => state.filteredSchoolsReducer.datasets)

    const chartRef = useRef(null)

    const onClick: MouseEventHandler<HTMLCanvasElement> = (event) => {
        if (chartRef.current) {
            const data = getElementAtEvent(chartRef.current, event).map((el) => ({
                dataSetIndex: el.datasetIndex,
                monthIndex: el.index
            }))
            if (data.length != 0) {
                dispatch(passDataToSecondpage(data))
                navigate('/points-data')
            }
        }
    }

    return (
        <div className="col-lg-9">
            <Line
                ref={chartRef}
                onClick={onClick}
                options={{
                    scales: {
                        y: {
                            min: 0,
                            suggestedMax: 500
                        }
                    }
                }}
                data={{
                    labels: dates,
                    datasets:
                        datasets.length > 0
                            ? datasets
                            : [
                                  {
                                      data: [],
                                      backgroundColor: 'transparent',
                                      borderColor: 'transparent',
                                      pointBackgroundColor: 'transparent',
                                      pointRadius: 0,
                                      pointHoverBackgroundColor: '',
                                      pointHoverRadius: 8
                                  }
                              ]
                }}
            />
        </div>
    )
}

export default Chart
