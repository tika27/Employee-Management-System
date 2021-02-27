DROP DATABASE IF EXISTS employeemanagementDB;

create database employeemanagementDB;

USE employeemanagementDB;

CREATE TABLE department (
  id INT auto_increment,
  name VARCHAR(30) ,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUE ("HR");

CREATE TABLE role (
  id int auto_increment,
  title VARCHAR(30),
  salary decimal (20.1),
  department_id INT,
  constraint fk_department foreign key (department_id) references department(id),
  PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("lead HR", 50000, 1);

CREATE TABLE employee (
  id int auto_increment,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  constraint fk_employee foreign key (role_id) references role(id),
  manager_id INT,
  constraint fk_manager foreign key (manager_id) references employee(id),
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, department_id)
VALUES ("Maya", "Rai", 2, 4);



SELECT * FROM role, department;
-- SELECT * FROM role;
-- SELECT * FROM employee;
