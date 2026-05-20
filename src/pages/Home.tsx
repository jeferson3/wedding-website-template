import { Icon } from '@iconify/react'
import { useEffect, useMemo, useState } from 'react'
import { siteConfig } from '../config/site.ts'

const weddingDate = new Date(siteConfig.weddingDate)
const giftTypes = [
   'Todos',
   'Casa',
   'Lua de mel',
   'Experiências',
   'Cotas',
] as const
const pixKey = 'jessica_top2010@hotmail.com'
const gifts = [
   {
      id: 1,
      name: 'Jantar romântico',
      type: 'Experiências',
      price: 'R$ 280,00',
      pixKey,
      description:
         'Uma contribuição para um jantar especial dos noivos durante a viagem de lua de mel.',
   },
   {
      id: 2,
      name: 'Cota da lua de mel',
      type: 'Lua de mel',
      price: 'R$ 500,00',
      pixKey,
      description:
         'Ajude os noivos a aproveitarem alguns dias de descanso depois da celebração.',
   },
   {
      id: 3,
      name: 'Kit cama e banho',
      type: 'Casa',
      price: 'R$ 350,00',
      pixKey,
      description:
         'Um presente para deixar a nova casa mais confortável e acolhedora.',
   },
   {
      id: 4,
      name: 'Café da manhã especial',
      type: 'Experiências',
      price: 'R$ 180,00',
      pixKey,
      description:
         'Uma surpresa para começar um dos dias da viagem com calma e carinho.',
   },
   {
      id: 5,
      name: 'Utensílios de cozinha',
      type: 'Casa',
      price: 'R$ 240,00',
      pixKey,
      description: 'Itens úteis para a rotina da cozinha dos noivos.',
   },
   {
      id: 6,
      name: 'Cota livre',
      type: 'Cotas',
      price: 'R$ 100,00',
      pixKey,
      description: 'Uma cota simbólica para contribuir com os planos do casal.',
   },
]

const getCountdown = () => {
   const remainingTime = Math.max(weddingDate.getTime() - Date.now(), 0)
   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
   const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
   const minutes = Math.floor((remainingTime / (1000 * 60)) % 60)
   const seconds = Math.floor((remainingTime / 1000) % 60)

   return { days, hours, minutes, seconds }
}

const mobileWeddingWeekday = new Intl.DateTimeFormat('pt-BR', {
   weekday: 'long',
}).format(weddingDate)
const mobileWeddingDate = new Intl.DateTimeFormat('pt-BR', {
   day: '2-digit',
   month: 'long',
   year: 'numeric',
}).format(weddingDate)

const Countdown = () => {
   const [countdown, setCountdown] = useState(getCountdown)
   const items = useMemo(
      () => [
         { label: 'Dias', value: countdown.days },
         { label: 'Horas', value: countdown.hours },
         { label: 'Minutos', value: countdown.minutes },
         { label: 'Segundos', value: countdown.seconds },
      ],
      [countdown],
   )

   useEffect(() => {
      const interval = window.setInterval(() => {
         setCountdown(getCountdown())
      }, 1000)

      return () => window.clearInterval(interval)
   }, [])

   return (
      <div
         className="countdown"
         aria-label="Contagem regressiva para o casamento"
      >
         {items.map((item) => (
            <div className="countdown__item" key={item.label}>
               <strong>{String(item.value).padStart(2, '0')}</strong>
               <span>{item.label}</span>
            </div>
         ))}
      </div>
   )
}

type MobileModal = 'ceremony' | 'reception' | 'site' | null
type MobileModalContent = {
   icon: string
   title: string
   body: string
   link?: string
   linkIcon?: string
   linkLabel?: string
}

