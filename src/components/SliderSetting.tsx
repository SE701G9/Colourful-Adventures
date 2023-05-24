import { IconDefinition, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slider } from '@mui/material';
import './Settings.css';

type SliderSettingProps = {
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
  value: number;
  label: string;
  icon: IconDefinition;
};

const SliderSetting = ({
  handleSliderChange,
  value,
  label,
  icon,
}: SliderSettingProps) => (
  <div className="settings-item settings-volume">
    <div className="settings-item-label">
      <span>{label}</span>
      <FontAwesomeIcon className="settings-item-icon" icon={icon} />
    </div>
    <Slider
      valueLabelDisplay="auto"
      value={value}
      onChange={handleSliderChange}
      sx={{
        width: 180,
        color: '#604131',
        '& .MuiSlider-thumb': {
          borderRadius: '4px',
          height: '30px',
        },
      }}
    />
  </div>
);

export default SliderSetting;
