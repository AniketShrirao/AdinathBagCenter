import  client  from '../../../studio/sanityClient';

// Fetch the logo data
export const fetchLogo = async () => {
    const query = '*[_type == "logo"][0]';
    return client.fetch(query);
  };