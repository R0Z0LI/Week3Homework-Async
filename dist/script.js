let data;

const fetchProfileInfo = async () => {
  const res = await fetch("https://my.api.mockaroo.com/profiles.json", {
    method: "GET",
    headers: {
      "X-API-Key": "fdf950f0",
    },
  });
  data = await res.json();
};

fetchProfileInfo();

console.log(data);
