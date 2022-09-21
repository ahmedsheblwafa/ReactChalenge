import { render as renderComponent, screen } from '@testing-library/react'
import Datapage from '@components/datapage/Datapage.component'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { BrowserRouter } from 'react-router-dom'
const render = (component: JSX.Element) =>
    renderComponent(
        <BrowserRouter>
            <Provider store={store}>{component}</Provider>
        </BrowserRouter>
    )

it('renders a back button to get back to the chart', () => {
    render(<Datapage />)
    expect(screen.getByText(/back/i)).toBeInTheDocument()
})
