import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser({
  initialData,
  redirectOnSuccess,
  redirectOnFailure,
} = {}) {
  const router = useRouter();
  const { data, error } = useSWR('/api/v1/me', fetcher, { initialData });
  if (error) {
    return {
      error,
    };
  }

  const isLoading = !data && !error;
  const user = data?.user;
  const errorObj = data?.error;

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user && redirectOnSuccess) {
      router.push(redirectOnSuccess);
    }
    if (!user && redirectOnFailure) {
      router.push(redirectOnFailure);
    }
  }, [isLoading, user, redirectOnFailure, redirectOnSuccess]);

  return {
    isLoading,
    user,
    error: errorObj,
  };
}
