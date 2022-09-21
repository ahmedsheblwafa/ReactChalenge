import { render, screen } from '@testing-library/react'
import DataForOptions from '@components/DataForOptions/DataForOptions.component'

const countries = [
    { id: '1', name: 'country1' },
    { id: '2', name: 'country2' },
    { id: '3', name: 'country3' },
    { id: '4', name: 'country4' }
]

const camps = [
    { id: '1', name: 'camp1' },
    { id: '2', name: 'camp2' },
    { id: '3', name: 'camp3' },
    { id: '4', name: 'camp4' }
]

const schools = [
    { id: '1', name: 'school1' },
    { id: '2', name: 'school2' },
    { id: '3', name: 'school3' },
    { id: '4', name: 'school4' }
]

it('renders arr of countries as grp of options with same countries names', () => {
    render(<DataForOptions label="country" data={countries} />)
    screen.getAllByRole('option').forEach((el, i) => {
        if (i == 0) {
            expect(el).toContainHTML('<option value="" >select country</option>')
        } else {
            expect(el).toContainHTML(`<option value="${countries[i - 1].name}" >${countries[i - 1].name}</option>`)
        }
    })
})

it('renders arr of camps as grp of options with same camps names', () => {
    render(<DataForOptions label="camp" data={camps} />)
    screen.getAllByRole('option').forEach((el, i) => {
        if (i == 0) {
            expect(el).toContainHTML('<option value="" >select camp</option>')
        } else {
            expect(el).toContainHTML(`<option value="${camps[i - 1].name}" >${camps[i - 1].name}</option>`)
        }
    })
})

it('renders arr of schools as grp of options with same schools names', () => {
    render(<DataForOptions label="school" data={schools} />)
    screen.getAllByRole('option').forEach((el, i) => {
        if (i == 0) {
            expect(el).toContainHTML('<option value="" >all schools</option>')
        } else {
            expect(el).toContainHTML(`<option value="${schools[i - 1].name}" >${schools[i - 1].name}</option>`)
        }
    })
})

describe('renders one option as defalt if data arr is empty', () => {
    it('renders one option as defalt if country arr is empty ', () => {
        render(<DataForOptions label="country" data={[]} />)
        expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    it('renders one option as defalt if camps arr is empty ', () => {
        render(<DataForOptions label="camp" data={[]} />)
        expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    it('renders one option as defalt if schools arr is empty ', () => {
        render(<DataForOptions label="school" data={[]} />)
        expect(screen.getAllByRole('option')).toHaveLength(1)
    })
})

describe('renders number of options same as data arr + default one', () => {
    it('renders number of options same as countries arr + default one ', () => {
        render(<DataForOptions label="country" data={countries} />)
        expect(screen.getAllByRole('option')).toHaveLength(countries.length + 1)
    })

    it('renders number of options same as camps arr + default one ', () => {
        render(<DataForOptions label="camp" data={camps} />)
        expect(screen.getAllByRole('option')).toHaveLength(camps.length + 1)
    })

    it('renders number of options same as schools arr + default one ', () => {
        render(<DataForOptions label="school" data={schools} />)
        expect(screen.getAllByRole('option')).toHaveLength(schools.length + 1)
    })
})
