export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];

    if (typeof this._name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof this._length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(this._students)) {
      throw new Error('Students must be an array');
    }
    this.validateStudents();
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an array');
    }
    this._students = newStudents;
    this.validateStudents();
  }

  validateStudents() {
    if (!this._students.every((student) => typeof student === 'string')) {
      throw new Error('Each student must be a string');
    }
  }
}
