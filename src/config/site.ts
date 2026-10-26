const mapUrl =
   'https://www.google.com/maps?q=Ch%C3%A1cara%20de%20Z%C3%A9%20Carlos%2C%20S%C3%ADtio%20Pocinhos%20de%20Tabira&output=embed'

const ceremonyUrl =
    'https://www.google.com/maps/place/7%C2%B035\'51.8%22S+37%C2%B032\'04.3%22W/@-7.5982434,-37.5359582,308m/data=!3m1!1e3!4m4!3m3!8m2!3d-7.5977154!4d-37.5345192?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D'

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
      location: 'Santuário Mãe Rainha, Tabira - PE',
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
   ceremonyMap: {
      title: 'Santuário Mãe Rainha',
      url: ceremonyUrl,
      link: ceremonyUrl
   },
}
