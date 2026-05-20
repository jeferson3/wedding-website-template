/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_COUPLE_DISPLAY_NAME?: string
   readonly VITE_FOOTER_COUPLE_NAME?: string
   readonly VITE_WEDDING_DATE?: string
   readonly VITE_MOBILE_TOP_TEXT?: string
   readonly VITE_INVITATION_TEXT?: string
   readonly VITE_PARTNER_ONE_NAME?: string
   readonly VITE_PARTNER_ONE_FATHER?: string
   readonly VITE_PARTNER_ONE_MOTHER?: string
   readonly VITE_PARTNER_TWO_NAME?: string
   readonly VITE_PARTNER_TWO_FATHER?: string
   readonly VITE_PARTNER_TWO_MOTHER?: string
   readonly VITE_CEREMONY_LOCATION?: string
   readonly VITE_CEREMONY_TIME?: string
   readonly VITE_RECEPTION_LOCATION?: string
   readonly VITE_RECEPTION_TIME?: string
   readonly VITE_MAP_TITLE?: string
   readonly VITE_MAP_URL?: string
}

interface ImportMeta {
   readonly env: ImportMetaEnv
}
