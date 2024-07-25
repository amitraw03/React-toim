import { render ,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard from "../RestaurantCard ";

it("Should render Restaurant card component with props Data",()=>{
     render(<RestaurantCard resData={MOCK_DATA} />);
     
     const name= screen.getByText("KFC");

     expect(name).toBeInTheDocument();
});