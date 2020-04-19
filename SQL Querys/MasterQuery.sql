
USE Entreverde

----------------------------------------TABLAS--------------------------------------------------
CREATE TABLE Paciente (
  IdPaciente INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  Nombre NVARCHAR(50) NOT NULL,
  ApellidoPaterno NVARCHAR(50) NOT NULL,
  ApellidoMaterno NVARCHAR(50) NOT NULL,
  Telefono NVARCHAR(50) NOT NULL,
  FechaNacimiento DATE NOT NULL,
  FechaInscripcion DATE NOT NULL
)

CREATE TABLE FichaMedica (
  IdFichaMedica INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  IdPaciente INT NOT NULL FOREIGN KEY REFERENCES Paciente(IdPaciente),
  NombreContactoEmergencia NVARCHAR(50) NOT NULL,
  TelefonoContactoEmergencia NVARCHAR(50) NOT NULL,
  Alergias NVARCHAR(255) NOT NULL,
  Medicamentos TEXT NOT NULL,
  Enfermedades VARCHAR(255) NOT NULL,
  Observaciones TEXT NOT NULL
)

CREATE TABLE Terapeuta (
  IdTerapeuta INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  Nombre NVARCHAR(50) NOT NULL,
  ApellidoPaterno NVARCHAR(50) NOT NULL,
  ApellidoMaterno NVARCHAR(50) NOT NULL,
  FechaNacimiento DATE NOT NULL,
  FechaInscripcion DATE NOT NULL
)

CREATE TABLE Terapia (
  IdTerapia INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  IdPaciente INT NOT NULL FOREIGN KEY REFERENCES Paciente(IdPaciente),
  IdTerapeuta INT NOT NULL FOREIGN KEY REFERENCES Terapeuta(IdTerapeuta),
  FechaTerapia DATE NOT NULL,
  Ejercicios TEXT NOT NULL,
  Comportamientos TEXT NOT  NULL,
  Caballo NVARCHAR(50) NOT NULL,
  Equipo NVARCHAR(50) NOT NULL,
  Observaciones TEXT NOT NULL
)

