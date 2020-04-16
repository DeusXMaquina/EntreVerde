USE [EntreVerde]
GO

/****** Object:  Table [dbo].[Paciente]    Script Date: 16-Apr-20 4:21:07 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Paciente](
	[IdPaciente] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[ApellidoPaterno] [nvarchar](50) NOT NULL,
	[ApellidoMaterno] [nvarchar](50) NOT NULL,
	[Telefono] [nvarchar](10) NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
	[FechaInscripcion] [date] NOT NULL,
 CONSTRAINT [PK_Paciente] PRIMARY KEY CLUSTERED 
(
	[IdPaciente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[FichaMedica](
	[IdFichaMedica] [int] IDENTITY(1,1) NOT NULL,
	[IdPaciente] [int] NOT NULL,
	[NombreContactoEmergencia] [nvarchar](50) NOT NULL,
	[TelefonoContactoEmergencia] [nvarchar](10) NOT NULL,
	[Alergias] [nvarchar](255) NOT NULL,
	[Medicamentos] [text] NOT NULL,
	[Enfermedades] [text] NOT NULL,
	[Observaciones] [text] NOT NULL,
 CONSTRAINT [PK_FichaMedica] PRIMARY KEY CLUSTERED 
(
	[IdFichaMedica] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[FichaMedica]  WITH CHECK ADD  CONSTRAINT [FK_FichaMedica_Paciente2] FOREIGN KEY([IdPaciente])
REFERENCES [dbo].[Paciente] ([IdPaciente])
GO

ALTER TABLE [dbo].[FichaMedica] CHECK CONSTRAINT [FK_FichaMedica_Paciente2]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Terapeuta](
	[IdTerapeuta] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NOT NULL,
	[ApellidoPaterno] [nvarchar](50) NOT NULL,
	[ApellidoMaterno] [nvarchar](50) NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
	[FechaInscripcion] [date] NOT NULL,
 CONSTRAINT [PK_Terapeuta] PRIMARY KEY CLUSTERED 
(
	[IdTerapeuta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Terapia](
	[IdTerapia] [int] NOT NULL,
	[IdPaciente] [int] IDENTITY(1,1) NOT NULL,
	[IdTerapeuta] [int] NOT NULL,
	[FechaTerapia] [date] NOT NULL,
	[Ejercicios] [text] NOT NULL,
	[Comportamientos] [text] NOT NULL,
	[Caballo] [nvarchar](50) NOT NULL,
	[Equipo] [nvarchar](50) NOT NULL,
	[Observaciones] [text] NOT NULL,
 CONSTRAINT [PK_Terapia] PRIMARY KEY CLUSTERED 
(
	[IdTerapia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Terapia]  WITH CHECK ADD  CONSTRAINT [FK_Terapia_Paciente] FOREIGN KEY([IdPaciente])
REFERENCES [dbo].[Paciente] ([IdPaciente])
GO

ALTER TABLE [dbo].[Terapia] CHECK CONSTRAINT [FK_Terapia_Paciente]
GO

ALTER TABLE [dbo].[Terapia]  WITH CHECK ADD  CONSTRAINT [FK_Terapia_Terapeuta] FOREIGN KEY([IdTerapeuta])
REFERENCES [dbo].[Terapeuta] ([IdTerapeuta])
GO