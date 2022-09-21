import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { Link } from 'react-router-dom'
import AllPointsClickedData from '@components/AllPointsClickedData/AllPointsClickedData.component'

const Datapage: React.FC = (): JSX.Element => {
    const allData = useSelector((state: RootState) => state.filteredSchoolsReducer.elementsToSecondPage)
    return (
        <>
            <div className="container py-5">
                <div className="p-5 row text-center justify-content-center">
                    <Link className="btn btn-success col-md-6" to="/">
                        back
                    </Link>
                </div>
                <div className="row g-5">
                    <AllPointsClickedData allData={allData} />
                </div>
            </div>
        </>
    )
}

export default Datapage
