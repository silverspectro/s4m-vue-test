export class StringHelper {
  static latinize(string = '') {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
