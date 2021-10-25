import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalStateProvider';

const useGlobalState = () => useContext(GlobalStateContext);

export default useGlobalState;
