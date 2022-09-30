import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./types";

export const useTypedDispatch: () => AppDispatch = useDispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
