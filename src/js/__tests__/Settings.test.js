import { Settings } from '../app';

test('Settings addSetting() success', () => {
  const settings = new Settings();

  const result = settings.addSetting('theme', 'gray') === undefined;

  expect(result).toBe(true);
});

test('Settings addSetting() fail settingName', () => {
  const settings = new Settings();

  const result = settings.addSetting('background', 'gray') === undefined;

  expect(result).toBe(false);
});

test('Settings addSetting() fail settingValue', () => {
  const settings = new Settings();

  const result = settings.addSetting('theme', 'white') === undefined;

  expect(result).toBe(false);
});

test('Settings getSettings()', () => {
  const settings = new Settings();

  settings.addSetting('music', 'pop');

  const result = settings.getSettings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'pop'],
    ['difficulty', 'easy'],
  ]);

  expect(result).toEqual(expected);
});
