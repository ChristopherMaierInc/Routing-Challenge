import React, { Component } from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>404: No match for <code>{ location.pathname }</code></h3>
  </div>
)

export default NoMatch;
