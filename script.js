class Task {
    constructor(task, category) {
        this.task = task;
        this.category = category;
    }
}

class DuedateTask extends Task {
    constructor(task, category, duedate) {
        super(task, category);
        this.duedate = duedate;
    }
}

