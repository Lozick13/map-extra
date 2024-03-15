export class Settings {
  constructor() {
    this.userSettings = new Map();

    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.settingsOptions = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
  }

  addSetting(settingName, settingValue) {
    if (
      !(settingName in this.settingsOptions) ||
      !this.settingsOptions[settingName].includes(settingValue)
    ) {
      return 'Unknown setting';
    }

    this.userSettings.set(settingName, settingValue);
  }

  getSettings() {
    const keysUserSettings = [...this.userSettings.keys()];
    const mergeSettings = new Map([...this.defaultSettings]);

    keysUserSettings.forEach(key => {
      if (mergeSettings.has(key)) {
        mergeSettings.delete(key);
        mergeSettings.set(key, this.userSettings.get(key));
      }
    });

    return mergeSettings;
  }
}
