import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ArrowPathIcon className="h-24 w-24 animate-spin text-blue-500" />
    </div>
  );
}
