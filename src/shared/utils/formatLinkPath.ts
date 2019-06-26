import slugify from 'slugify';

export const formatLinkPath = (path: string): string => {
  return slugify(path, { lower: true });
};
