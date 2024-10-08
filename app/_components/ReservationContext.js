'use client'

const { createContext, useState, useContext } = require('react')

const ReservationContext = createContext()

const initialState = { from: undefined, to: undefined }

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState)

  const resetRange = () => setRange(initialState)
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  )
}

function useReservation() {
  const context = useContext(ReservationContext)
  if (!context) return new Error('Context is called outside the provider')

  return context
}

export { useReservation, ReservationProvider }
