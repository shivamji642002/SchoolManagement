import React from 'react';
import './Birthday.css'


const Birthday = () => {
  return (
    <div className="container my-5 ">
      {/* <h2 className="text-start mb-4" style={{ color: '#133E87' }}>Birthday Card</h2> */}
      <div className="row">
        {/* Box 1 */}
        <div className="col-md-4">
          <div className="card text-center border border-dark-subtle border-2"  >
            <div className="card-body">
              <h5 className="card-title" style={{ color:' #133E87' }}>Birthday Corner </h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-md-4">
          <div className="card text-center border border-dark-subtle border-2 box" >
            <div className="card-body">
              <h5 className="card-title"style={{ color:' #133E87' }}>Make a Wish!</h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-md-4">
          <div className="card text-center border border-dark-subtle border-2" >
            <div className="card-body">
              <h5 className="card-title " style={{ color:' #133E87',}}>Birthday Corner</h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
