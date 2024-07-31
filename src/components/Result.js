import React from 'react';

function Result({ score, total }) {
  return (
    <div className="result-section">
      <div>
        You scored {score} out of {total}
      </div>
      <button onClick={() => window.location.reload()}>Retake Test</button>
    </div>
  );
}

export default Result;
