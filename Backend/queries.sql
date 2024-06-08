CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    correo TEXT,
    password TEXT
);

INSERT INTO usuarios (nombre, correo, password) 
VALUES
('Carolina', 'carolina@gmail.com', '12234C'),
('Salome', 'salome@gamil.com', '1234'),
('Cristian', 'cristian@gmail.com', '123456');


CREATE TABLE cars (
    nombre VARCHAR(255),
    marca VARCHAR(100),
    combustible VARCHAR(50),
    transmision VARCHAR(50),
    carroceria VARCHAR(50),
    modelo INT,
    precio_por_dia INT,
    imagen VARCHAR(255)
);


INSERT INTO cars (nombre, marca, combustible, transmision, carroceria, modelo, precio_por_dia, imagen) VALUES
('Clase A 250e Progressive Line Advanced 8G-DCT', 'Mercedes-Benz', 'Híbrido', 'Automática', 'Sedán', 2020, 450000, 'https://www.dropbox.com/scl/fi/6w50bugou77vf9flbubev/Clase-A-250e-Progressive-Line-Advanced-8G-DCT-4.png?rlkey=esjqccu73dewrgjnfexcfawa2&st=uoylmj80&raw=1'),
('Clase GLA 45 S AMG 4Matic 8G-DCT', 'Mercedes-Benz', 'Gasolina', 'Automática', 'SUV', 2016, 600000, 'https://www.dropbox.com/scl/fi/495zqu5tgw8hw52j5h3ct/Clase-GLA-45-S-AMG-4Matic-8G-DCT-5.png?rlkey=spbk8rmjsbm02fui48wgtsryf&st=fndaihwg&raw=1'),
('Clase GLB 200 7G-DCT', 'Mercedes-Benz', 'Gasolina', 'Automática', 'SUV', 2021, 500000, 'https://www.dropbox.com/scl/fi/cjgn7dr0ydutngdnmqfgd/Clase-GLB-200-7G-DCT-5.png?rlkey=w0uwzyw3e3jln2j8walm60qjd&st=g07f56is&raw=1'),
('MERCEDES-BENZ EQB 350 4Matic', 'Mercedes-Benz', 'Eléctrico', 'Automática', 'SUV', 2022, 700000, 'https://www.dropbox.com/scl/fi/1pxg7g4jgqyaodfg1eyzk/MERCEDES-BENZ-EQB-350-4Matic-5.png?rlkey=qwjgxmf89dvhbuku3gncprm4n&st=radbejox&raw=1'),
('EQE AMG 53 4Matic Edition', 'Mercedes-Benz', 'Eléctrico', 'Automática', 'Sedán', 2019, 800000, 'https://www.dropbox.com/scl/fi/m5ovc0hupn042ltw8v7v1/EQE-AMG-53-4Matic-Edition-4-Puertas.png?rlkey=ymog40idwivax40n24p89pmec&st=gk51r2w2&raw=1'),
('BMW X7 2024', 'BMW', 'Híbrido', 'Automática', 'SUV', 2024, 900000, 'https://www.dropbox.com/scl/fi/3g0znb6uq2mzhfh8jinr7/BMW-X7-2024.png?rlkey=c0kcjvdqdnglibqwpwj0q9uvh&st=2qzoz05y&raw=1'),
('BMW X6 2024', 'BMW', 'Híbrido', 'Automática', 'SUV', 2024, 850000, 'https://www.dropbox.com/scl/fi/gzflm8jzo7joy06cwf6m3/BMW-X6-2024.png?rlkey=x3f1puu28hf7inf9wwongi57k&st=cm4n7cfg&raw=1'),
('BMW X3 2024', 'BMW', 'Eléctrico', 'Automática', 'SUV', 2024, 750000, 'https://www.dropbox.com/scl/fi/mfy0uwx8rcgi7yhxbe9rk/BMW-X3-2024.png?rlkey=1lmprv7ln9wsttlpk0c63jszq&st=4akvs4u1&raw=1'),
('BMW i5 2024', 'BMW', 'Eléctrico', 'Automática', 'Sedán', 2024, 800000, 'https://www.dropbox.com/scl/fi/ni24tehs72m6p2fdq9ah4/BMW-i5-2024.png?rlkey=ys9suw28dckaim7zqjhd77i5l&st=mard00r9&raw=1'),
('BMW M440i Convertible', 'BMW', 'Gasolina', 'Automática', 'Sedán', 2022, 700000, 'https://www.dropbox.com/scl/fi/0b19acewv44kojfdjin9j/BMW-M440i-Convertible.png?rlkey=mpki5ym1xvecxc0qszu3ud2lv&st=l5p8g2sx&raw=1'),
('Mazda Sedan 2', 'Mazda', 'Gasolina', 'Manual', 'Sedán', 2012, 150000, 'https://www.dropbox.com/scl/fi/cs38vpp5616pfbvste29p/Mazda-Sedan-2.png?rlkey=dhsbjnfsicvn98u5d0uryz24g&st=q8lukrrn&raw=1'),
('Mazda CX-90 Híbrida', 'Mazda', 'Híbrido', 'Automática', 'SUV', 2024, 700000, 'https://www.dropbox.com/scl/fi/pozuf8c6mbxdsf582tn4g/Mazda-CX-90-h-brida.png?rlkey=d9754r237weg3ijkrhaiar8wd&st=uw8nadrc&raw=1'),
('Mazda MX-30 Eléctrico', 'Mazda', 'Eléctrico', 'Automática', 'SUV', 2024, 650000, 'https://www.dropbox.com/scl/fi/v96yjmxc0f65ala4d72o0/Mazda-MX-30-el-ctrico.png?rlkey=in87urz4qwlatxunmg9so39ik&st=pdfj5ag1&raw=1'),
('Mazda 3 2.0 Touring', 'Mazda', 'Gasolina', 'Manual', 'Sedán', 2017, 200000, 'https://www.dropbox.com/scl/fi/6vif0v8rxiga1yb0xz05p/Mazda-Mazda-3-2.0-Touring.png?rlkey=5iafqdp1elrz6e3h7ntlutj76&st=6o8lbajr&raw=1'),
('Mazda CX-30 Touring Mecánica', 'Mazda', 'Gasolina', 'Manual', 'SUV', 2019, 250000, 'https://www.dropbox.com/scl/fi/ti014i92eft3o3gwue3ht/Mazda-CX-30-Touring-Mec-nica.png?rlkey=6q1bwnhctvms9ecmnckgfrxz9&st=66z49916&raw=1'),
('Nissan Qashqai 2.0 Sense 140 hp', 'Nissan', 'Gasolina', 'Manual', 'SUV', 2024, 350000, 'https://www.dropbox.com/scl/fi/s4ckxphvhgej96t39zqnx/Nissan-Qashqai-2.0-Sense-140-hp.png?rlkey=mszqoastw6i2x3auy37cdb2yl&st=8cpj1tnx&raw=1'),
('Nissan Versa 1.6 Exclusive', 'Nissan', 'Gasolina', 'Automática', 'Sedán', 2022, 250000, 'https://www.dropbox.com/scl/fi/5rn8lxyf8xo5l4n511ztm/Nissan-Versa-1.6-Exclusive.png?rlkey=mg35ti7n7z6vzbc6i6p1s3aqm&st=272x9o5f&raw=1'),
('Nissan Patrol', 'Nissan', 'Gasolina', 'Automática', 'SUV', 2019, 400000, 'https://www.dropbox.com/scl/fi/i9gbkynuhhmhyidsuvhg8/NISSAN-PATROL.png?rlkey=dsanmzty703gkl1fjttj7k2j8&st=d0uytj9o&raw=1'),
('Nissan Tiida 1.8 Miio', 'Nissan', 'Gasolina', 'Manual', 'Sedán', 2013, 150000, 'https://www.dropbox.com/scl/fi/mz0cxo97v1d5qc40rfy0g/nissan-tiida-2008-732x488.png?rlkey=w0kq2m17rimq1edld66rw7lc9&st=hdv3p5dq&raw=1'),
('Nissan Murano Exclusive', 'Nissan', 'Gasolina', 'Automática', 'SUV', 2018, 350000, 'https://www.dropbox.com/scl/fi/4owgtjvn6ilwvf37uzdux/NISSAN-MURANO-EXCLUSIVE.png?rlkey=03bzt3qyxwijgd66b44fff19l&st=f0een0od&raw=1'),
('Audi Q5 45 TFSI MHEV quattro S line', 'Audi', 'Híbrido', 'Automática', 'SUV', 2024, 700000, 'https://www.dropbox.com/scl/fi/7c64e689nzr6whghun5z5/Audi-Q5-45-TFSI-MHEV-quattro-S-line.png?rlkey=158qbnvmc51vhmxeoslr3bmnv&st=e8wagzjb&raw=1'),
('Audi A4 40 TFSI Prestige Black', 'Audi', 'Gasolina', 'Automática', 'Sedán', 2014, 250000, 'https://www.dropbox.com/scl/fi/u2xsbqywsacxf7eehzjz3/Audi-A4-40-TFSI-Prestige-Black.png?rlkey=xgv7b8m5nz8lztl5o1qp0fqi2&st=3zm4za36&raw=1'),
('Audi Q5 TFSI quattro Advanced Híbrido', 'Audi', 'Híbrido', 'Automática', 'SUV', 2021, 650000, 'https://www.dropbox.com/scl/fi/7c64e689nzr6whghun5z5/Audi-Q5-45-TFSI-MHEV-quattro-S-line.png?rlkey=158qbnvmc51vhmxeoslr3bmnv&st=ym7hz4wm&raw=1'),
('Audi E-tron Advanced', 'Audi', 'Eléctrico', 'Automática', 'SUV', 2022, 800000, 'https://www.dropbox.com/scl/fi/aqdy0vr06871en2200h05/Audi-E-tron-Advanced.png?rlkey=1xowvpaed3nadd2dage5ewfi6&st=8f5ksssf&raw=1'),
('Audi A3 1.2 Turbo', 'Audi', 'Gasolina', 'Manual', 'Sedán', 2015, 200000, 'https://www.dropbox.com/scl/fi/ke6g37igs14602h1er34i/Audi-A3-Sportback-2014.png?rlkey=ad993vlxizqll0xjxm5ibticg&st=3uh3r6zo&raw=1');


CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    precio_total DECIMAL(10, 2)
);
