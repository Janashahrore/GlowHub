import { useState } from 'react';
import { Typography } from '@mui/material';
import ColorPicker from '../components/ColorPicker/ColorPicker';

const Haircare = () => {
  // نخزن اللون المختار، default فارغ
  const [selectedColor, setSelectedColor] = useState<string>('');

  // مصفوفة الألوان لعرضها
  const colors = ['#000000', '#4b2e2e', '#a52a2a', '#d2b48c', '#f5deb3', '#c0c0c0', '#ffffff'];

  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h4" gutterBottom>
        Hair Dye Collection
      </Typography>

      <p>Select your preferred color:</p>

      <ColorPicker
        colors={colors}
        selectedColor={selectedColor}
        onSelect={(color: string) => setSelectedColor(color)}
      />

      <p style={{ marginTop: '16px' }}>
        Selected Color: {selectedColor || 'None'}
      </p>
    </div>
  );
};

export default Haircare;
