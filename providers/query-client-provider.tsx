'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
    // QueryClient hanya dibuat di sisi klien
    const [queryClient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}