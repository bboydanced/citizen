import React, {useState} from 'react';
import EjectIcon from '@material-ui/icons/Eject';


const ScrollTop = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <EjectIcon className="scrollTop" onClick={scrollTop} style={{height:"40px", width:"40px",display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollTop;