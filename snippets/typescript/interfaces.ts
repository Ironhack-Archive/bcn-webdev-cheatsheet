interface User {
  username: string;
  getRole(): string;
}

class Student implements User {
  private role: string = 'student';
  private id: number;
  username: string;
  course: string;

  constructor(id: number, username: string) { // this code can be more compact, see next snippet
    this.username = username;
  }

  getRole(): string {
    return this.role;
  }

  setCourse(course: string): void {
    this.course = course;
  }
}

// example class with automatic public/private fields declared in constructor

class Teacher implements User {
  private role: string = 'teacher';
  course: string;

  constructor(private id: number, public username: string) { }

  getRole(): string {
    return this.role;
  }

  // ... etc
}