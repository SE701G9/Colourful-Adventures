import { Switch } from '@mui/material';
import './Settings.css';

type SwitchSettingProps = {
  isChecked: boolean;
  toggleChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const SwitchSetting = ({
  isChecked,
  toggleChecked,
  label,
}: SwitchSettingProps) => (
  <div className="settings-item settings-toggle">
    <div className="settings-item-label">
      <span>{label}</span>
    </div>
    <div className="switch-settings-group">
      <Switch
        checked={isChecked}
        onChange={toggleChecked}
        inputProps={{ 'aria-label': 'controlled' }}
        sx={{
          transform: 'scale(1.3)',
          '& .MuiSwitch-thumb': {
            color: '#604131',
          },
          '& .MuiSwitch-track': {
            backgroundColor: '#604131 !important',
          },
        }}
      />
      <span className="switch-settings-side-label">On</span>
    </div>
  </div>
);

export default SwitchSetting;
