import React from 'react';
import './Star.css';

const Star = ({value}) => {
          switch (value) {
            case 1:
              return <span>1 *</span>;
            case 2:
              return <span>2 **</span>;
            case 3:
              return <span>3 ***</span>;
            case 4:
                  return <span>4 ****</span>;
              case 5:
                  return <span>5 *****</span>
            default:
              return <span>*****</span>;
          }
        }

export default Star;