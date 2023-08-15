CREATE TABLE
    `task` (
        `idTask` varchar(40) NOT NULL,
        `nameTask` mediumtext NOT NULL,
        `date` date DEFAULT NULL,
        PRIMARY KEY (`idTask`)
    )