const MobileInvite = () => {
   const [activeModal, setActiveModal] = useState<MobileModal>(null)
   const [showGiftsPage, setShowGiftsPage] = useState(false)
   const [selectedMobileGift, setSelectedMobileGift] = useState<
      (typeof gifts)[number] | null
   >(null)
   const [copiedPixKey, setCopiedPixKey] = useState(false)
   const siteUrl = window.location.origin
   const mobileModalContent: Record<
      Exclude<MobileModal, null>,
      MobileModalContent
   > = {
      ceremony: {
         icon: 'fa6-solid:church',
         title: 'Cerimônia',
         body: `${siteConfig.ceremony.location} • ${siteConfig.ceremony.time}`,
      },
      reception: {
         icon: 'fa6-solid:location-dot',
         title: 'Recepção',
         body: siteConfig.reception.location,
         link: siteConfig.map.link,
         linkLabel: 'Abrir no Maps',
      },
      site: {
         icon: 'fa6-solid:desktop',
         title: 'Nosso site',
         body: 'Acesse por um computador para ver a experiência completa.',
         link: siteUrl,
         linkIcon: 'fa6-solid:arrow-up-right-from-square',
         linkLabel: siteUrl.replace(/^https?:\/\//, ''),
      },
   }
   const menuItems = [
      {
         label: 'Cerimônia',
         icon: 'fa6-solid:church',
         action: () => setActiveModal('ceremony'),
      },
      {
         label: 'Recepção',
         icon: 'fa6-solid:location-dot',
         action: () => setActiveModal('reception'),
      },
      {
         label: 'Presença',
         icon: 'fa6-solid:user-check',
         action: () => {
            window.open(
               `https://api.whatsapp.com/send?text=${encodeURIComponent(
                  'Olá Jéssica, confirmo a minha presença no seu casamento',
               )}`,
               '_blank',
               'noopener,noreferrer',
            )
         },
      },
      {
         label: 'Nosso site',
         icon: 'fa6-solid:globe',
         action: () => setActiveModal('site'),
      },
      {
         label: 'Presentes',
         icon: 'fa6-solid:gift',
         action: () => setShowGiftsPage(true),
      },
   ]
   const activeModalData = activeModal ? mobileModalContent[activeModal] : null
   const copyPixKey = (pixKey: string) => {
      navigator.clipboard.writeText(pixKey).then(() => {
         setCopiedPixKey(true)
         window.setTimeout(() => setCopiedPixKey(false), 1600)
      })
   }

   if (showGiftsPage) {
      return (
         <section className="mobile-gifts-page" aria-label="Lista de presentes">
            <img
               className="mobile-gifts-page__decor mobile-gifts-page__decor--top"
               src="/assets/mobile/decoracao.png"
               alt=""
            />
            <div className="mobile-gifts-page__header">
               <button type="button" onClick={() => setShowGiftsPage(false)}>
                  <Icon icon="fa6-solid:chevron-left" aria-hidden="true" />
                  Voltar
               </button>
               <h1>Lista de presentes</h1>
               <p>Escolha um presente ou uma cota simbólica para os noivos.</p>
            </div>

            <div className="mobile-gifts-page__list">
               {gifts.map((gift) => (
                  <button
                     key={gift.id}
                     className="mobile-gift-card"
                     type="button"
                     onClick={() => {
                        setCopiedPixKey(false)
                        setSelectedMobileGift(gift)
                     }}
                  >
                     <span>
                        <Icon icon="fa6-solid:gift" aria-hidden="true" />
                     </span>
                     <div>
                        <small>{gift.type}</small>
                        <strong>{gift.name}</strong>
                        <em>{gift.price}</em>
                     </div>
                  </button>
               ))}
            </div>

            <img
               className="mobile-gifts-page__decor mobile-gifts-page__decor--bottom"
               src="/assets/mobile/decoracao.png"
               alt=""
            />

            {selectedMobileGift && (
               <div
                  className="mobile-action-modal"
                  role="dialog"
                  aria-modal="true"
               >
                  <button
                     className="mobile-action-modal__overlay"
                     type="button"
                     aria-label="Fechar modal"
                     onClick={() => setSelectedMobileGift(null)}
                  />
                  <div className="mobile-action-modal__content">
                     <button
                        className="mobile-action-modal__close"
                        type="button"
                        aria-label="Fechar modal"
                        onClick={() => setSelectedMobileGift(null)}
                     >
                        ×
                     </button>
                     <Icon icon="fa6-solid:gift" aria-hidden="true" />
                     <small>{selectedMobileGift.type}</small>
                     <h2>{selectedMobileGift.name}</h2>
                     <p>{selectedMobileGift.description}</p>
                     <strong>{selectedMobileGift.price}</strong>
                     <div className="mobile-action-modal__pix">
                        <span>Chave Pix</span>
                        <div>
                           <p style={{ fontSize: '13px' }}>
                              {selectedMobileGift.pixKey}
                           </p>
                           <button
                              type="button"
                              onClick={() =>
                                 copyPixKey(selectedMobileGift.pixKey)
                              }
                           >
                              <Icon icon="fa6-solid:copy" aria-hidden="true" />
                              {copiedPixKey ? 'Copiado' : 'Copiar'}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </section>
      )
   }

   return (
      <section className="mobile-invite" aria-label="Convite de casamento">
         <div className="mobile-invite__container mobile-invite__container--intro">
            <img
               className="mobile-invite__decor mobile-invite__decor--top"
               src="/assets/mobile/decoracao.png"
               alt=""
            />

            <div className="mobile-invite__top">
               <p className="text-uppercase">{siteConfig.mobileTopText}</p>
            </div>

            <div style={{ marginTop: '20px' }}>
               <img
                  className="mobile-invite__brand"
                  src="/assets/mobile/imagem_sem_fundo.png"
                  alt={siteConfig.coupleDisplayName}
               />
            </div>

            <p className="mobile-invite__message">
               {siteConfig.invitationText}
            </p>

            <div
               className="mobile-invite__parents"
               style={{ marginTop: '20px' }}
            >
               <div>
                  <span>{siteConfig.partners.first.father}</span>
                  <span>{siteConfig.partners.first.mother}</span>
               </div>
               <div>
                  <span>{siteConfig.partners.second.father}</span>
                  <span>{siteConfig.partners.second.mother}</span>
               </div>
            </div>
         </div>

         <div className="mobile-invite__container mobile-invite__container--details">
            <div className="mobile-invite__date" id="mobile-date">
               <span>{mobileWeddingWeekday}</span>
               <strong>{mobileWeddingDate}</strong>
            </div>

            <div className="mobile-invite__locations">
               <p>
                  {siteConfig.ceremony.location} • {siteConfig.ceremony.time}
               </p>
               <p>{siteConfig.reception.location}</p>
            </div>

            <div className="mobile-invite__countdown">
               <img
                  className="mobile-invite__middle mobile-invite__middle--left"
                  src="/assets/mobile/middle.png"
                  alt=""
               />
               <img
                  className="mobile-invite__middle mobile-invite__middle--right"
                  src="/assets/mobile/middle.png"
                  alt=""
               />
               <p>
                  <small
                     className="text-uppercase"
                     style={{ fontSize: '10px' }}
                  >
                     Contagem regressiva
                  </small>
               </p>
               <Countdown />
            </div>

            <div className="">
               <p style={{ margin: '0 0 50px 0' }}>
                  <small
                     className="text-uppercase"
                     style={{ fontSize: '10px' }}
                  >
                     Clique para interagir
                  </small>
               </p>
               <nav
                  className="mobile-invite__menu"
                  style={{ margin: '0 auto' }}
                  aria-label="Menu do convite"
               >
                  {menuItems.map((item, index) => (
                     <button
                        key={item.label}
                        type="button"
                        onClick={item.action}
                     >
                        <svg
                           className="mobile-invite__menu-label"
                           viewBox="0 0 120 120"
                           aria-hidden="true"
                        >
                           <path
                              id={`mobile-menu-arc-${index}`}
                              d="M 15 60 A 40 40 0 0 1 105 60"
                           />
                           <text>
                              <textPath
                                 href={`#mobile-menu-arc-${index}`}
                                 startOffset="50%"
                              >
                                 {item.label}
                              </textPath>
                           </text>
                        </svg>
                        <Icon icon={item.icon} aria-hidden="true" />
                     </button>
                  ))}
               </nav>
            </div>

            <img
               className="mobile-invite__decor mobile-invite__decor--bottom-left"
               src="/assets/mobile/bottom.png"
               alt=""
            />
            <img
               className="mobile-invite__decor mobile-invite__decor--bottom-right"
               src="/assets/mobile/bottom.png"
               alt=""
            />
         </div>

         {activeModalData && (
            <div
               className="mobile-action-modal"
               role="dialog"
               aria-modal="true"
            >
               <button
                  className="mobile-action-modal__overlay"
                  type="button"
                  aria-label="Fechar modal"
                  onClick={() => setActiveModal(null)}
               />
               <div className="mobile-action-modal__content">
                  <button
                     className="mobile-action-modal__close"
                     type="button"
                     aria-label="Fechar modal"
                     onClick={() => setActiveModal(null)}
                  >
                     ×
                  </button>
                  <Icon icon={activeModalData.icon} aria-hidden="true" />
                  <h2>{activeModalData.title}</h2>
                  <p>{activeModalData.body}</p>
                  {activeModalData.link && activeModalData.linkLabel && (
                     <a
                        className="mobile-action-modal__link"
                        href={activeModalData.link}
                        target="_blank"
                        rel="noreferrer"
                     >
                        {activeModalData.linkIcon && (
                           <Icon
                              icon={activeModalData.linkIcon}
                              aria-hidden="true"
                           />
                        )}
                        {activeModalData.linkLabel}
                     </a>
                  )}
               </div>
            </div>
         )}
      </section>
   )
}

export const HomePage = () => {
   const [selectedGift, setSelectedGift] = useState<
      (typeof gifts)[number] | null
   >(null)
   const [selectedType, setSelectedType] =
      useState<(typeof giftTypes)[number]>('Todos')
   const [showBackToTop, setShowBackToTop] = useState(false)
   const filteredGifts = gifts.filter(
      (gift) => selectedType === 'Todos' || gift.type === selectedType,
   )

   useEffect(() => {
      if (window.matchMedia('(max-width: 760px)').matches) {
         document.documentElement.classList.remove('snap-scroll')
         return undefined
      }

      document.documentElement.classList.add('snap-scroll')
      const sections = () =>
         Array.from(
            document.querySelectorAll<HTMLElement>('[data-snap-section]'),
         )
      let isScrolling = false
      let touchStartY = 0

      const getCurrentIndex = () => {
         const viewportMiddle = window.scrollY + window.innerHeight / 2

         return sections().reduce(
            (closestIndex, section, index, allSections) => {
               const currentDistance = Math.abs(
                  section.offsetTop + section.offsetHeight / 2 - viewportMiddle,
               )
               const closestDistance = Math.abs(
                  allSections[closestIndex].offsetTop +
                     allSections[closestIndex].offsetHeight / 2 -
                     viewportMiddle,
               )

               return currentDistance < closestDistance ? index : closestIndex
            },
            0,
         )
      }

      const scrollToSection = (direction: number) => {
         const snapSections = sections()
         const targetIndex = Math.min(
            Math.max(getCurrentIndex() + direction, 0),
            snapSections.length - 1,
         )
         const target = snapSections[targetIndex]

         if (!target || isScrolling) {
            return
         }

         isScrolling = true
         target.scrollIntoView({
            behavior: 'smooth',
            block: target.tagName === 'FOOTER' ? 'end' : 'start',
         })
         window.setTimeout(() => {
            isScrolling = false
         }, 850)
      }

      const canScrollInside = (
         target: EventTarget | null,
         direction: number,
      ) => {
         const scrollArea =
            target instanceof Element
               ? target.closest<HTMLElement>('[data-internal-scroll]')
               : null

         if (!scrollArea) {
            return false
         }

         const canScrollDown =
            scrollArea.scrollTop + scrollArea.clientHeight <
            scrollArea.scrollHeight - 1
         const canScrollUp = scrollArea.scrollTop > 0

         return direction > 0 ? canScrollDown : canScrollUp
      }

      const onWheel = (event: WheelEvent) => {
         if (Math.abs(event.deltaY) < 8) {
            return
         }

         if (canScrollInside(event.target, event.deltaY)) {
            return
         }

         event.preventDefault()
         scrollToSection(event.deltaY > 0 ? 1 : -1)
      }

      const onKeyDown = (event: KeyboardEvent) => {
         const nextKeys = ['ArrowDown', 'PageDown', ' ']
         const previousKeys = ['ArrowUp', 'PageUp']

         if (![...nextKeys, ...previousKeys].includes(event.key)) {
            return
         }

         event.preventDefault()
         scrollToSection(nextKeys.includes(event.key) ? 1 : -1)
      }

      const onTouchStart = (event: TouchEvent) => {
         touchStartY = event.touches[0].clientY
      }

      const onTouchEnd = (event: TouchEvent) => {
         const touchEndY = event.changedTouches[0].clientY
         const deltaY = touchStartY - touchEndY

         if (Math.abs(deltaY) < 30) {
            return
         }

         scrollToSection(deltaY > 0 ? 1 : -1)
      }

      window.addEventListener('wheel', onWheel, { passive: false })
      window.addEventListener('keydown', onKeyDown)
      window.addEventListener('touchstart', onTouchStart, { passive: true })
      window.addEventListener('touchend', onTouchEnd)

      return () => {
         document.documentElement.classList.remove('snap-scroll')
         window.removeEventListener('wheel', onWheel)
         window.removeEventListener('keydown', onKeyDown)
         window.removeEventListener('touchstart', onTouchStart)
         window.removeEventListener('touchend', onTouchEnd)
      }
   }, [])

   useEffect(() => {
      const updateBackToTopVisibility = () => {
         const hero = document.getElementById('topo')

         if (!hero) {
            setShowBackToTop(false)
            return
         }

         setShowBackToTop(hero.getBoundingClientRect().bottom <= 80)
      }

      updateBackToTopVisibility()
      window.addEventListener('scroll', updateBackToTopVisibility, {
         passive: true,
      })
      window.addEventListener('resize', updateBackToTopVisibility)

      return () => {
         window.removeEventListener('scroll', updateBackToTopVisibility)
         window.removeEventListener('resize', updateBackToTopVisibility)
      }
   }, [])

   return (
      <>
         <MobileInvite />

         <div className="desktop-home">
            <section className="hero snap-section" id="topo" data-snap-section>
               <div className="hero__carousel" aria-hidden="true">
                  {[
                     '/assets/carousel/cs1.png',
                     '/assets/carousel/cs2.png',
                     '/assets/carousel/cs3.png',
                  ].map((src) => (
                     <div className="hero__carousel-slide" key={src}>
                        <img
                           className="hero__carousel-backdrop"
                           src={src}
                           alt=""
                        />
                        <img
                           className="hero__carousel-photo"
                           src={src}
                           alt=""
                        />
                     </div>
                  ))}
               </div>
               <div className="hero__content">
                  <h1>{siteConfig.coupleDisplayName}</h1>
                  <p>O NOSSO CASAMENTO COLORIDO</p>
               </div>
               <button
                  className="scroll-indicator"
                  type="button"
                  aria-label="Ir para a próxima seção"
                  onClick={() =>
                     document
                        .querySelector<HTMLElement>(
                           '[data-snap-section="intro"]',
                        )
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
               >
                  <span />
               </button>
            </section>

            <section
               className="section section--intro snap-section"
               id="detalhes"
               data-snap-section="intro"
            >
               <div className="container text-center">
                  <div style={{ margin: '0 auto 80px auto' }}>
                     <h2 className="page-title text-uppercase">
                        Contagem regressiva
                     </h2>
                     <Countdown />
                  </div>
                  <h3>ESPERAMOS VÊ-LO</h3>
                  <p className="intro-copy">
                     Este é o lugar onde o seu texto começa. Pode clicar aqui e
                     começar a digitar. Sed ut perspiciatis unde omnis iste
                     natus error sit voluptatem accusantium doloremque
                     laudantium totam rem aperiam eaque ipsa quae ab illo
                     inventore veritatis.
                  </p>

                  <hr />

                  <div className="event-grid">
                     <article>
                        <h2>Cerimônia</h2>
                        <p>
                           <strong>Localização</strong>:{' '}
                           {siteConfig.ceremony.location}
                           <br />
                           <strong>Hora</strong>: {siteConfig.ceremony.time}
                        </p>
                     </article>

                     <article style={{ padding: 0 }}>
                        <h2>Recepção</h2>
                        <p>
                           <strong>Localização</strong>:{' '}
                           {siteConfig.reception.location}
                           <br />
                           <strong>Hora</strong>: {siteConfig.reception.time}
                        </p>
                     </article>
                  </div>
               </div>
            </section>

            <section
               className="section gifts-section snap-section"
               id="presentes"
               data-snap-section
            >
               <div className="container gifts-layout">
                  <aside
                     className="gift-filter"
                     aria-label="Filtro por tipo de presente"
                  >
                     <h2>Lista de presentes</h2>
                     <div className="gift-filter__buttons">
                        {giftTypes.map((type) => (
                           <button
                              className={selectedType === type ? 'active' : ''}
                              key={type}
                              type="button"
                              onClick={() => setSelectedType(type)}
                           >
                              {type}
                           </button>
                        ))}
                     </div>
                  </aside>

                  <div className="gift-list" data-internal-scroll>
                     {filteredGifts.map((gift) => (
                        <button
                           className="gift-card"
                           key={gift.id}
                           type="button"
                           onClick={() => setSelectedGift(gift)}
                        >
                           <span>{gift.type}</span>
                           <strong>{gift.name}</strong>
                           <small>{gift.price}</small>
                        </button>
                     ))}
                  </div>
               </div>
            </section>

            <section
               className="section rsvp-section snap-section"
               style={{ margin: 0, paddingTop: '120px' }}
               id="informacoes"
               data-snap-section
            >
               <div className="text-center rsvp-content" data-internal-scroll>
                  <div className="container">
                     <h2 className="page-title text-uppercase">
                        Informações Úteis
                     </h2>

                     <div className="">
                        <div>
                           <p>
                              <strong>Como chegar à festa</strong>
                           </p>
                        </div>
                     </div>

                     <div className="map-frame">
                        <iframe
                           title={siteConfig.map.title}
                           src={siteConfig.map.url}
                           loading="lazy"
                        />
                     </div>
                  </div>
               </div>
            </section>

            {showBackToTop && (
               <button
                  className="back-to-top"
                  type="button"
                  aria-label="Voltar ao topo"
                  onClick={() =>
                     document
                        .getElementById('topo')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
               >
                  <span className="back-to-top__arrow" aria-hidden="true">
                     ↑
                  </span>
                  <span>Topo</span>
               </button>
            )}

            {selectedGift && (
               <div
                  className="gift-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="gift-modal-title"
                  onClick={() => setSelectedGift(null)}
               >
                  <div
                     className="gift-modal__content"
                     data-internal-scroll
                     onClick={(event) => event.stopPropagation()}
                  >
                     <button
                        className="gift-modal__close"
                        type="button"
                        aria-label="Fechar modal"
                        onClick={() => setSelectedGift(null)}
                     >
                        ×
                     </button>
                     <span>{selectedGift.type}</span>
                     <h2 id="gift-modal-title">{selectedGift.name}</h2>
                     <p>{selectedGift.description}</p>
                     <strong className="gift-modal__price">
                        {selectedGift.price}
                     </strong>
                     <div className="gift-modal__payment">
                        <img
                           className="gift-qr"
                           src="/assets/qrcode.png"
                           alt="QR Code do Pix"
                        />
                        <div>
                           <h3>Chave Pix</h3>
                           <p>{selectedGift.pixKey}</p>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </>
   )
}
