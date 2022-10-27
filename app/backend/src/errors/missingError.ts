export default class missingError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}
