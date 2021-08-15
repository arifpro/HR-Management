# HR-Management-Backend

## table

<!-- table create (firstName, lastName, email) -->
```sql
CREATE TABLE `employees` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) UNIQUE NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
```

<!-- insert on table employees (firstName, lastName, email) -->
```sql
INSERT INTO `employees` (`firstName`, `lastName`, `email`) VALUES 
('Md Arif', 'Hossain', 'devarif.me@gmail.com'),
('Developer', 'Khan', 'hi@devarif.me');
```

<!-- show data from employees table -->
```sql
SELECT * FROM `employees`;
```

## API

- **GET:** `/api/v1/employee/get-all`
- **POST:** `/api/v1/employee/add`
- **POST:** `/api/v1/employee/add-multiple`

## API Documentation

[https://documenter.getpostman.com/view/10908753/Tzz8qbxb](https://documenter.getpostman.com/view/10908753/Tzz8qbxb)
