import React from 'react'
import { configure, shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Race from '../../components/Race'
import * as ReactReduxHooks from '../../redux/react-redux-hooks'
import { getRaceStatus } from '../../redux/actions/RaceActions'
import { loginToRaceDashboard } from '../../redux/actions/loginActions'

configure({ adapter: new Adapter() });

describe("Race Status Display", () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  }

  beforeEach(() => {
    store = configureStore([thunk])({
      login: {
        data: {
          token: "asdadds33432424nweddnweedk732723hadd",
          email: "6991vaibhav@gmail.com",
          password: "lTgAYaLP9jRs"
        }
      },
      race: {
        data: []
      }
    })

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();

    jest.spyOn(ReactReduxHooks, "useSelector")
    .mockImplementation(state => store.getState())

    jest.spyOn(ReactReduxHooks, "useDispatch")
    .mockImplementation(() => store.dispatch)

    wrapper = shallow(<Race store={store} />)
  })


    describe("on Mount", () => {
      it ("dispatch fetch race status action to store", () => {
        store.dispatch(getRaceStatus())
      })
    })

    it ("should render Race component correctly", () => {
      expect(wrapper.find('.raceStatusWrapper')).toHaveLength(1);
    })
})