import { faMusic, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SliderSetting from './SliderSetting';
import SwitchSetting from './SwitchSetting';

const Settings = () => {
  const [isColorBlindChecked, setIsColorBlindChecked] = useState<boolean>(true);
  const [soundVolume, setSoundVolume] = useState<number>(50);
  const [effectVolume, setEffectVolume] = useState<number>(50);

  const toggleColorBlind = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsColorBlindChecked(event.target.checked);
  };

  const changeSoundVolume = (event: Event, newValue: number | number[]) => {
    setSoundVolume(newValue as number);
  };

  const changeEffectVolume = (event: Event, newValue: number | number[]) => {
    setEffectVolume(newValue as number);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <SliderSetting
        handleSliderChange={changeSoundVolume}
        value={soundVolume}
        label="Sound"
        icon={faMusic}
      />
      <SliderSetting
        handleSliderChange={changeEffectVolume}
        value={effectVolume}
        label="Special Effects"
        icon={faVolumeHigh}
      />
      <SwitchSetting
        isChecked={isColorBlindChecked}
        toggleChecked={toggleColorBlind}
        label="Color blind"
      />
    </div>
  );
};

export default Settings;
