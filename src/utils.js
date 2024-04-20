export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
  
  export const resume = new URL('/assets/certificate/resume.pdf', import.meta.url).href;