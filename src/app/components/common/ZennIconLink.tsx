import { SvgIcon } from '@mui/material';
import React from 'react';

import ZennIcon from '@/icons/zenn.svg';

const ZennIconLink = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="https://zenn.dev/milky" className="text-3l">
      <SvgIcon>
        <ZennIcon />
      </SvgIcon>
    </a>
  );
};

export default ZennIconLink;
