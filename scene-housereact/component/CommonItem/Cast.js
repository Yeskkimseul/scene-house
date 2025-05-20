import React from 'react';
import "./Cast.css";
import MoreText from '../Button/MoreText';

function Cast({ castList }) {
  return (
    <div className='Cast-Wrapper'>
      <div className='Cast-bg'>
        <div className='Cast'>
          <h2>출연/제작</h2>
          <MoreText />
          <ul className='castMember'>
            {castList.map((member, index) => (
              <li key={index}>
                <div className='imgbox'>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className='b5'>{member.name}</div>
                <div className='b7'>{member.role}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cast;