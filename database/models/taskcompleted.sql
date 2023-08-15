CREATE TABLE
    `taskcompleted` (
        `idTask` varchar(40) NOT NULL,
        `completed` varchar(4) DEFAULT NULL,
        PRIMARY KEY (`idTaskC`),
        CONSTRAINT `idTask` FOREIGN KEY (`idTaskC`) REFERENCES `task` (`idTask`)
    )