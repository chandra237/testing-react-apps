import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

describe('Greeting component',()=>{
    test('Hey its my first unit test',()=>{
        render(<Greetings />);
        const resultElement = screen.getByText('Hello World!!',{exact:false});
        expect(resultElement).toBeInTheDocument();
    });

    test('renders good to see u if the button was not clicked',()=>{
        render(<Greetings />)
        const outputElement = screen.getByText('good to see u',{exact:false});
        expect(outputElement).toBeInTheDocument();
    })

    test('render Changed if we click the button', async () => { // Note the use of async keyword
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        // Use waitFor to wait for the appearance of 'Changed!' text
        await waitFor(() => {
            const outputElement = screen.getByText('Changed', { exact: false });
            expect(outputElement).toBeInTheDocument();
        });
    });
})

