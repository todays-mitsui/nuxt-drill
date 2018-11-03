export default function({ $axios }) {
  $axios.onRequest((config) => {
    const qiitaToken = '<qiitaToken>';

    if (qiitaToken) {
      config.headers.common['Authorization'] = `Bearer ${qiitaToken}`;
    }

    return config;
  });
};
