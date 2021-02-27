USE employeemanagementDB;


INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("Marking");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("lead HR", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Marketing", 60000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 55000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Marketing", 70000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maya", "Rai", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Arbaz", "Tarar", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Laxmi", "Adhikari", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sita", "Bhandari", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ebese", "Brown", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Yadap", "Khatri", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Govin", "Gurung", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Deu", "Kefley", 5, 2);