import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import BarLoader from 'react-spinners/BarLoader';

import './loading.css';

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <ScaleLoader color="#ffffff" size={10} />
      <div class="loading">Loading...</div>
    </div>
  );
}

export default Loading;
