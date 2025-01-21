-- 
-- Recrear Tablas junto a los inserts
--

DROP TABLE public.clientes CASCADE;

CREATE TABLE public.clientes (
	cliente_id SERIAL PRIMARY KEY,
	cliente_uuid uuid NOT NULL,
	cliente varchar(150) NULL,
	direccion varchar(150) NULL,
	ciudad varchar(100) NULL,
	movil varchar(255) NULL,
	email varchar(255) NULL,
	atcreated timestamp DEFAULT 'now'::text::timestamp without time zone NOT NULL,
	atupdated timestamp DEFAULT 'now'::text::timestamp without time zone NOT NULL
);

INSERT INTO public.clientes
(cliente_id, cliente_uuid, cliente, direccion, ciudad, movil, email, atcreated, atupdated)
VALUES(1, 'dce9318e-66b7-4d0a-a15c-6789badb7546'::uuid, 'ELEMENTAL SYSTEMS SA', 'Av. Las Piedras 3451', 'Valle Viejo', '+541155776611', 'info@elementalsystems.com.ar', '2025-01-18 18:37:41.833', '2025-01-18 18:37:41.833');
INSERT INTO public.clientes
(cliente_id, cliente_uuid, cliente, direccion, ciudad, movil, email, atcreated, atupdated)
VALUES(2, '2d7b970c-755c-478b-9365-598658f71e70'::uuid, 'WHL SRL', 'Av. San Ignacio del Ponté 2311', 'Villa Estero', '+5411451245321', 'ventas@whl.com.ar', '2025-01-18 18:37:41.833', '2025-01-18 18:37:41.833');
INSERT INTO public.clientes
(cliente_id, cliente_uuid, cliente, direccion, ciudad, movil, email, atcreated, atupdated)
VALUES(3, 'bbef9485-0b0e-43e2-8870-794ee0e83ca8'::uuid, 'SERVICE MACHINE SA', 'Río de las Vueltas 112', 'Bellavista', '+54114543568522', 'contacto@servicemachine.com.ar', '2025-01-18 18:37:41.833', '2025-01-18 18:37:41.833');