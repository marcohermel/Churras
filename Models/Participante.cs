using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Churras.Models
{
    public class Participante
    {
        [Key]
        public int? ParticipanteID { get; set; }
        [MaxLength(200)]
        public string Nome { get; set; }
        [Column(TypeName = "decimal(8,2)")]
        public decimal? ValorContribuicao { get; set; }
        public bool Pago { get; set; }
        public bool ComBebida { get; set; }
        [MaxLength(4000)]
        public string Observacao { get; set; }
        [MaxLength(1000)]
        public string Email { get; set; }
        public int ChurrascoID { get; set; }
    }
}
