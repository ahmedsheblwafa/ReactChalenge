import { render as renderComponent, screen } from '@testing-library/react'
import DropDown from '@components/DropDown/DropDown.component'
import { label } from '@components/filterationsection/FilterationSection.component'
import { Provider } from 'react-redux'
import { store } from '@redux/store'

const render = (component: JSX.Element) => renderComponent(<Provider store={store}>{component}</Provider>)

describe('renders label from props correctly', () => {
    it('renders country when label prop is country ', async () => {
        render(<DropDown label={label.country} />)
        expect(screen.getByLabelText(/country/i)).toBeInTheDocument()
    })

    it('renders camp when label prop is camp', async () => {
        render(<DropDown label={label.camp} />)
        expect(screen.getByLabelText(/camp/i)).toBeInTheDocument()
    })

    it('renders school when label prop is school', async () => {
        render(<DropDown label={label.school} />)
        expect(screen.getByLabelText(/school/i)).toBeInTheDocument()
    })
})

describe('except for scool all renders first option to be select {label} with empty value ', () => {
    it('renders first option by label "test country"', async () => {
        render(<DropDown label={label.country} />)
        expect(screen.getByRole('option')).toContainHTML('<option value="">select country</option>')
    })

    it('renders first option by label "test camp"', async () => {
        render(<DropDown label={label.camp} />)
        expect(screen.getByRole('option')).toContainHTML('<option value="">select camp</option>')
    })
    it('renders first option by label "test school"', async () => {
        render(<DropDown label={label.school} />)
        expect(screen.getByRole('option')).toContainHTML('<option value="all schools">all schools</option>')
    })
})
