import React from 'react';

const ElectionInfo = props => {
  const { description, date, type } = props.election;
  const url = props.election['polling-place-url-shortened'];
  return (
    <div className="electionInfo">
      <li>Description: {description}</li>
      <li>Date: {date}</li>
      <li>Type: {type}</li>
      <li>
        URL:
        <a href={url}>{url}</a>
      </li>
    </div>
  );
};

export default ElectionInfo;
