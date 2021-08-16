# HR-Management-Backend

ExpressJs + MySql + Sequelize

## Scripts

- Run app (production)

    ```sh
    yarn start
    ```

- Run app (development)

    ```sh
    yarn dev
    ```

- Seed to upload data on database

    ```sh
    yarn seed:up
    ```

- Seed to clear all data from database

    ```sh
    yarn seed:down
    ```

- Run test

    ```sh
    yarn test
    ```

## Database

- Table create

    ```sql
    CREATE TABLE `employees` (
        `id` INT(11) NOT NULL AUTO_INCREMENT,
        `firstName` VARCHAR(50) NOT NULL,
        `lastName` VARCHAR(50) NOT NULL,
        `email` VARCHAR(100) UNIQUE NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
    ```

- Insert into table

    ```sql
    INSERT INTO `employees` (`firstName`, `lastName`, `email`) VALUES 
    ('Md Arif', 'Hossain', 'devarif.me@gmail.com'),
    ('Developer', 'Khan', 'hi@devarif.me');
    ```

- Show data

    ```sql
    SELECT * FROM `employees`;
    ```

## API List

- Get all employee data — **GET** — `/api/v1/employee/get-all`
- Add one employee — **POST** — `/api/v1/employee/add`
- Add multiple employees — **POST** — `/api/v1/employee/add-multiple`

## API Documentation

[https://documenter.getpostman.com/view/10908753/Tzz8qbxb](https://documenter.getpostman.com/view/10908753/Tzz8qbxb)

## Jest testing matchers

Jest has quite a few functions used for assertions/expectations. Some common ones...

- `toBeDefined`
- `toBeGreaterThan` / `toBeLessThan`
- `toBe` (uses === to compare)
- `toEqual` (for deep object comparison)
- `toContain` (see if a value is inside of a collection)
