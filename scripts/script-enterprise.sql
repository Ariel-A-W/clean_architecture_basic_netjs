-- 
-- Recrear Tablas junto a los inserts
--

DROP TABLE public.clientes CASCADE;

CREATE TABLE public.clientes (
	cliente_id bigserial NOT NULL,
	cliente_uuid UUID NOT NULL, 
	cliente varchar(150) NULL,
	direccion varchar(150) NULL,
	ciudad varchar(100) NULL,
	movil varchar(255) NULL,
	email varchar(255) NULL,
    atcreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atupdated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT clientes_pk PRIMARY KEY (cliente_id)
);

INSERT INTO public.clientes 
(cliente_uuid, cliente, direccion, ciudad, movil, email)
VALUES 
('dce9318e-66b7-4d0a-a15c-6789badb7546', 'ELEMENTAL SYSTEMS SA', 'Av. Las Piedras 3451', 'Valle Viejo', '+541155776611', 'info@elementalsystems.com.ar'), 
('2d7b970c-755c-478b-9365-598658f71e70', 'WHL SRL', 'Av. San Ignacio del Ponté 2311', 'Villa Estero', '+5411451245321', 'ventas@whl.com.ar'),
('bbef9485-0b0e-43e2-8870-794ee0e83ca8', 'SERVICE MACHINE SA', 'Río de las Vueltas 112', 'Bellavista', '+54114543568522', 'contacto@servicemachine.com.ar')
;