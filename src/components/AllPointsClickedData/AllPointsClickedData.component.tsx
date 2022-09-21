import { School } from '@interfaces/school'

type Iprops = {
    allData: School[]
}

export default function AllPointsClickedData({ allData }: Iprops) {
    return (
        <>
            {allData.map((el, i) => {
                const { camp, country, lessons, month, school } = el
                return (
                    <div key={i} data-testid="pointDataContainer" className="col-md-4">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">country: {country}</li>
                                <li className="list-group-item">camp: {camp}</li>
                                <li className="list-group-item">school: {school}</li>
                                <li className="list-group-item">month: {month}</li>
                                <li className="list-group-item">lessons: {lessons}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
