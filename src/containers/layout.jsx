import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
export default function Layout(props) {
  return (
    <div className="app-body">
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
