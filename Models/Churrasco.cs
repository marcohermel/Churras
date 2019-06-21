using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Churras.Models
{
    public class Churrasco
    {
        [Key]
        public int? ChurrascoID { get; set; }
        public DateTime Data { get; set; }
        [MaxLength(2000)]
        public string Descricao { get; set; }
        [MaxLength(4000)]
        public string Observacao { get; set; }
        [Column(TypeName = "decimal(8,2)")]
        public decimal? ValorSugeridoComBebida { get; set; }
        [Column(TypeName = "decimal(8,2)")]
        public decimal? ValorSugeridoSemBebida { get; set; }
        public virtual ICollection<Participante> Participantes { get; set; }
    }
}
