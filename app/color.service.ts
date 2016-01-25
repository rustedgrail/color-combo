import {COLORS} from './mock-colors';
import {Injectable} from 'angular2/core';

@Injectable()
export class ColorService {
  getColors() {
    return Promise.resolve(COLORS);
  }
}
