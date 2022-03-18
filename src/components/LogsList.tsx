import React from 'react';
import { useQueryDataContext } from 'src/hooks/useQueryData';
import isEmpty from 'src/utils/isEmpty';

const LogsList = () => {
  const { selectedLogs } = useQueryDataContext();

  return (
    <div style={{ width: '100%' }}>
      {isEmpty(selectedLogs) ? (
        <p>Please, select a Schedule</p>
      ) : (
        <div>
          <p>Logs Entries</p>
          {selectedLogs.map(({ id }) => (
            <p key={`log-entry-${id}`}>{id}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogsList;
