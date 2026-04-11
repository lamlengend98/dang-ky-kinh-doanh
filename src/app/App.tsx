import { RouterProvider } from 'react-router';
import { router } from './routes';
import { TooltipProvider } from './components/ui/tooltip';

export default function App() {
  return (
    <TooltipProvider delayDuration={400}>
      <RouterProvider router={router} />
    </TooltipProvider>
  );
}