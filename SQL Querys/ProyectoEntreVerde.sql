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
create procedure terapiaXAlumno (@texto nvarchar(255))
as
begin
select t.IdTerapia, dbo.Nombre(ter.Nombre,ter.ApellidoPaterno, ter.ApellidoMaterno) as 'Terapeuta', dbo.convertFecha(t.FechaTerapia), t.Ejercicios, t.Comportamientos, t.Caballo, t.Equipo, t.Observaciones from Terapia t
inner join Terapeuta ter on ter.IdTerapeuta = t.IdTerapeuta
inner join Paciente p on p.IdPaciente = t.IdPaciente
where p.Nombre like '%' + @texto +'%' or p.ApellidoPaterno like '%' + @texto +'%' or p.ApellidoMaterno like '%' + @texto +'%'
end

--4. Terapeuta con mayor sesiones dadas por mes (Nombre de terapeuta	numero de sesion x terapeuta	total terapias en mes)
select dbo.Nombre(ter.Nombre,ter.ApellidoPaterno,ter.ApellidoMaterno) as 'Terapeuta',  from Terapia t
inner join Terapeuta ter on ter.IdTerapeuta=t.IdTerapeuta

--5. Caballo con más terapias(nombre del Caballo	numero des sesiones	terapias totales)

--6. Mes con mayor numero de terapias (mes	número de terapias)

--7.Enfermdad mas común (Alumno	Equipo)



select*from Terapeuta
select*from Terapia¿