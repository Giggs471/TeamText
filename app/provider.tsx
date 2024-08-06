'use client'

import Loader from '@/components/loader'
import {ClientSideSuspense, LiveblocksProvider} from '@liveblocks/react/suspense'
import React from 'react'

const provider = ({children}: {children: React.ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default provider