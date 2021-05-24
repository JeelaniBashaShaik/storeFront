import React from 'react';
import storeImage from './../assets/images/store-adhoc.png';

export const Home = () => {
  return (
    <React.Fragment>
      <div class="home">
        <div>
          <img src={storeImage} alt="store image" />
        </div>
      </div>
    </React.Fragment>
  );
};
