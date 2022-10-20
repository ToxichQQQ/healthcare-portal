export class ApplicationError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

export class PatientError extends ApplicationError {
  constructor(status, message) {
    super(status, message);
  }
}
export class ValidationError extends ApplicationError {
  constructor(status, message) {
    super(status, message);
  }
}
