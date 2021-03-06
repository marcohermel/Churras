﻿// <auto-generated />
using System;
using Churras.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Churras.Migrations
{
    [DbContext(typeof(dbContext))]
    partial class dbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Churras.Models.Churrasco", b =>
                {
                    b.Property<int>("ChurrascoID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Data");

                    b.Property<string>("Descricao")
                        .HasMaxLength(2000);

                    b.Property<string>("Observacao")
                        .HasMaxLength(4000);

                    b.Property<decimal?>("ValorSugeridoComBebida")
                        .HasColumnType("decimal(8,2)");

                    b.Property<decimal?>("ValorSugeridoSemBebida")
                        .HasColumnType("decimal(8,2)");

                    b.HasKey("ChurrascoID");

                    b.ToTable("Churrascos");
                });

            modelBuilder.Entity("Churras.Models.Participante", b =>
                {
                    b.Property<int>("ParticipanteID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ChurrascoID");

                    b.Property<bool>("ComBebida");

                    b.Property<string>("Email")
                        .HasMaxLength(1000);

                    b.Property<string>("Nome")
                        .HasMaxLength(200);

                    b.Property<string>("Observacao")
                        .HasMaxLength(4000);

                    b.Property<bool>("Pago");

                    b.Property<decimal?>("ValorContribuicao")
                        .HasColumnType("decimal(8,2)");

                    b.HasKey("ParticipanteID");

                    b.HasIndex("ChurrascoID");

                    b.ToTable("Participantes");
                });

            modelBuilder.Entity("Churras.Models.Participante", b =>
                {
                    b.HasOne("Churras.Models.Churrasco", "Churrasco")
                        .WithMany("Participantes")
                        .HasForeignKey("ChurrascoID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
