import React from 'react';
import Helmet from 'react-helmet';
import { appName } from '../../core/config';

const Head = ({ title, description }) => (
  <Helmet>
    <title>{`${appName}-${title || ''}`.trim()}</title>
    <meta name="description" content={(description || '').trim()} />
  </Helmet>
);

export default Head;
