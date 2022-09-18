import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store'
import { label } from '../filterationsection/FilterationSection.component'
import {
    getCampFilter,
    getSchoolFilter,
    filterByCountry,
    filterByCamp,
    filterBySchool,
    setDataSets
} from '../../Redux/reducers/filteredSchoolsReducer'

interface Iprops {
    label: label
}

const DropDown: React.FC<Iprops> = ({ label }: Iprops): JSX.Element => {
    const allSchools = useSelector((state: RootState) => state.allSchoolsReducer.allSchools)
    const schools = useSelector((state: RootState) => state.filteredSchoolsReducer.school)
    const selectHandeler = {
        ['country']: (e: { target: { value: any } }) => {
            dispatch(filterByCountry({ all: allSchools, country: e.target.value }))
            dispatch(getCampFilter())
        },
        ['camp']: (e: { target: { value: any } }) => {
            dispatch(filterByCamp(e.target.value))
            dispatch(getSchoolFilter())
            dispatch(filterBySchool('all schools'))
            dispatch(setDataSets())
        },
        ['school']: (e: { target: { value: any } }) => {
            dispatch(filterBySchool(e.target.value))
            dispatch(setDataSets())
        }
    }
    const data = useSelector((state: RootState) => state.filteredSchoolsReducer[label])
    const dispatch = useDispatch()

    return (
        <div className="col-lg-3 my-3 my-lg-0">
            <div className="row justify-content-center align-items-center">
                <div className="col-3">
                    <label htmlFor={label}>{label}</label>
                </div>
                <div className="col-9">
                    <select onChange={selectHandeler[label]} className="form-control" name={label} id={label}>
                        {label == 'school' && schools.length != 0 ? <option>all schools</option> : ''}
                        {data.map((el: string, i: number) => (
                            <option key={i} value={el}>
                                {el}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default DropDown