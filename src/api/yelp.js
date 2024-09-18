import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer orS5HCE4cf5QlurwYbvcTR19xI68-oKe9LlpyK20x1q2tWOwR6IHIKcMtsyeAkWQMTWdb0_iWpTBh60au8k-RY8eieLJW27KibrpRrVw8UqycmwFZNfPKNNqd6nqZnYx",
  },
});
