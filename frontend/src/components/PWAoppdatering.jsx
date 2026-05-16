import { useEffect } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

const PWAOppdatering = () => {
    const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW()

    useEffect(() => {
        if (needRefresh) {
            const svar = window.confirm("Ny versjon av HelseBooking er tilgjengelig! Vil du oppdatere?")
            if (svar) updateServiceWorker(true)
        }
    }, [needRefresh])

    return null
}

export default PWAOppdatering