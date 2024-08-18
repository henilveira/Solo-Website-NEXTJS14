// _app.tsx ou App.tsx
import { AuthProvider } from '@/components/ui/AuthProvider';
import SomeComponent from './teste'

export default function MyApp() {
  return (
    <AuthProvider>
      <SomeComponent />
    </AuthProvider>
  );
}

