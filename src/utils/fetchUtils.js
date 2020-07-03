export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error('Oops! Something went wrong.');
};

export const json = (response) => response.json();
