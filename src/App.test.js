// import { headline } from "./redux/reducers/HeadlineReducers";
// import { reducer } from "./redux/reducers/HeadlineReducers";

// describe("Headline Reducer", () => {
//   it("headline request", () => {
//     const headlineReducers = reducer(
//       {
//         isLoading: false,
//         isError: false,
//         data: [],
//       },
//       { type: headline.HEADLINE_REQUEST }
//     );
//     expect(headlineReducers).toEqual({
//       isLoading: true,
//       isError: false,
//       data: [],
//     });
//   });
// });

// describe('Navbar Brand', () => {
//     test('render navbar brand', () => {
//         const wrapper = shallow(<Navbar/>);
//         expect (wrapper.find('h4').text()).toContain('Headline')
//     })
// })

// import { applyMiddleware, createStore } from 'redux'
// import { shallow } from 'enzyme/build'
// import createSagaMiddleware from 'redux-saga'
// import rootReducers from './redux/reducers/rootReducers'

// const findByTestAttr = (component, attr) => {
//   const wrapper = component.find(`[data-test = '${attr}]`)
//   return wrapper
// }

// const testStore = (initialState) => {
//   const sagaMiddleware = createSagaMiddleware()
//   return createStore(rootReducers, applyMiddleware(sagaMiddleware), initialState)
// }

// const setUp = (initialState = {}) => {
//   const store = testStore(initialState)
//   const wrapper = shallow(<Navbar store={store} />).childAt(0).dive();
//   return wrapper
// }

// describe('Navbar', () => {
//   let wrapper;
//   beforeEach(() => {
//     const initialState = {
//       isLoading: false,
//       isError: false,
//       data: []
//     }
//     wrapper = setUp(initialState)
//   })
//   it('Should render navbar brand', () => {
//     const component = findByTestAttr(wrapper, 'navbar-component');
//     expect(component.length).toBe(1)

//   })
// })

// // Testing React connected component (works)
// import { configure } from "enzyme/build";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import Navbar from "./components/Navbar";
// import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
// import mount from "enzyme/build/mount";

// configure({ adapter: new ReactSeventeenAdapter() });
// it("should render navbar-brand", () => {
//   const mockStore = configureStore();
//   const store = mockStore({
//     search: { isLoading: false, data: [], isError: false },
//   });

//   const wrapper = mount(
//     <Provider store={store}>
//       <Navbar />
//     </Provider>
//   );

//   expect(wrapper.find).toMatchSnapshot();
// });

// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
// import { postsApi } from "./api/PostsApi";

// const axiosMock = new MockAdapter(axios);

// describe("", () => {
//   // afterEach(() => {
//   //   axiosMock.reset();
//   // });

//   it("the result of API call", () => {
//     const data = [
//       {
//         'userId': 1,
//         'id': 1,
//         'title':
//           "hisjiwklk ent occaecati excepturi optio reprehenderit",
//         'body':
//           "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//       }
//     ];

//     axiosMock
//       .onGet(`https://jsonplaceholder.typicode.com/posts/1`)
//       .reply(200, data);

//     postsApi()
//     .then((res) => {
//       expect(3).toBeGreaterThan(5);
//       done();
//     })
//     .catch(() => console.log('error nih'))
//   });
// });

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import postsApi from "./api/PostsApi";

describe("API testing", () => {
  it("JSONplaceholder test", (done) => {
    var mock = new MockAdapter(axios);
    const data = [{
      response: true,
      title: "descartes",
      description: "rennaissance",
    }];
    mock.onGet("https://jsonplaceholder.typicode.com/posts/1").reply(200, data);

    postsApi.sendMessage(0, "any").then((response) => {
      expect(response.length).toBe(3);
      done();
    });
  });
});
