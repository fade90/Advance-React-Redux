import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// El archivo debe llamarse si o si asi "setupTests.js"
// configuracion de enzyme para usarlo en cualquier lugar.
Enzyme.configure({ adapter: new Adapter() });
