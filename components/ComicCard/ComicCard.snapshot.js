import { render } from '@testing-library/react';
import ComicCard from '../ComicCard/index';

it('renders homepage unchanged', () => {
  const { container } = render(<ComicCard />);
  expect(container).toMatchSnapshot();
});
