import React from 'react';

interface TabProps {
  content: string;
}

export const Tab: React.FC<TabProps> = (props) => {
  const { content } = props;

  return (
    <div>
      <p>
        {content}
      </p>
    </div>
  );
};
