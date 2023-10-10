import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import { withPromotedLabel } from '../RestaurantCard';
import '@testing-library/jest-dom';

it('should render RestaurantCard component with props Data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText('KFC');

  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with Promoted Label", () => {
// render(<withPromotedLabel/>);

// const promotedLabel = screen.getAllByLabelText("Promoted");

// expect(promotedLabel).toBeInTheDocument();
// })
