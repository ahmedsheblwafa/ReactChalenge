import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { Link } from 'react-router-dom'

const Datapage: React.FC = (): JSX.Element => {
    const allData = useSelector((state: RootState) => state.filteredSchoolsReducer.elementsToSecondPage)
    return (
        <>
            <a href="">back</a>
            <div className="container py-5">
                <div className="p-5 row text-center justify-content-center">
                    <Link className="btn btn-success col-md-6" to="/">
                        back
                    </Link>
                </div>
                <div className="row g-5">
                    {allData.map((el, i) => {
                        const { camp, country, lessons, month, school } = el
                        return (
                            <div key={i} className="col-md-4">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{country}</li>
                                        <li className="list-group-item">{camp}</li>
                                        <li className="list-group-item">{school}</li>
                                        <li className="list-group-item">{month}</li>
                                        <li className="list-group-item">{lessons}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Datapage
