import {
  useDispatch as originalUseDispatch,
  useSelector as originalUseSelector
} from "react-redux";

export const useDispatch = () => originalUseDispatch()
export const useSelector = state => originalUseSelector(state)