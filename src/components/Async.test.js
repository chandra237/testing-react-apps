import {render, screen, waitFor} from '@testing-library/react';
import Async from './Async';

describe('Async component',()=>{
    test('renders posts if request succeeds',async ()=>{
        render(<Async />);
        
        await waitFor(()=>{
            const listItemElement =screen.getAllByRole('listitem');
            expect(listItemElement).not.toHaveLength(0);
        })
        
    });
});