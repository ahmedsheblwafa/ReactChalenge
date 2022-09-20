import DropDownComponent from '@components/DropDown/DropDown.component'
export enum label {
    country = 'country',
    camp = 'camp',
    school = 'school'
}

const FilterationSection: React.FC = (): JSX.Element => (
    <div className="row py-5 justify-content-around">
        <DropDownComponent label={label.country} />
        <DropDownComponent label={label.camp} />
        <DropDownComponent label={label.school} />
    </div>
)
export default FilterationSection
