import { useEffect, useState } from 'react';
import { fetchLogo } from '../services/sanityServices/fetchLogo';
import { urlFor } from '../../studio/sanityClient';

interface Logo {
  image: string;
  alt: string;
}

export const useLogo = () => {
  const [logo, setLogo] = useState<Logo | ''>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLogo = async () => {
      try {
        const logoData = await fetchLogo();
        if (logoData && logoData.image) {
            const image = urlFor(logoData.image).url();
            const alt = '';
            setLogo({ image, alt });
          }
      } catch (err) {
        setError('Failed to fetch logo');
      } finally {
        setLoading(false);
      }
    };

    getLogo();
  }, []);

  return { logo, loading, error };
};