CREATE TABLE [dbo].[HistoricoPaciente](
	[IdHistorico] [int] IDENTITY(1,1) NOT NULL,
	[IdPaciente] [int] NOT NULL,
	[CampoModificado] [nvarchar](50) NOT NULL,
	[ValoresAntNuev] [text] NOT NULL,
 CONSTRAINT [PK_HistoricoPaciente] PRIMARY KEY CLUSTERED 
(
	[IdHistorico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
----------------------------------------INSERTS-------------------------------------------------

INSERT INTO Paciente VALUES ('Pablo','Altamirano','Arce','3315181919','1990-08-10','2020-10-08')
INSERT INTO Paciente VALUES ('Regina','Madero','Martinez','3320405532','1992-10-10','2018-12-15')
INSERT INTO Paciente VALUES ('Alejandro','Lopez','Perez','3325555712','1989-05-30','2020-12-12')
INSERT INTO Paciente VALUES ('Sofia','Sahagun','Ruiz','3355762832','1989-05-24','2077-10-10')
INSERT INTO Paciente VALUES ('Pablo','Totosaus','Varela','3345674912','1988-12-25','2020-01-01')

SELECT * FROM Paciente

------------------------

INSERT INTO FichaMedica VALUES (1,'Izuku','3315161717','Ninguna','Naproxeno','Ninguna','Tiene mucha barba')
INSERT INTO FichaMedica VALUES (2,'Link','3324876545','Polvo','Ritalin','Al sol','No tiene barba')
INSERT INTO FichaMedica VALUES (3,'Zelda','3365984521','Frio','Metanfetaminas','No esta enfermo','No se le nota la barba')
INSERT INTO FichaMedica VALUES (4,'Ren','3321546785','Caliente','Aminoacidos','Gripa','Tiene bigote')
INSERT INTO FichaMedica VALUES (5,'Akira','3352618495','Agua','LSD','Coronavirus','Usa sombrero')
INSERT INTO FichaMedica VALUES (5,'Toriyama','3352618495','Agua','LSD','Coronavirus','Usa sombrero')

SELECT * FROM FichaMedica

------------------------

INSERT INTO Terapeuta VALUES ('Haruo','Yaguchi','Osaka','1995-04-20','2018-01-01')
INSERT INTO Terapeuta VALUES ('Hinata','Soyo','Tokyo','1992-03-30','2012-12-31')
INSERT INTO Terapeuta VALUES ('Sasuke','Uchiha','Konoha','1989-12-15','2015-04-30')
INSERT INTO Terapeuta VALUES ('Ryuji','Sakamoto','Shujin','1988-10-08','2014-08-10')
INSERT INTO Terapeuta VALUES ('Meiko','Honma','Anohana','1992-10-31','2000-01-01')

SELECT * FROM Terapeuta

------------------------

INSERT INTO Terapia VALUES (1,2,'2020-01-12', 'Rutina 1','Se porta bien','Epona','Equipo de Futbol','Le va padre')
INSERT INTO Terapia VALUES (1,3,'2020-02-12', 'Rutina 15','Se porta masomenos','Roach','Equipo de Baloncesto','Es bueno')
INSERT INTO Terapia VALUES (1,4,'2020-03-12', 'Rutina 2','Se porta mal','Epona','Equipo de Tenis','Le gusta mucho el tenis')
INSERT INTO Terapia VALUES (1,1,'2020-04-12', 'Rutina 3','Se porta Excelente','Tiro al Blanco','Equipo de Hockey','No tiene algunos dientes')
INSERT INTO Terapia VALUES (1,5,'2020-05-12', 'Rutina 12','Se porta raro','Spirit','Equipo de eSports','Se la pasa jugando')

INSERT INTO Terapia VALUES (1,1,'2020-02-12', 'Rutina 6','Se porta leve','Agro','Equipo de de LoL','Piensa mucho')
INSERT INTO Terapia VALUES (1,2,'2020-01-12', 'Rutina 9','Se porta asi','Chorizo','Equipo de Overwatch','Tiene buenos reflejos')
INSERT INTO Terapia VALUES (1,3,'2020-03-12', 'Rutina 10','Se porta locochon','Pegaso','Equipo de StarCraft','Teclea muy rapido')
INSERT INTO Terapia VALUES (1,3,'2020-03-12', 'Rutina 11','Se porta loco','Epona','Equipo de CSGO','Tiene muy buenos reflejos tambien')

INSERT INTO Terapia VALUES (1,4,'2020-02-12', 'Rutina 12','Se porta meh','Roach','Equipo de Valorant','Se parece a CSGO')
INSERT INTO Terapia VALUES (1,4,'2020-02-12', 'Rutina 14','Se porta bien','Tiro al Blanco','Equipo de Apex','Son rapidos')
INSERT INTO Terapia VALUES (1,2,'2020-04-12', 'Rutina 17','Se porta mal','Chorizo','Equipo de PUBG','Son muy lentos')

INSERT INTO Terapia VALUES (1,1,'2020-05-12', 'Rutina 20','Se porta leve','Spirit','Equipo de Rocket League','Tiene muy buenas mecanicas')
INSERT INTO Terapia VALUES (1,1,'2020-05-12', 'Rutina 123','Se porta masomenos','Agro','Equipo de Granblue Fantasy','Sabe los fundamentales')

INSERT INTO Terapia VALUES (1,5,'2020-01-12', 'Rutina 32','Se porta Excelente','Epona','Equipo de WoW','Se la pasa horas ahi')
INSERT INTO Terapia VALUES (1,5,'2020-01-12', 'Rutina 31','Se porta locochon','Roach','Equipo de Final XIV','Igual que el pasado')
INSERT INTO Terapia VALUES (1,3,'2020-02-12', 'Rutina 21','Se porta loco','Epona','Equipo de FLYFF','Tambien es MMO')
INSERT INTO Terapia VALUES (1,3,'2020-03-12', 'Rutina 20','Se porta bien','Pegaso','Equipo de Fortnite','Sabe construir')
INSERT INTO Terapia VALUES (1,2,'2020-04-12', 'Rutina 20','Se porta meh','Chorizo','Equipo de Wacraft','No tan rapido como starcraft')
INSERT INTO Terapia VALUES (1,1,'2020-05-12', 'Rutina 30','Se porta meh','Epona','Equipo de Heartstone','Se toman su tiemo')

SELECT * FROM Terapia

----------------------------------------FUNCIONES-----------------------------------------------

CREATE FUNCTION Nombre (@Nombre NVARCHAR(50), @Apellido1 NVARCHAR(50), @Apellido2 NVARCHAR(50))
RETURNS VARCHAR(255)
AS 
BEGIN 
DECLARE @NuevoNombre VARCHAR(255)
SELECT
@NuevoNombre = CONCAT(@Nombre, ' ', @Apellido1, ' ', @Apellido2)
RETURN @NuevoNombre
END

CREATE FUNCTION convertFecha (@fecha DATETIME)
RETURNS VARCHAR(255)
AS
BEGIN
DECLARE @nuevaFecha VARCHAR(255)
SELECT 
@nuevaFecha = FORMAT(@fecha,'dd-MMMM-yyyy' ,'es-MX')
RETURN @nuevaFecha
END

----------------------------------------VISTAS--------------------------------------------------

-- VISTA 1-----------------------------------------------

SELECT dbo.Nombre (Nombre,ApellidoPaterno,ApellidoMaterno) AS 'Paciente', Telefono,  dbo.convertFecha(FechaNacimiento) AS 'Fecha Nacimiento', dbo.convertFecha(FechaInscripcion) AS 'Fecha Inscripcion' FROM Paciente


----------------------------------------PROCEDURES----------------------------------------------

-- VISTA 2-----------------------------------------------
alter procedure busquedaXNombre (@Id int)
as
begin 
Select  dbo.Nombre(p.Nombre,p.ApellidoPaterno,p.ApellidoMaterno) as 'Paciente', p.Telefono, dbo.convertFecha( p.FechaNacimiento) as 'Fecha Nacimiento', fm.NombreContactoEmergencia, fm.TelefonoContactoEmergencia,
fm.Alergias, fm.Medicamentos, fm.Enfermedades, fm.Observaciones from FichaMedica fm
inner join Paciente p on p.IdPaciente = fm.IdPaciente
where p.IdPaciente = @Id
end

exec busquedaXNombre 2

-- VISTA 3------------------------------------------------

alter procedure terapiaXAlumno (@Id int)
as
begin
select t.IdTerapia, dbo.Nombre(ter.Nombre,ter.ApellidoPaterno, ter.ApellidoMaterno) as 'Terapeuta', dbo.convertFecha(t.FechaTerapia), t.Ejercicios, t.Comportamientos, t.Caballo, t.Equipo, t.Observaciones from Terapia t
inner join Terapeuta ter on ter.IdTerapeuta = t.IdTerapeuta
inner join Paciente p on p.IdPaciente = t.IdPaciente
where t.IdPaciente = @Id
end

exec terapiaXAlumno 2

-- VISTA 4------------------------------------------------

create procedure TerapeutaporMes (@fecha date)
as 
begin

select dbo.Nombre(ter.Nombre,ter.ApellidoPaterno,ter.ApellidoMaterno)as 'Terapeuta', COUNT(t.IdTerapeuta) as 'Sesiones Del Terapeuta', 
(Select COUNT(IdTerapia) from Terapia where MONTH(FechaTerapia) = MONTH(@fecha)) as 'Total Terapias'  from Terapia t
inner join Terapeuta ter on ter.IdTerapeuta=t.IdTerapeuta
where t.IdTerapeuta = (
 Select TOP 1 IdTerapeuta from Terapia
where Month (FechaTerapia) = MONTH(@fecha)
group by IdTerapeuta
order by Count(IdTerapeuta) desc
)
group by ter.Nombre, ter.ApellidoPaterno, ter.ApellidoMaterno
end

exec TerapeutaporMes '20200213'
-- VISTA 5------------------------------------------------

alter PROCEDURE mejorCaballo
AS
begin
SELECT TOP 1 Caballo, COUNT(Caballo) AS numeroSesiones, (SELECT COUNT(Caballo) FROM Terapia) AS totalTerapias FROM Terapia GROUP BY Caballo ORDER BY numeroSesiones DESC
end
EXEC mejorCaballo

-- VISTA 6------------------------------------------------
alter PROCEDURE mesTerapia
AS
begin
select Top 1 FORMAT(FechaTerapia, 'MMMM', 'es-MX') as Mes, 
(
	Select Count (Month(FechaTerapia)) from Terapia
	where Month(FechaTerapia) = (Select Top 1 MONTH(FechaTerapia) from Terapia)
) as NumeroTerapia, 
YEAR(FechaTerapia) as Año
from Terapia
group by FechaTerapia
order by NumeroTerapia desc
end

EXEC mesTerapia

-- VISTA 7------------------------------------------------

create PROCEDURE enfermedadComun
AS
begin 
Declare @enfermedad nvarchar(255)
Select @enfermedad = (Select top 1 CONVERT(nvarchar (255), Enfermedades) from FichaMedica)
Select top 1 Enfermedades, (Select Count(IdFichaMedica) from FichaMedica where Convert(nvarchar(255),Enfermedades) = @enfermedad) as NumeroPacientes from FichaMedica
end

exec enfermedadComun

--------TRIGGER-----------------

---IdPaciente, Nombre del Campo que se modifico, valor anterio y valor nuevo con comas


Select*From HistoricoPaciente
