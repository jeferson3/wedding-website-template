const env = import.meta.env
const mapUrl =
   env.VITE_MAP_URL ||
   'https://www.google.com/maps?q=Ch%C3%A1cara%20de%20Z%C3%A9%20Carlos%2C%20S%C3%ADtio%20Pocinhos%20de%20Tabira&output=embed'

export const siteConfig = {
   coupleDisplayName: env.VITE_COUPLE_DISPLAY_NAME || 'ROSA & EDUARDO',
   footerCoupleName: env.VITE_FOOTER_COUPLE_NAME || 'Rosa & do Eduardo',
   weddingDate: env.VITE_WEDDING_DATE || '2026-10-31T11:00:00',
   mobileTopText:
      env.VITE_MOBILE_TOP_TEXT ||
      'O amor é paciente e bondoso. Não guarda rancor. Não se alegra com injustiça, mas se alegra com verdade. O amor tudo sofre, tudo crê, tudo espera e tudo suporta.',
   invitationText:
      env.VITE_INVITATION_TEXT ||
      'Com a bênção de Deus e nossos pais, convidamos você para nosso casamento.',
   partners: {
      first: {
         name: env.VITE_PARTNER_ONE_NAME || 'Jéssica',
         father: env.VITE_PARTNER_ONE_FATHER || 'Pai da Jéssica',
         mother: env.VITE_PARTNER_ONE_MOTHER || 'Mãe da Jéssica',
      },
      second: {
         name: env.VITE_PARTNER_TWO_NAME || '-',
         father: env.VITE_PARTNER_TWO_FATHER || '-',
         mother: env.VITE_PARTNER_TWO_MOTHER || '-',
      },
   },
   ceremony: {
      location: env.VITE_CEREMONY_LOCATION || 'Santuário Mãe Rainha',
      time: env.VITE_CEREMONY_TIME || '11h',
   },
   reception: {
      location:
         env.VITE_RECEPTION_LOCATION ||
         'Chácara de Zé Carlos, Sítio Pocinhos, Tabira - PE',
      time: env.VITE_RECEPTION_TIME || 'Após a cerimônia',
   },
   map: {
      title:
         env.VITE_MAP_TITLE || 'Chácara de Zé Carlos, Sítio Pocinhos de Tabira',
      url: mapUrl,
      link: mapUrl.replace('&output=embed', '').replace('?output=embed', ''),
   },
}
