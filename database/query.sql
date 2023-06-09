CREATE DATABASE joyas;

CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria
VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);

SELECT * FROM inventario;

INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2),
(DEFAULT,'Collar Ruby', 'collar', 'plata', 18000, 3),
(DEFAULT,'Anillo Brillante', 'anillo', 'oro', 35000, 6),
(DEFAULT,'Aros Circle', 'aros', 'plata', 9000, 12),
(DEFAULT,'Collar Moonstone', 'collar', 'plata', 21000, 2),
(DEFAULT,'Anillo Luna', 'anillo', 'plata', 28000, 4),
(DEFAULT,'Aros Star', 'aros', 'oro', 15000, 9),
(DEFAULT,'Collar Ocean', 'collar', 'plata', 24000, 3),
(DEFAULT,'Anillo Elegance', 'anillo', 'oro', 32000, 5),
(DEFAULT,'Aros Hoop', 'aros', 'plata', 8000, 15),
(DEFAULT,'Collar Pearl', 'collar', 'plata', 23000, 2),
(DEFAULT,'Anillo Promise', 'anillo', 'plata', 35000, 3),
(DEFAULT,'Aros Flower', 'aros', 'oro', 12000, 6),
(DEFAULT,'Collar Sunburst', 'collar', 'plata', 27000, 4),
(DEFAULT,'Anillo Harmony', 'anillo', 'plata', 29000, 2);
