import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-audio-analyzer' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const AudioAnalyzer = NativeModules.AudioAnalyzer ? NativeModules.AudioAnalyzer : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function analyzeAudio(filepath) {
  return AudioAnalyzer.analyzeAudio(filepath);
}
export * from './helpers';
//# sourceMappingURL=index.js.map