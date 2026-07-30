export const updatePageSEO = (title: string, description?: string) => {
  document.title = `${title} | Senior Full Stack Engineer & Software Architect`;
  
  if (description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }
};
