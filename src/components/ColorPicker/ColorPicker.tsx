import React from 'react';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, selectedColor, onSelect }) => {
  return (
    <div style={{ display: 'flex', gap: '5px', margin: '10px 0' }}>
      {colors.map(color => (
        <div
          key={color}
          onClick={() => onSelect(color)}
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            backgroundColor: color,
            border: selectedColor === color ? '3px solid black' : '1px solid gray',
            cursor: 'pointer'
          }}
        />
      ))}
    </div>
  );
};

export default ColorPicker;