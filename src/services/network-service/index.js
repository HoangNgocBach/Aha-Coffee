import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
let unsubscribe;
function useNetWorkStatus() {
  const isFocused = useIsFocused();
  const [status, setStatus] = useState(false);
  const [canAccess, setCanAccess] = useState(false);
  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        unsubscribe = NetInfo.addEventListener(state => {
          setStatus(state.isConnected ?? false);
          setCanAccess(state.isInternetReachable ?? false);
        });
      }
    }, [isFocused, status, canAccess]),
  );
  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);
  return [status, canAccess];
}
export default useNetWorkStatus;
