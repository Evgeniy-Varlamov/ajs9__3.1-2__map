export default class ErrorRepository {
  constructor() {
    this.arrErrors = new Map();
    this.arrErrors.set(404, 'Not Found');
    this.arrErrors.set(500, 'Internal Server Error');
  }

  translate(code) {
    if (this.arrErrors.has(code)) {
      return this.arrErrors.get(code);
    }
    return 'Unknown error';
  }
}
