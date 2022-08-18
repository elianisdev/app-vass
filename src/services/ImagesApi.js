const request = async (path) => {
  const url = `https://jsonplaceholder.typicode.com/${path}`;
  return (await fetch(url)).json();
};

const ImagesApi = {
  getPhotosByAlbum: async (albumId) => {
    return await request(`albums/${albumId}/photos`);
  },
};

export default ImagesApi;
