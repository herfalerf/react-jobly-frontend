import { useState, useEffect } from "react";

//Custom hook to allow for saving and object in local storage

function useLocalStorage(key, firstvalue = null) {
  const initialValue = localStorage.getItem(key) || firstvalue;

  const [item, setItem] = useState(initialValue);

  useEffect(
    function setKeyInLocalStorage() {
      console.debug("hooks useLocalStorage useEffect", "item=", item);

      if (item === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, item);
      }
    },
    [key, item]
  );
  return [item, setItem];
}

export default useLocalStorage;
