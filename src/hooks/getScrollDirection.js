import { useState, useEffect } from 'react';

function getScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    console.log(window.pageYOffset);
    setScrollDirection(window.pageYOffset);
  }, [window.pageYOffset]);

  return scrollDirection;
}

export default getScrollDirection;
