---SQL PROYECTO

Create function Nombre (@Nombre nvarchar(50), @Apellido1 nvarchar(50), @Apellido2 nvarchar(50))
returns varchar(255)
as 
begin 
declare @NuevoNombre varchar(255)
Select
@NuevoNombre = CONCAT(@Nombre, ' ', @Apellido1, ' ', @Apellido2)
return @NuevoNombre
end

alter function convertFecha (@fecha datetime)
returns varchar(255)
as
begin
declare @nuevaFecha varchar(255)
Select 
@nuevaFecha = FORMAT(@fecha,'dd-MMMM-yyyy' ,'es-MX')

return @nuevaFecha
end


--1. Mostrar lista pacientes 
Create procedure MostrarPaciente
as
Select dbo.Nombre (Nombre,ApellidoPaterno,ApellidoMaterno)as 'Paciente', Telefono,  dbo.convertFecha(FechaNacimiento) as 'Fecha Nacimiento', dbo.convertFecha(FechaInscripcion) as 'Fecha Inscripcion' from Paciente



--2. Búsqueda por Nombre
alter procedure busquedaXNombre (@Id int)
as
begin 
Select  dbo.Nombre(p.Nombre,p.ApellidoPaterno,p.ApellidoMaterno) as 'Paciente', p.Telefono, dbo.convertFecha( p.FechaNacimiento) as 'Fecha Nacimiento', fm.NombreContactoEmergencia, fm.TelefonoContactoEmergencia,
fm.Alergias, fm.Medicamentos, fm.Enfermedades, fm.Observaciones from FichaMedica fm
inner join Paciente p on p.IdPaciente = fm.IdPaciente
where p.IdPaciente = @Id
end

--3. Terapias por Alumno
alter procedure terapiaXAlumno (@Id int)
as
begin
select t.IdTerapia, dbo.Nombre(ter.Nombre,ter.ApellidoPaterno, ter.ApellidoMaterno) as 'Terapeuta', dbo.convertFecha(t.FechaTerapia), t.Ejercicios, t.Comportamientos, t.Caballo, t.Equipo, t.Observaciones from Terapia t
inner join Terapeuta ter on ter.IdTerapeuta = t.IdTerapeuta
inner join Paciente p on p.IdPaciente = t.IdPaciente
where t.IdPaciente = @Id
end

--4. Terapeuta con mayor sesiones dadas por mes (Nombre de terapeuta	numero de sesion x terapeuta	total terapias en mes)
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

--5. Caballo con más terapias(nombre del Caballo	numero des sesiones	terapias totales)
alter PROCEDURE mejorCaballo
AS
begin
SELECT TOP 1 Caballo, COUNT(Caballo) AS numeroSesiones, (SELECT COUNT(Caballo) FROM Terapia) AS totalTerapias FROM Terapia GROUP BY Caballo ORDER BY numeroSesiones DESC
end
EXEC mejorCaballo

--6. Mes con mayor numero de terapias (mes	número de terapias)
ALter PROCEDURE mesTerapia
AS
SELECT TOP 1 FORMAT(FechaTerapia, 'MMMM', 'es-MX') AS mes , COUNT(MONTH(FechaTerapia)) AS numeroTerapias, YEAR(FechaTerapia) AS Año FROM Terapia GROUP BY FechaTerapia ORDER BY numeroTerapias DESC

EXEC mesTerapia

--7.Enfermdad mas común (Alumno	Equipo)



select*from Terapeuta
select*from Terapia
select*from Paciente
Select*From FichaMedica





