import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Redux/store'
import { label } from '../filterationsection/FilterationSection.component'
import {
    getCampFilter,
    getSchoolFilter,
    filterByCountry,
    filterByCamp,
    filterBySchool,
    setDataSets,
    resetDataSets
} from '../../Redux/reducers/filteredSchoolsReducer'
import { setLoading, removeLoading } from '../../Redux/reducers/schoolsReducer'

interface Iprops {
    label: label
}

const DropDown: React.FC<Iprops> = ({ label }: Iprops): JSX.Element => {
    const allSchools = useSelector((state: RootState) => state.allSchoolsReducer.allSchools)
    const schools = useSelector((state: RootState) => state.filteredSchoolsReducer.school)
    const selectHandeler = {
        ['country']: (e: { target: { value: string } }) => {
            dispatch(filterByCountry({ all: allSchools, country: e.target.value }))
            dispatch(getCampFilter())
            dispatch(setDataSets())
            dispatch(resetDataSets())
        },
        ['camp']: (e: { target: { value: string } }) => {
            dispatch(filterByCamp(e.target.value))
            dispatch(getSchoolFilter())
            dispatch(filterBySchool('all schools'))
            dispatch(setDataSets())
        },
        ['school']: (e: { target: { value: string } }) => {
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

                        {label !== 'school' ? <option value="">select {label}</option> : ''}
                        {data.map((el) => (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default DropDown
