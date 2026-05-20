const mapUrl =
   'https://www.google.com/maps?q=Ch%C3%A1cara%20de%20Z%C3%A9%20Carlos%2C%20S%C3%ADtio%20Pocinhos%20de%20Tabira&output=embed'

export const siteConfig = {
   coupleDisplayName: 'JÉSSICA & FELIPE',
   footerCoupleName: 'Jéssica & do Felipe',
   weddingDate: '2026-10-31T11:00:00',
   mobileTopText:
      'O amor é paciente e bondoso. Não guarda rancor. Não se alegra com injustiça, mas se alegra com verdade. O amor tudo sofre, tudo crê, tudo espera e tudo suporta.',
   invitationText:
      'Com a bênção de Deus e nossos pais, convidamos você para nosso casamento.',
   partners: {
      first: {
         name: 'Jéssica',
         father: 'Girleno Atanasio Veras',
         mother: 'Maria Gorete Da Silva Atanasio',
      },
      second: {
         name: 'Felipe',
         father: '-',
         mother: 'Valdenice Timoteo Vieira Do Nascimento',
      },
   },
   ceremony: {
      location: 'Santuário Mãe Rainha',
      time: '11h',
   },
   reception: {
      location: 'Chácara de Zé Carlos, Sítio Pocinhos, Tabira - PE',
      time: 'Após a cerimônia',
   },
   map: {
      title: 'Chácara de Zé Carlos, Sítio Pocinhos de Tabira',
      url: mapUrl,
      link: mapUrl.replace('&output=embed', '').replace('?output=embed', ''),
   },
}
